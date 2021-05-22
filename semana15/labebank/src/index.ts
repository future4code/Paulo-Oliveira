import express, { Request, Response } from 'express'
import cors from 'cors'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)
const app = express()

app.use(express.json())
app.use(cors())

type Transacao = {
  valor: number
  data: number
  descricao: string
}

type Conta = {
  nome: string
  cpf: string
  dataNasc: string
  saldo: number
  extratos: Array<Transacao>
}

let usuarios: Array<Conta> = []

app.post('/users', (req: Request, res: Response) => {
  const nome: string = String(req.body.nome)
  const cpf: string = String(req.body.cpf)
  const dataNasc: string = String(req.body.dataNasc)
  const dayjsDate = dayjs(dataNasc, 'DD-MM-YYYY')

  try {
    if (!dataValida(dayjsDate)) {
      throw new Error(
        'Por favor insira uma data válida nesse formato e.g: (DD-MM-YYYY) (20-05-2000)'
      )
    } else if (menorDeIdade(dayjsDate)) {
      throw new Error('Você nao tem a idade necessária para criar uma conta')
    } else if (usuarioExiste(cpf)) {
      throw new Error('O cpf passado já está cadastrado')
    }

    const novoUsuario: Conta = {
      nome,
      cpf,
      dataNasc,
      saldo: 0,
      extratos: [],
    }

    usuarios = [...usuarios, novoUsuario]
    res.status(201).send(novoUsuario)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

app.get('/users', (req: Request, res: Response) => {
  res.status(200).send(usuarios)
})

app.get('/users/balance', (req: Request, res: Response) => {
  const cpf: string = String(req.body.cpf)
  try {
    if (!cpf) {
      throw new Error('Por favor digite um cpf válido')
    }

    const resultado = procurarUsuario(cpf)

    if (!resultado) {
      throw new Error('Não foi achado nenhum usuário com esse cpf')
    }

    res.status(200).send({ saldo: resultado.saldo })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

app.put('/users/deposit', (req: Request, res: Response) => {
  const nome: string = String(req.body.nome)
  const cpf: string = String(req.body.cpf)
  const valor: number = Number(req.body.valor)

  try {
    if (!nome || !cpf) {
      throw new Error('Coloque um nome e um cpf válido')
    } else if (valorInvalido(valor)) {
      throw new Error('Coloque um valor válido')
    }

    if (!usuarioExiste(cpf)) {
      throw new Error('O usuário com esse cpf não existe')
    }

    const transacao: Transacao = {
      valor,
      data: Date.now(),
      descricao: 'Depósito de dinheiro',
    }

    let usuarioIndex: number = 0
    usuarios = usuarios.map((usuario, index) => {
      if (usuario.cpf === cpf) {
        usuarioIndex = index
        return {
          ...usuario,
          saldo: usuario.saldo + valor,
          extratos: [transacao, ...usuario.extratos],
        }
      }
      return usuario
    })
    res.status(200).send({
      nome: usuarios[usuarioIndex].nome,
      saldo: usuarios[usuarioIndex].saldo,
    })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

app.post('/users/payment', (req: Request, res: Response) => {
  const descricao: string = String(req.body.descricao)
  const valor: number = Number(req.body.valor)
  const cpf: string = String(req.body.cpf)

  const dataVenc: string = String(req.body.dataVenc)
  const dayjsDate = dayjs(dataVenc, 'DD-MM-YYYY')
  try {
    if (!dataValida(dayjsDate) && dataVenc) {
      throw new Error(
        'Por favor insira uma data válida nesse formato e.g: (DD-MM-YYYY) (20-05-2000)'
      )
    } else if (dayjsDate.valueOf() < Date.now()) {
      throw new Error('Por favor coloque a data presente ou uma data futura')
    } else if (!cpf || !descricao) {
      throw new Error('Coloque um cpf e uma descricao válidos')
    } else if (isNaN(valor) || valor < 0) {
      throw new Error('Coloque um valor válido')
    }

    const usuarioAtual = procurarUsuario(cpf)

    if (!usuarioAtual) {
      throw new Error('Não existe nenhuma conta com esse cpf')
    } else if (saldoInsuficiente(usuarioAtual, valor)) {
      throw new Error(
        'Seu saldo é menor que o valor que você deseja fazer o pagamento'
      )
    }

    const transacao: Transacao = {
      valor: -valor,
      data: dataVenc ? dayjsDate.valueOf() : Date.now(),
      descricao: descricao,
    }

    usuarios = usuarios.map((usuario) => {
      if (usuario.cpf === cpf) {
        return {
          ...usuario,
          extratos: [transacao, ...usuario.extratos],
        }
      }
      return usuario
    })

    res.status(201).send(transacao)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

app.put('/users/balance', (req: Request, res: Response) => {
  const cpf: string = String(req.body.cpf)

  try {
    if (!cpf) {
      throw new Error('Coloque um cpf válidos')
    }

    if (!usuarioExiste(cpf)) {
      throw new Error('Não existe nenhuma conta com esse cpf')
    }

    let indexUsuario: number = 0
    usuarios = usuarios.map((usuario, index) => {
      if (usuario.cpf === cpf) {
        indexUsuario = index
        const dataAtual = Date.now()
        const saldoAtual = usuario.extratos.reduce(
          (prev: number, current: Transacao) => {
            if (current.data < dataAtual) {
              return prev + current.valor
            }
            return prev
          },
          0
        )
        return {
          ...usuario,
          saldo: saldoAtual,
        }
      }
      return usuario
    })

    res.status(200).send({ saldo: usuarios[indexUsuario].saldo })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

app.post('/users/transfer', (req: Request, res: Response) => {
  const nome: string = String(req.body.nome)
  const cpf: string = String(req.body.cpf)
  const nomedest: string = String(req.body.nomedest)
  const cpfdest: string = String(req.body.cpfdest)
  const valor: number = Number(req.body.valor)
  try {
    if (!nome || !nomedest) {
      throw new Error('Por favor digite um nome válido')
    } else if (!cpf || !cpfdest) {
      throw new Error('Por favor digite um cpf válido')
    } else if (valorInvalido(valor)) {
      throw new Error('Por favor digite um valor válido')
    }

    const usuarioAtual: Conta | undefined = procurarUsuario(cpf)
    const usuarioDesinatario: Conta | undefined = procurarUsuario(cpfdest)
    if (!usuarioAtual || !usuarioDesinatario) {
      throw new Error('O cpf enviado não está cadastrado a nenhum usuário')
    } else if (saldoInsuficiente(usuarioAtual, valor)) {
      throw new Error(
        'O seu saldo não é suficiente para realizar a transferencia'
      )
    }

    const transferenciaFeita: Transacao = {
      valor: -valor,
      data: Date.now(),
      descricao: 'Transferência Bancária',
    }

    const transferenciaRecebida: Transacao = {
      valor: valor,
      data: Date.now(),
      descricao: 'Transferência Bancária',
    }

    usuarios = usuarios.map((usuario) => {
      if (usuario.cpf === cpf) {
        return {
          ...usuario,
          extratos: [transferenciaFeita, ...usuario.extratos],
        }
      } else if (usuario.cpf === cpfdest) {
        return {
          ...usuario,
          extratos: [transferenciaRecebida, ...usuario.extratos],
        }
      }
      return usuario
    })

    res.status(200).send({
      remetente: transferenciaFeita,
      destinatario: transferenciaRecebida,
    })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong')
})

app.listen(3003, () => {
  console.log('Server is running in http://localhost:3003')
})

function valorInvalido(valor: number) {
  return isNaN(valor) || valor < 0
}

function menorDeIdade(dayjsDate: dayjs.Dayjs) {
  return dayjs().year() - dayjsDate.year() <= 18
}

function dataValida(dayjsDate: dayjs.Dayjs) {
  return dayjsDate.isValid()
}

function saldoInsuficiente(usuarioAtual: Conta, valor: number) {
  return usuarioAtual.saldo < valor
}

function procurarUsuario(cpf: string): Conta | undefined {
  return usuarios.find((usuario) => {
    return usuario.cpf === cpf
  })
}

function usuarioExiste(cpf: string) {
  return usuarios.some((usuario) => usuario.cpf === cpf)
}

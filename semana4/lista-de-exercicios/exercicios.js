//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  array.reverse()
  return array

}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let novoArray = []

   for (numero of array) {
      if (numero % 2 === 0) {
         novoArray.push(Math.pow(numero, 2))
         
      }
   }
   return novoArray

}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let novoArray = []

   for (numero of array) {
      if (numero % 2 === 0) {
         novoArray.push(numero)
         
      }
   }
   return novoArray

}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maiorNum = 0

   for (let i = 0; i < array.length; i++) {
      if (array[i] > maiorNum) {
         maiorNum = array[i]
      }
   }
   return maiorNum

}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
   
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const respostas = [false, false, true, true, true]
   return respostas

}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let numPares = 0
   let num = 0
   const novoArray = []

   while (numPares < n) {
      if (num % 2 === 0) {
         novoArray.push(num)
         numPares++

      }
      num++

   }
   return novoArray

}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if (a === b && b === c) {
   return 'Equilátero'

} else if (a !== b && b !== c || a !== b && b !== c) {
   return 'Escaleno'

} else {
   return 'Isósceles'

}
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   const novoObjeto = {
      maiorNumero: '',
      maiorDivisivelporMenor: '',
      diferenca: ''
   }

   if (num1 > num2) {
      novoObjeto.maiorNumero = num1
      novoObjeto.diferenca = num1 - num2

      if (num1 % num2 === 0) {
         novoObjeto.maiorDivisivelporMenor = true

      } else {
         novoObjeto.maiorDivisivelporMenor = false

      }

   } else {
      novoObjeto.maiorNumero = num2
      novoObjeto.diferenca = num2 - num1

      if (num2 % num1 === 0) {
         novoObjeto.maiorDivisivelporMenor = true

      } else {
         novoObjeto.maiorDivisivelporMenor = false
         
      }

   }
   return novoObjeto

}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme

}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   const objeto = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
   return objeto

}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   const objeto = {
      nome: 'ANÔNIMO',
      idade: 25,
      email: 'astrodev@future4.com.br',
      endereco: 'Rua do Futuro, 4'
   }
   return objeto

}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}
// Exercícios de interpretação de código

// Exercício 1

// O código testa se o número digitado pelo usuário é par ou impar, caso seja par, aparecera a mensagem "Passou no teste", caso seja impar, aparecerá "Não passou no teste".


// Exercício 2

// a: O código serve para mostrar o preço de cada fruta que o usuário pesquisar.

// b: "O preço da fruta maçã é R$ 2.25"

// c: "O preço da fruta Pêra  é  R$  5"


// Exercício 3

// a: A primeira linha de código está pegando o valor que o usuário digita, transforma em número e armazena em uma variável.

// b: Se digitar o número 10, a mensagem seria: "Esse número passou no teste", caso digitasse -10, não apareceria nenhuma mensagem.

// c: Aparece o erro que a variável "mensagem" não foi definida, pois a mesma foi criada no escopo do bloco "filho" e foi chamada no bloco "pai".


// Exercícios de escrita de código

// Exercício 4

let idadeUsuario = Number(prompt('Qual a sua idade?'))

if(idadeUsuario >= 18) {
    console.log('Você pode dirigir')
} else {
    console.log('Você não pode dirigir')
}


// Exercício 5

let turnoAluno = prompt('Qual o seu turno de estudos? Digite "M" para Matutino, "V" para Vespertino ou "N" para Noturno.')

if(turnoAluno === 'M') {
    console.log('Bom Dia!')
} else if(turnoAluno === 'V') {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}


// Exercício 6

// let generoFilme = prompt('Qual o gênero do filme que deseja assistir?')
// let precoIngresso = Number(prompt('Qual o preço do ingresso para o filme desejado?'))

// if(generoFilme === 'fantasia' && precoIngresso <= 15) {
//     console.log('Bom filme!')
// } else {
//     console.log('Escolha outro filme :(')
// }


// DESAFIOS

// DESAFIO 1

// let generoFilme = prompt('Qual o gênero do filme que deseja assistir?')
// let precoIngresso = Number(prompt('Qual o preço do ingresso para o filme desejado?'))

// if(generoFilme === 'fantasia' && precoIngresso <= 15) {

//     let snack = prompt('Qual snack que você quer comprar?')

//     console.log('Bom filme!')
//     console.log('... com ' + snack)
// } else {
//     console.log('Escolha outro filme :(')
// }


// DESAFIO 2

let nomeUsuario = prompt('Bem vindo(a) a bilheteria, qual é o seu nome?')
let tipoDoJogo = prompt('Deseja comprar ingresso pra um jogo Nacional (DO) ou Internacional (IN)?')
let etapaJogo = prompt('Qual a etapa do campeonato que deseja assistir: Semi-final (SF), Terceiro Lugar (DT) ou Final (FI)?')
let categoriaIngresso = Number(prompt('Qual a categoria de ingresso que deseja adquirir: 1, 2, 3 ou 4?'))
let quantidadeIngresso = Number(prompt('Quantos ingressos deseja adquirir?'))
let pagamentoTotal

if(tipoDoJogo === 'DO') {
    tipoDoJogo = 'Nacional'

    if(etapaJogo === 'SF') {
        etapaJogo = 'Semi-final'

        if(categoriaIngresso === 1) {            
            valorUnidadeIngresso = 1320
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)

        } else if(categoriaIngresso === 2) {
            valorUnidadeIngresso = 880
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)
            
        } else if(categoriaIngresso === 3) {
            valorUnidadeIngresso = 550
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)

        } else if(categoriaIngresso === 4) {
            valorUnidadeIngresso = 220
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)
            
        } else {
            console.log('Opção invalida')
        }

    } else if(etapaJogo === 'DT') {
        etapaJogo = 'Decisão de Terceiro Lugar'

        if(categoriaIngresso === 1) {
            valorUnidadeIngresso = 660
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)
            
        } else if(categoriaIngresso === 2) {
            valorUnidadeIngresso = 440
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)

        } else if(categoriaIngresso === 3) {
            valorUnidadeIngresso = 330
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)

        } else if(categoriaIngresso === 4) {
            valorUnidadeIngresso = 170
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)
            
        } else {
            console.log('Opção invalida')
        }

    } else if(etapaJogo === 'FI') {
        etapaJogo = 'Final'

        if(categoriaIngresso === 1) {
            valorUnidadeIngresso = 1980
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)

        } else if(categoriaIngresso === 2) {
            valorUnidadeIngresso = 1320
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)

        } else if(categoriaIngresso === 3) {
            valorUnidadeIngresso = 880
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)

        } else if(categoriaIngresso === 4) {
            valorUnidadeIngresso = 330
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: R$ ' + valorUnidadeIngresso)
            console.log('valor total: R$ ' + pagamentoTotal)
            
        } else {
            console.log('Opção invalida')
        }

    } else {
        console.log('Opção invalida')
    }

} else if(tipoDoJogo === 'IN') {
    tipoDoJogo = 'Internacional'

    if(etapaJogo === 'SF') {
        etapaJogo = 'Semi-final'

        if(categoriaIngresso === 1) {
            valorUnidadeIngresso = 1320
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)

        } else if(categoriaIngresso === 2) {
            valorUnidadeIngresso = 880
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)
            
        } else if(categoriaIngresso === 3) {
            valorUnidadeIngresso = 550
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)

        } else if(categoriaIngresso === 4) {
            valorUnidadeIngresso = 220
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)
            
        } else {
            console.log('Opção invalida')
        }

    } else if(etapaJogo === 'DT') {
        etapaJogo = 'Decisão de Terceiro Lugar'

        if(categoriaIngresso === 1) {
            valorUnidadeIngresso = 660
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)
            
        } else if(categoriaIngresso === 2) {
            valorUnidadeIngresso = 440
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)

        } else if(categoriaIngresso === 3) {
            valorUnidadeIngresso = 330
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)

        } else if(categoriaIngresso === 4) {
            valorUnidadeIngresso = 170
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)
            
        } else {
            console.log('Opção invalida')
        }

    } else if(etapaJogo === 'FI') {
        etapaJogo = 'Final'

        if(categoriaIngresso === 1) {
            valorUnidadeIngresso = 1980
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)

        } else if(categoriaIngresso === 2) {
            valorUnidadeIngresso = 1320
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)

        } else if(categoriaIngresso === 3) {
            valorUnidadeIngresso = 880
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)

        } else if(categoriaIngresso === 4) {
            valorUnidadeIngresso = 330
            pagamentoTotal = quantidadeIngresso * valorUnidadeIngresso

            console.log('--Dados da compra--')
            console.log('Nome do cliente: ' + nomeUsuario)
            console.log('Tipo de Jogo: ' + tipoDoJogo)
            console.log('Etapa do Jogo: ' + etapaJogo)
            console.log('Categoria: ' + categoriaIngresso)
            console.log('Quantidade de Ingressos: ' + quantidadeIngresso)
            console.log('--Valores--')
            console.log('Valor do ingresso: U$ ' + valorUnidadeIngresso / 4.10)
            console.log('valor total: U$ ' + pagamentoTotal / 4.10)
            
        } else {
            console.log('Opção invalida')
        }

    } else {
        console.log('Opção invalida')
    }

} else {
    console.log('Opção invalida')
}
// EXERCICIO 1

// a) 

let minhaString: string = 4

// Erro, a variavel só aceita valores em string.

// b)

let meuNumero: number = 6

// Para a variavel aceitar também string, é necessário colocar "number | string".

// c)

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const paulo: pessoa = {
    nome: 'Paulo',
    idade: 30,
    corFavorita: 'verde'
}

const maria: pessoa = {
    nome: 'Maria',
    idade: 23,
    corFavorita: 'azul'
}

const paloma: pessoa = {
    nome: 'Paloma',
    idade: 27,
    corFavorita: 'rosa'
}
// Exercícios de interpretação de código

// EXERCÍCIO 1

// a. 10 e 50

// b. Não apareceria nada


// EXERCÍCIO 2

// a. Darvas, Caio

// b. Amanda, Caio


// EXERCÍCIO 3

// Essa função recebe um array, analisa cada número se é par, caso seja, multiplica o mesmo número por si e adiciona em um novo array.

// Poderia se chamar "arrayInicial", ao invés de "metodo".


// Exercícios de escrita de código

// EXERCÍCIO 4

// a. 

const sobreMim1 = () => {
    return 'Eu sou Paulo, tenho 30 anos, moro no Rio de Janeiro e sou estudante.'
}

console.log(sobreMim1())

// b.

const sobreMim2 = (nome, idade, endereco, souEstudante) => {
    if(souEstudante) {
        return 'Eu sou ' + nome + ', tenho ' + idade + ' anos, moro no ' + endereco + ' e sou estudante.'
    } else {
        return 'Eu sou ' + nome + ', tenho ' + idade + ' anos, moro no ' + endereco + ' e não sou estudante.'
    }
}

console.log(sobreMim2('Paulo', 30, 'Rio de Janeiro', true))


// EXERCÍCIO 5

// a. 

const somaNum = (a, b) => {
    soma = a + b
    return soma
}

console.log(somaNum(2,5))

// b.

const verdadeiroOuFalso = (a, b) => {
    if(a >= b) {
        return true
    }
}

// c.

const mensagens = (a) => {
    for (let i = 1; i <= 10; i++){
        console.log(a)
    }
}

mensagens('Olá, Cruz!')


// EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a.

const quantidadeElementos = () => {
    quantidade = array.length
    console.log(quantidade)
}

quantidadeElementos()

// b.

const arrayParOuImpar = (numero) => {
    return numero % 2 === 0
}

console.log(arrayParOuImpar(2))

// c.

const arrayQuantidadePares = (array) => {
    let pares = 0

    for (let numero of array) {
        if(numero % 2 === 0) {
            pares++
        }
    }
    
    return pares
}

console.log(arrayQuantidadePares(array))

// d.

const arrayQuantidadePares2 = (array) => {
    let pares = 0

    for (let numero of array) {
        if(arrayParOuImpar(numero)) {
            pares++
        }
    }
    
    return pares
}

console.log(arrayQuantidadePares2(array))

// Exercícios de interpretação de código

// EXERCÍCIO 1

// 10


// EXERCÍCIO 2

// a:   19, 21, 23, 25, 27, 30

// b:   Pra acessar o indice, deve-se usar apenas o "for"


// DESAFIO 1

// 0
// 00
// 000
// 0000


// Exercícios de escrita de código

// EXERCÍCIO 3

// a

let arrayOriginal = [1,2,3,4,5,6,7,8,9,10]

for (let numero of arrayOriginal) {
    if(numero < 11) {
        console.log(numero)
    }
}

// b

for (let numeroDivide of arrayOriginal) {
    if(numeroDivide < 11) {
        console.log(numeroDivide / 10)
    }
}

// c

let arrayPares = []

for (let i = 0; i < arrayOriginal.length; i++) {
    if(arrayOriginal[i] % 2 === 0) {
        arrayPares.push(arrayOriginal[i])
    }
}

console.log(arrayPares)

// d

for (let i = 1; i < 11; i++) {
    console.log('O elemento do index i é: ' + i)
}

// e

let valorMaximo = 0
let valorMinimo = 0

for (let i = 0; i < arrayOriginal.length; i++) {
    if(arrayOriginal[i] > valorMaximo) {
        valorMaximo = arrayOriginal[i]
    } else if(arrayOriginal[i] < valorMinimo) {
        valorMinimo = arrayOriginal[i]
    }
}

console.log('O maior número é o ' + valorMaximo + ' e o menor é ' + valorMinimo)
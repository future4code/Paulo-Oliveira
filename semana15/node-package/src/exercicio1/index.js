// EXERCÍCIO 1

/*
a)  
    O process.argv é utilizado para acessar os parâmetros pré determinados.
*/

/*
b) 
    const userInfo = require("../user-info") 
    const name = process.argv[2]
    const age = process.argv[3]
    console.log(`Olá, ${name}! Você tem ${age} anos.`);
*/

/*
c) 
    "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"
*/

const userInfo = require('../user-info');

const name = process.argv[2];
const age = process.argv[3];

const ageInSevenYears = Number(age) + 7;

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${ageInSevenYears}`);
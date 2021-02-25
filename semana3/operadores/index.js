// Exercícios de interpretação de código

// 1

// a. false
// b. false
// c. true
// e. boolean


// 2

// a. undefined
// b. null
// c. 11
// d. 3
// e. [3,19,5,6,7,8,9,10,11,12,13]
// f. 9


// Exercícios de escrita de código

// 1

let suaIdade = prompt('Qual a sua idade?')
let idadeAmigo = prompt('Qual a idade do seu melhor amigo?')

const IdadeMaior = Number(suaIdade) > Number(idadeAmigo)

console.log('Sua idade é maior do que a do seu melhor amigo?', IdadeMaior)

const diferenca = Number(suaIdade) - Number(idadeAmigo)

console.log('A diferença entre as suas idades é de', diferenca, 'anos.')


// 2

let numeroPar = prompt('Insira um número par.')

restoDivisao = Number(numeroPar) % 2

console.log(restoDivisao)

// Utilizando um número par, sempre restará 0 

// Utilizando um número impar, sempre estará 1


// 3

const listaDeTarefas = []

listaDeTarefas[0] = prompt('Me diga um tarefa que precisa realizar hoje.')
listaDeTarefas[1] = prompt('Me diga outra tarefa que precisa realizar hoje.')
listaDeTarefas[2] = prompt('Me diga mais uma tarefa que precisa realizar hoje.')

console.log(listaDeTarefas)

removerIndice = prompt('Digite o indice de alguma tarefa que já realizou hoje: 0, 1 ou 2.')

listaDeTarefas.splice(Number(removerIndice), 1)

console.log(listaDeTarefas)


// 4

let nomeDoUsuario = prompt('Qual o seu nome?')
let emailDoUsuario = prompt('Qual o seu e-mail')

console.log('O e-mail ' + emailDoUsuario +' foi cadastrado com sucesso. Seja bem vindo(a), ' + nomeDoUsuario + '!')



// DESAFIOS

// 1

// a

let fahrenheitA = 77
let kelvinA

kelvinA = (fahrenheitA - 32)*5/9 + 273.15

console.log('A. ' + kelvinA + ' K')

// b

let celsiusB = 80
let fahrenheitB

fahrenheitB = celsiusB*9/5 + 32

console.log('B. ' + fahrenheitB + 'ºF')

// c

let celsiusC = 30
let fahrenheitC
let kelvinC

fahrenheitC = celsiusC*9/5 + 32

kelvinC = (fahrenheitC - 32)*5/9 + 273.15

console.log('C. ' + fahrenheitC + 'ºF e ' + kelvinC + ' K')

// d

let celsiusUsuario = prompt('Digite o valor em Celsius para a conversão')

celsiusC = Number(celsiusUsuario)

fahrenheitC = celsiusC*9/5 + 32

kelvinC = (fahrenheitC - 32)*5/9 + 273.15

console.log('D. ' + fahrenheitC + 'ºF e ' + kelvinC + ' K')


// 2

// a

let precoEnergia = 0.05 * 280 
console.log('A. R$ '+ precoEnergia)

// b

let desconto15 = precoEnergia * (15 / 100)

let pagamentoComDesconto = precoEnergia - desconto15

console.log('B. R$ ' + pagamentoComDesconto)


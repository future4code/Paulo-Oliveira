// Exercícios de interpretação de código

// 1. 10 e 10, 5

// 2. 10, 10, 10


// Exercícios de escrita de código

// 1

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// As variaveis são undefined porque elas não foram definidas.

nome = prompt('Qual o seu nome?')
idade = prompt('Qual a sua idade?')

console.log(typeof nome)
console.log(typeof idade)

// Notei que mesmo usando números, o tipo da variavel idade é string.

console.log('Olá', nome,',', 'você tem', idade, 'anos')


// 2

let timeFavorito = prompt('Qual o seu time de futebol?')
let corFavorita = prompt('Qual a sua cor favorita?')
let musicaFavorita = prompt('Qual a sua musica favorita?')
let melhorLinguagem = prompt('Qual a melhor linguagem de programação e porque é Javascript?')
let ovoGalinha = prompt('Quem veio primeiro, o ovo ou a galinha?')

console.log('1. Qual o seu time de futebol? Resposta:', timeFavorito)
console.log('2. Qual a sua cor favorita? Resposta:', corFavorita)
console.log('3. qual a sua musica favorita? Resposta:', musicaFavorita)
console.log('4. Qual a melhor linguagem de programação e porque é Javascript? Resposta:', melhorLinguagem)
console.log('5. Quem veio primeiro, o ovo ou a galinha? Resposta:', ovoGalinha)


// 3

const comidas = ['arroz com brócolis', 'hamburguer vegano', 'falafel', 'strogonof vegano', 'refogado de brócolis, cenoura e repolho']

console.log(comidas)

console.log('Essas são as minhas comidas preferidas')
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

comidas[1] = prompt('Qual a sua comida favorita?')

console.log(comidas)


// 4

const simOuNao = ['"A Labenu é incrivel?"', '"O Vasco foi rebaixado? :("', '"Eu tô feliz com o Vasco?"']
const RespSimOuNao = [true, true, false]

console.log(simOuNao[0],RespSimOuNao[0])
console.log(simOuNao[1],RespSimOuNao[1])
console.log(simOuNao[2],RespSimOuNao[2])


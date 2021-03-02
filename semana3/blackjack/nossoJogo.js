/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log('Bem vindo(a) ao jogo de Blackjack!!!')

if(confirm('Quer iniciar uma nova partida?')) {
 
   carta1 = comprarCarta()
   carta2 = comprarCarta()
   carta3 = comprarCarta()
   carta4 = comprarCarta()

   valorTotalusuario = carta1.valor + carta2.valor
   valorTotalComputador = carta3.valor + carta4.valor
   
   console.log('Usuário - cartas: ' + carta1.texto + ' ' + carta2.texto + ' - ' + valorTotalusuario)
   console.log('Computador - cartas: ' + carta3.texto + ' ' + carta4.texto + ' - ' + valorTotalComputador)

   if(valorTotalusuario > valorTotalComputador) {
      console.log('O usuário ganhou!')
   } else if(valorTotalusuario < valorTotalComputador) {
      console.log('O computador ganhou!')
   } else {
      console.log('O jogo empatou!')
   }
   

} else {
   console.log('O jogo acabou')
}
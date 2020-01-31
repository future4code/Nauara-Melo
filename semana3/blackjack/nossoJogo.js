import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

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

 console.log("Bem vindo ao jogo de BlackJack!")

const usuario = []
const computador = []

 const resultado_confirm = confirm("Quer iniciar uma nova rodada?");

 if (resultado_confirm) {
   usuario.push(comprarCarta())
   usuario.push(comprarCarta())

   computador.push(comprarCarta())
   computador.push(comprarCarta())

   const total_pontos_usuario = usuario[0].valor + usuario[1].valor
   const total_pontos_computador = computador[0].valor + computador[1].valor
   
   console.log('Usuário - cartas: ', usuario[0].texto, usuario[1].texto + ' - ', total_pontos_usuario)
   console.log('Computador - cartas: ', computador[0].texto, computador[1].texto + ' - ', total_pontos_computador)   

   if (total_pontos_computador > total_pontos_usuario) {
      console.log('Computador ganhou!')
   }
 
   if (total_pontos_usuario > total_pontos_computador) {
      console.log('Usuário ganhou!')
   }

   if (total_pontos_computador === total_pontos_usuario) {
      console.log('Empate!')
   }

 } else {
    console.log('O jogo acabou.')
 }
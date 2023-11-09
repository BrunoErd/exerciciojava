const mensagensDivertidas = 
  [
   "Por que o esqueleto não brigou com nimguém? Porque não tinha estomago pra isso"
   "Na cena inicial do filme são mostradas vários traseiros de negros,qual o nome do filme? Os cu do negro"
   "O que a torradeira disse para a fatia de pão? Eu quero você dentro de mim."
   "Dizem que durante o sexo você queima tantas calorias quanto correr oito milhas. Quem diabos corre oito milhas em 30 segundos"
   "Como fazer uma mesa de bilhar rir? Fazendo cócegas nas suas bolas"
  ]
let botaoDivertido = document.getElementById("botaoDivertido");
let mensagensDivertidas = document.getElementById("mensagemDivertida");

botaoDivertido.addEventListenner('click',function(){
    //Math.floor(x) retorna o menor número inteiro dentre o número "x"
    //Math.random() retorna um número pseudo-aleatório no intervalo
    const mensagemAleatoria = mensagensDivertidas[Math.flor(Math.random()* mensagensDivertidas.length)]

    mensagemDivertida.textContent = mensagemAleatoriaSSSSSSS
} )

    



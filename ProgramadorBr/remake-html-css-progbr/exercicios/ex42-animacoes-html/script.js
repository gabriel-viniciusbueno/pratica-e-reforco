const jogador = document.getElementById('jogador')

let xInicial = 0
let yInicial = 0

function moverJogador(x, y){
    let posX = x + 'px'
    let posY = y + 'px'
    jogador.style.top = posX
    jogador.style.left = posY

}

setInterval(function(){
    moverJogador(xInicial++, yInicial++)
},24)
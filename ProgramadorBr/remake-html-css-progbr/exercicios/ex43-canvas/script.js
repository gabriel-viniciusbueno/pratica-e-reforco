const tela = document.getElementById('tela')
const ctx = tela.getContext('2d')

ctx.moveTo(0,0)
ctx.lineTo(250,250)
ctx.lineTo(500,0)
ctx.lineWidth = 5
ctx.strokeStyle = 'red'
ctx.stroke()
const tela = document.getElementById('tela')
const ctx = tela.getContext('2d')

// ctx.moveTo(0,0)
// ctx.lineTo(250,250)
// ctx.lineTo(500,0)
// ctx.lineWidth = 5
// ctx.strokeStyle = 'red'
// ctx.stroke()

// ctx.fillStyle = 'yellow'
// ctx.fillRect(450, 400, 50, 100)

//Path




// ctx.beginPath()

// ctx.lineWitdh = 4
// ctx.strokeStyle = 'red'
// ctx.moveTo(10,10)
// ctx.lineTo(400, 300)
// ctx.stroke()

// ctx.beginPath() // Begin path diz para iniciar uma nova linha, senão ela sequiria o rumo da primeira. Isso se não tivessemos o moveTo, caso contrário teríamos duas linhas azuis
// ctx.lineWidth = 7
// ctx.strokeStyle = 'blue'
// ctx.fillStyle = 'green'
// ctx.moveTo(50, 10)
// ctx.lineTo (300, 300)
// ctx.lineTo(200, 300)
// ctx.closePath()
// ctx.stroke()
// ctx.fill()






const x = 250
const y = 250
const raio = 100
const inicio = 0
const fim = 2 * Math.PI


ctx.beginPath()
ctx.strokeStyle = 'red'

ctx.arc(x, y, raio, inicio, fim)
ctx.stroke()
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square')

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})

function handleClick(e){
    let square = e.target
    let position = square.id

    handleMove(position)
    updateSquares()
}

function updateSquares(){
    const squares = document.querySelectorAll('.square')

    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]

        if(symbol !== ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}
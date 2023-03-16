

  function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 8
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if (hora >=0 && hora<12) {
        img.src=('Amanhecer01.jpg')
        document.body.style.background = 'linear-gradient(to bottom left, #2cbbfe, #fcd04c)'
    } else if (hora >= 12 && hora <= 18){
        img.src= ('por-do-sol.jpg')
        document.body.style.background = 'linear-gradient(to bottom left, #f69e1a, #c062ff)'
    } else {
        img.src=('noite3.jpg')
        document.body.style.background = 'linear-gradient(to bottom left, #0075c9, #001f38)'
    }
  }
function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano){
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
               //Criança
               img.setAttribute('src', 'bebe-m.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else{
                // Idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
            
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-f.jpg')
             } else if(idade < 21){
                 //Jovem
                 img.setAttribute('src', 'jovem-f.jpg')
             } else if(idade < 50){
                 //Adulto
                 img.setAttribute('src', 'adulto-f.jpg')
             } else{
                 // Idoso
                 img.setAttribute('src', 'idoso-f.jpg')
             }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}  
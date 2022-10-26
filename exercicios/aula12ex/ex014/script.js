function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "fotomanha.png"
        document.body.style.background = '#fd9255'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = "fototarde.png"
        document.body.style.background = '#f5b15d'
    } else {
        //boa noite
        img.src = "fotonoite.png"
        document.body.style.background = '#001e45'
    }
}


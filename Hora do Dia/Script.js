function load(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var hora = new Date().getHours() // Pega o horário do computador
    msg.innerHTML = `Agora são ${hora} horas.`
    //Teste do horário
    if (hora >= 6 && hora < 12){ // Dia
        imagem.src = 'Manha.png' // var.src troca a imagem 
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora < 18){ // Tarde
        imagem.src = 'Tarde2.png' // var.src troca a imagem 
        document.body.style.background = '#A0522D'
    }
    else { // Noite
        imagem.src = 'Noite2.png' // var.src troca a imagem 
        document.body.style.background = '#4F4F4F'
    }
}

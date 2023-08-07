function tocaSom (idAudio) {
    const elemento = document.querySelector(idAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        console.log('Elemento inválido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.querySelectorAll('audio');
let contador = 0;

for (let contador = 0; contador < listaDeSons.length; contador++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {

        if (event.code === 'Space' || event.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}


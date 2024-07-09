const lampada = document.getElementById('lamp');

const ligar = function(){
    if(!lampadaQuebrada()){
        lampada.src = '/img/ligada.jpg';
    }   
}

const desligar = function(){ 
    if(!lampadaQuebrada()){
        lampada.src = '/img/desligada.jpg';   
    }
}

const quebrar = function(){
    lampada.src = '/img/quebrada.jpg';
}

const lampadaQuebrada = function(){
    return lampada.src.indexOf('quebrada') > - 1;
}

const novaLampada = function(){
    if(lampadaQuebrada){
        lampada.src = '/img/desligada.jpg';
    } 
}

lampada.addEventListener('mouseover', ligar);
lampada.addEventListener('mouseleave', desligar);
lampada.addEventListener('dblclick', quebrar);

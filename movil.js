const menu = document.querySelector('#movil');
const btnMenu = document.querySelector('#btnMenu');
const btnSalir = document.querySelector('#salir');
const enlaces = document.querySelector('.enlaces1');
let contador = 0

//Evento

btnMenu.addEventListener('click', ocultarMenu);
btnSalir.addEventListener('click', ocultarMenu);
btnMenu.addEventListener('click', mostrarMenu);


 

//Funciones

function ocultarMenu(){
    enlaces.style.left = '800px';
    btnSalir.style.left ='0';
    

}

function mostrarMenu(){
    enlaces.style.left = '0';
}





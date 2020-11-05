
//document.addEventListener('click',(e)=>{
    //console.log(e.target);
//})

//variables
const imagenes = document.querySelectorAll('.imagen');
const lightbox = document.querySelector('#lightbox');
const btn_cerrar = document.querySelector('#btn_cerrar');
const img_slideshow =document.querySelector('#img_slideshow');
const nombreImagen = document.querySelector('#nombre');
const slideshow = document.querySelector('#slideshow');

//Eventos

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', seleccionarImagen);

})

btn_cerrar.addEventListener('click', ocultarLightbox);




function seleccionarImagen(e){
    const src = e.target.getAttribute('src');
    const nombre = e.target.getAttribute('nombre');
    mostrarLightbox(src,nombre);

}

function mostrarLightbox(src,nombre){
    lightbox.style. display = 'flex';

    setTimeout( ()=>{
        lightbox.style.opacity = '5';
    }, 10);

    slideshow.style.opacity ='1';



    img_slideshow.display='block'


    

}

function ocultarLightbox(){
    slideshow.style.opacity ='0';
    lightbox.style.display = 'none';
}











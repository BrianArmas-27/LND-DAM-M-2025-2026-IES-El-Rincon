//Variables globales
let isShown = false;
let sinNoticias = false;
const listaNoticias = document.getElementById('lista-noticias');
const botonCargar = document.getElementById('boton-cargar');
const botonEliminar = document.getElementById('boton-eliminar')
const titulo = document.getElementById('inTitulo');
const noticia = document.getElementById('inNoticia');
const botonesAutor = document.querySelectorAll('.btnAutor');
let noticiasHTML = `
        <article class="tarjeta-noticia">
            <h2>El rover Perseverance halla rocas inusuales en Marte</h2>
            <p>Los científicos de la NASA analizan muestras que podrían indicar actividad hidrotermal pasada en el planeta rojo.</p>
        </article>
        <article class="tarjeta-noticia">
            <h2>La IA supera a médicos en diagnóstico temprano de mutaciones geneticas</h2>
            <p>Un modelo entrenado con millones de arañas tratadas radiologicamente obtiene un 94% de precisión en estudios clínicos.</p>
        </article>
`;

//Cargar Noticias
botonCargar.addEventListener('click', () => {
    isShown=!isShown;
    if(!sinNoticias)
    {
        if(isShown) {
            listaNoticias.innerHTML = noticiasHTML;      
            botonCargar.innerHTML=`Ocultar Noticias`;
        } else {
            listaNoticias.innerHTML = ``;
            botonCargar.innerHTML=`Mostrar Noticias`;
        }
    } else {
        alert("No hay noticias que enseñar")
    }
})

//Adicion de noticias
botonesAutor.forEach(boton => {
    boton.addEventListener ('click', () => {
        const inTitulo = titulo.value.trim();
        const inNoticia = noticia.value.trim();
        const autor = boton.textContent;
        if(!inTitulo || !inNoticia)
        {
            alert("Por favor, rellena el título y el contenido de la noticia");
            return;
        }
        noticiasHTML = `
        <article class="tarjeta-noticia">
            <h2>${inTitulo} - [${autor}]</h2>
            <p>${inNoticia}</p>
        </article>
        ` + noticiasHTML;
        titulo.value='';
        noticia.value='';
        if(isShown)
        {
            listaNoticias.innerHTML = noticiasHTML;      
            botonCargar.innerHTML=`Ocultar Noticias`;
        }
        sinNoticias=false;
    })
})

//Eliminar TODAS las noticias
botonEliminar.addEventListener('click', () =>
{
    if(sinNoticias)
    {
        alert("No hay noticias que eliminar");
        return;
    }
    noticiasHTML = '';
    sinNoticias = true;
    listaNoticias.innerHTML = ``;
    botonCargar.innerHTML=`Mostrar Noticias`;
})

//Eliminar UNA SOLA NOTICIA

// Tareas
const tareas = [
    {id:1,nombre:"Nada", color:"verde"},
    {id:2,nombre:"LND",color:"Rojo"},
    {id:3,nombre:"BAE",color:"Negro"},
    {id:4,nombre:"PRO",color:"Rojo"},
    {id:5,nombre:"ITK",color:"Negro"},
    {id:6,nombre:"ETS",color:"Rojo"},
    {id:7,nombre:"SSF",color:"Negro"},
    {id:8,nombre:"DJK",color:"Rojo"},
    {id:9,nombre:"IKL",color:"Negro"},
    {id:10,nombre:"WorldBuilding",color:"Rojo"},
    {id:11,nombre:"ActualizarDBK",color:"Negro"},
    {id:12,nombre:"Leer",color:"Rojo"},
    {id:13,nombre:"SourceFilmMaker",color:"Negro"},
    {id:14,nombre:"Blender",color:"Rojo"},
    {id:15,nombre:"Salir",color:"Negro"},
    {id:16,nombre:"Escribir",color:"Rojo"},
    {id:17,nombre:"ProyectosOpcionales",color:"Negro"},
    {id:18,nombre:"Codewars",color:"Rojo"},
    {id:19,nombre:"Peli",color:"Negro"},
    {id:20,nombre:"Tu ya sabes",color:"Rojo"},
]

// Elementos de la Ruleta
const CANTIDAD_SEGMENTOS = 20;
const ruleta = document.getElementById('wheel');
const botonJugar = document.getElementById('spinButton');

botonJugar.addEventListener('click', jugar);

function jugar() {
    //GANADOR (0-19)
    const indiceGanador = Math.floor(Math.random()*CANTIDAD_SEGMENTOS);

    //Guardar Ganador en HTML
    ruleta.dataset.indiceGanador = indiceGanador;

    //Comprobación
    console.log("Ha ganado ",indiceGanador," osea ",tareas[indiceGanador].nombre);

    //(No) Enseñar resultado 
    mostrarResultado
}

// Referencia al DOM
const tableroTareas =  document.getElementById('grid');

// Dibujar tablero
function renderTablero(){
    tableroTareas.innerHTML='';
    tareas.forEach((tarea, indice) => {
        //Contenedor
        const item=document.createElement('div');
        item.classList.add('celda-rejilla',tarea.color);
        item.id = `tarea-$(indice)`;
        //Items
        item.innerHTML = `
            <span class="numCelda">${tarea.id}</span>
            <span class="nomCelda">${tarea.nombre}</span>
        `;
        tableroTareas.appendChild(item);
    });
}

//Ejecución del tablero
renderTablero();
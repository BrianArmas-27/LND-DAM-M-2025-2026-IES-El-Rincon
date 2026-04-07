//Funciona como un "debugger".  
function esperarClic()
{
    return new Promise(resolve=>
    {
        document.addEventListener(
            'click',function onClick()
            {
                document.removeEventListener('click',onClick);
                resolve();
            });
    });
}
//Declaración de variables globales
const tablero=document.getElementById('Tablero');
const celdas=[];
let seleccionada = false;
let fichaSeleccionada = null;
//Función raíz
async function crearTodo()
{
    //Creación del tablero y sus coordenadas
    crearTablero(8,8);
    //Creación de las fichas y su movimiento
    //Ficha Desarrollador (Solo para testear)
    //crearFicha('<','fichadev',3,3);
    //Torres
    // crearFicha('♜','fichanegra',0,0);
    // crearFicha('♜','fichanegra',7,0);
    // crearFicha('♖','fichablanca',0,7);
    // crearFicha('♖','fichablanca',7,7);
    //Alfiles
    // crearFicha('♝','fichanegra',2,0);
    // crearFicha('♝','fichanegra',5,0);
    // crearFicha('♗','fichablanca',2,7);
    // crearFicha('♗','fichablanca',5,7);
    //Caballos
    // crearFicha('♞','fichanegra',1,0);
    // crearFicha('♞','fichanegra',6,0);
    // crearFicha('♘','fichablanca',1,7);
    // crearFicha('♘','fichablanca',6,7);
    //Peones
    // for(let i=0;i<8;i++)
    // {
    //     crearFicha('♟','fichanegra',i,1);
    //     crearFicha('♙','fichablanca',i,6);
    // }
    //Reyes
    // crearFicha('♚','fichanegra',4,0);
    // crearFicha('♔','fichablanca',4,7);
    //Reinas
    crearFicha('♛','fichanegra',3,0);
    // crearFicha('♕','fichablanca',3,7);
    inicializarMovimiento();
}
//Genera las celdas dentro del tablero
function crearTablero(numFilas,numColumnas)
{
    let switcher = false;
    for(i=0;i<numFilas;i++)
    {
        const filaCeldas=[];
        let fila=i;
        for(j=0;j<numColumnas;j++)
        {
            let col=j;
            const celda=document.createElement('div');
            celda.classList.add('celda');
            celda.dataset.col=col;
            celda.dataset.fila=fila;
            switcher=!switcher;
            if(switcher)
                celda.classList.add('negro')
            else
                celda.classList.add('blanco');
            tablero.appendChild(celda);
            filaCeldas.push(celda);
        }
        celdas.push(filaCeldas);
        switcher=!switcher;
    }
}
//Se genera la ficha en el trablero
function crearFicha(fichaTexto,color,columnaInicial,filaInicial)
{
    const ficha=document.createElement('div');
    ficha.textContent=fichaTexto;
    ficha.classList.add('ficha');
    ficha.classList.add(color);
    celdas[filaInicial][columnaInicial].appendChild(ficha);
    asignacion(ficha,fichaTexto);
}
//Segun el tipo de ficha que sea, se mueve de una u otra manera
function asignacion(ficha,tipo)
{  
    ficha.addEventListener('click',function movFicha()
    { 
        
        seleccionada=!seleccionada
        if(seleccionada)
            ficha.classList.add('seleccion');
        else
            ficha.classList.remove('seleccion');
        fichaSeleccionada=[ficha,tipo];
    })
}
//Prepara el tablero para que se muevan las fichas
function inicializarMovimiento()
{
    tablero.addEventListener('click', (e) =>
    {  
        const objetivo = e.target;
        if(seleccionada&&objetivo.classList.contains('celda'))
        {
            //Ficha
            const fichaObjetivo = fichaSeleccionada[0];
            fichaObjetivo.classList.remove('seleccion');
            //Coordenadas
            const filaObjetivo = parseInt(objetivo.dataset.fila);
            const colObjetivo = parseInt(objetivo.dataset.col);
            const celdaActual = fichaSeleccionada[0].parentElement;
            const filaActual = parseInt(celdaActual.dataset.fila);
            const colActual = parseInt(celdaActual.dataset.col);
            //Tipo de movimiento de fichas
            if (!objetivo.classList.contains('quehashecho'))
            {
                switch(fichaSeleccionada[1])
            {
                case '♛':
                {
                    if((filaActual===filaObjetivo||colActual===colObjetivo)||((filaObjetivo+colObjetivo==filaActual+colActual)||(filaObjetivo-colObjetivo==filaActual-colActual)))
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;
                }
                case '♕':
                {
                    if((filaActual===filaObjetivo||colActual===colObjetivo)||((filaObjetivo+colObjetivo==filaActual+colActual)||(filaObjetivo-colObjetivo==filaActual-colActual)))
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;
                }
                case '♜':
                { 
                    if((filaActual===filaObjetivo||colActual===colObjetivo))
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;   
                }
                case '♖':
                { 
                    if((filaActual===filaObjetivo||colActual===colObjetivo))
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;   
                }
                case '♝':
                {
                    if((filaObjetivo+colObjetivo==filaActual+colActual)||(filaObjetivo-colObjetivo==filaActual-colActual))
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;
                }
                case '♗':
                {
                    if((filaObjetivo+colObjetivo==filaActual+colActual)||(filaObjetivo-colObjetivo==filaActual-colActual))
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;
                }
                case '♞':
                {
                    if((filaObjetivo==filaActual+2&&colObjetivo==colActual+1)||(filaObjetivo==filaActual+1&&colObjetivo==colActual+2)||(filaObjetivo==filaActual-2&&colObjetivo==colActual-1)||(filaObjetivo==filaActual-1&&colObjetivo==colActual-2)||(filaObjetivo==filaActual+2&&colObjetivo==colActual-1)||(filaObjetivo==filaActual+1&&colObjetivo==colActual-2)||(filaObjetivo==filaActual-2&&colObjetivo==colActual+1)||(filaObjetivo==filaActual-1&&colObjetivo==colActual+2))
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;
                }
                case '♘':
                {
                    if((filaObjetivo==filaActual+2&&colObjetivo==colActual+1)||(filaObjetivo==filaActual+1&&colObjetivo==colActual+2)||(filaObjetivo==filaActual-2&&colObjetivo==colActual-1)||(filaObjetivo==filaActual-1&&colObjetivo==colActual-2)||(filaObjetivo==filaActual+2&&colObjetivo==colActual-1)||(filaObjetivo==filaActual+1&&colObjetivo==colActual-2)||(filaObjetivo==filaActual-2&&colObjetivo==colActual+1)||(filaObjetivo==filaActual-1&&colObjetivo==colActual+2))
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;
                }
                case '♟':
                {
                    if(colObjetivo==colActual&&filaObjetivo==filaActual+1)
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;
                }
                case '♙':
                {
                    if(colObjetivo==colActual&&filaObjetivo==filaActual-1)
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;
                }
                case '♚':
                {
                    if((colObjetivo==colActual+1||colObjetivo==colActual-1||colObjetivo==colActual)&&(filaObjetivo==filaActual+1||filaObjetivo==filaActual-1||filaObjetivo==filaActual))
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;
                }
                case '♔':
                {
                    if((colObjetivo==colActual+1||colObjetivo==colActual-1||colObjetivo==colActual)&&(filaObjetivo==filaActual+1||filaObjetivo==filaActual-1||filaObjetivo==filaActual))
                    {
                        celdas[filaActual][colActual].removeChild(fichaObjetivo);
                        objetivo.appendChild(fichaObjetivo);
                    }
                    break;
                }   
                default:
                {
                    celdas[filaActual][colActual].removeChild(fichaObjetivo);
                    objetivo.appendChild(fichaObjetivo);
                    break;
                }
            }
            }
            seleccionada=false;
        }
    })
}
crearTodo();
document.getElementById('pokemon-form').addEventListener('submit', function(event) {
            event.preventDefault();
            //Datos del formulario
                const nombre = document.getElementById('nombre').value;
                const tipo = document.getElementById('tipo').value;
                const hp = document.getElementById('hp').value;
                const imagen = document.getElementById('imagen').value;
                const imagenInput = document.getElementById('imagen');
                const file = imagenInput.files[0];
                const ataque1 = document.getElementById('ataque1').value;
                const desc1 = document.getElementById('desc1').value;
                const dano1 = document.getElementById('dano1').value;
                const ataque2 = document.getElementById('ataque2').value;
                const desc2 = document.getElementById('desc2').value;
                const dano2 = document.getElementById('dano2').value;
                const retirada = document.getElementById('retirada').value;
                const resistenciaCoste = document.getElementById('resistenciaCoste').value;
                const debilidadCoste = document.getElementById('debilidadCoste').value;
                const fase = document.getElementById('fase').value;
            //Datos calculados automáticamente
                let tipocarta;
                let debilidad;
                let resistencia;
                let icono;    
            switch(tipo)
                {
                    case 'fuego': 
                        tipocarta='cartaFuego';
                        debilidad=['agua','🌊'];
                        resistencia=['planta','🌿'];
                        icono='🔥';
                        break;
                    case 'agua':
                        tipocarta='cartaAgua';
                        debilidad=['planta','🌿'];
                        resistencia=['fuego','🔥'];
                        icono='🌊';
                        break;
                    case 'planta':
                        tipocarta='cartaPlanta';
                        debilidad=['fuego','🔥'];
                        resistencia=['agua','🌊'];
                        icono='🌿';
                        break;
                    case 'electrico':
                        tipocarta='cartaElectrica';
                        debilidad=['tierra','⛰️'];
                        resistencia=['agua','🌊'];
                        icono='⚡';
                        break;
                    case 'normal':
                        tipocarta='cartaNormal';
                        debilidad=['lucha','✊'];
                        resistencia=['tierra','⛰️'];
                        icono='♿';
                        break;
                    case 'acero':
                        tipocarta='cartaAcero';
                        debilidad=['electrico','⚡'];
                        resistencia=['roca','🌑'];
                        icono='🔩';
                        break;
                    case 'bicho':
                        tipocarta='cartaBicho';
                        debilidad=['volador','💨'];
                        resistencia=['planta','🌿'];
                        icono='🦎';
                        break;
                    case 'dragon':
                        tipocarta='cartaDragon';
                        debilidad=['hada','🧚'];
                        resistencia=['dragon','🐲'];
                        icono='🐲';
                        break;
                    case 'fantasma':
                        tipocarta='cartaFantasma';
                        debilidad=['volador','💨'];
                        resistencia=['siniestro','👁️'];
                        icono='💀';
                        break;
                    case 'hada':
                        tipocarta='cartaHada';
                        debilidad=['acero','🔩'];
                        resistencia=['lucha','✊'];
                        icono='🧚';
                        break;
                    case 'hielo':
                        tipocarta='cartaHielo';
                        debilidad=['fuego','🔥'];
                        resistencia=['planta','🌿'];
                        icono='⛄';
                        break;
                    case 'lucha':
                        tipocarta='cartaLucha';
                        debilidad=['psiquico','🌀'];
                        resistencia=['normal','♿'];
                        icono='✊';
                        break;
                    case 'psiquico':
                        tipocarta='cartaPsiquica';
                        debilidad=['lucha','✊'];
                        resistencia=['acero','🔩'];
                        icono='🌀';
                        break;
                    case 'roca':
                        tipocarta='cartaRoca';
                        debilidad=['agua','🌊'];
                        resistencia=['bicho','🦎'];
                        icono='🌑';
                        break;
                    case 'siniestro':
                        tipocarta='cartaSiniestra';
                        debilidad=['psiquico','🌀'];
                        resistencia=['lucha','✊'];
                        icono='👁️';
                        break;
                    case 'tierra':
                        tipocarta='cartaTierra';
                        debilidad=['planta','🌿'];
                        resistencia=['electrico','⚡'];
                        icono='⛰️';
                        break;
                    case 'veneno':
                        tipocarta='cartaVeneno';
                        debilidad=['hada','🧚'];
                        resistencia=['acero','🔩'];
                        icono='🧪';
                        break;
                    case 'volador':
                        tipocarta='cartaVolador';
                        debilidad=['roca','🌑'];
                        resistencia=['lucha','✊'];
                        icono='💨';
                        break;
                }
            const reader = new FileReader();    
            reader.onload = function(e) {
            const cardContainer = document.getElementById('pokemon-card-container');
            cardContainer.innerHTML = `
            
                <div class="carta ${tipocarta}">
                    <div class="overlay"></div>
                    <div class="encabezado">
                        <div class="nombre-tipo">
                            <span class="tipo-badge">${fase}</span>
                            <span class="nombre">${nombre}</span>
                        </div>
                        <div class="ps1">PS</div>
                        <div class="ps2">${hp}</div><span class="${tipo}">${icono}</span></div>
                        <div class="imagen-contenedor">
                            <div class="placeholder-imagen"><img src="${e.target.result}" alt="${nombre}"></div>
                        </div>
                        <div class="info-pokemon"><strong>Nº ${Math.floor(Math.random()*99999)}</strong> | Pokemon   ${tipo} | Altura ${dano1*0.2} m | Peso ${hp*0.27} kg</div>
                        <div class="ataque">
                            <div class="ataque-nombre">
                                <span class="icono-tipo"><span class="${tipo}">✨</span></span>
                                <span>${ataque1}</span>
                                <span class="dano">${dano1}</span>
                            </div>
                            <div class="descripcion">
                            ${desc1}
                            </div>
                            <div class="ataque-nombre"><span class="icono-tipo"><span class="${tipo}">✨</span><span class="${tipo}">✨</span><span class="${tipo}">✨</span></span>
                                <span>${ataque2}</span>
                                <span class="dano">${dano2}</span>
                            </div>
                            <div class="descripcion">
                            ${desc2}
                            </div>
                        </div>
                        <div class="pie-carta">
                            <div class="debilidad">
                                <span class="etiqueta-pie">Debilidad</span>
                                <span class="${debilidad[0]}">${debilidad[1]}</span>x${debilidadCoste}
                            </div>
                            <div class="resistencia">
                                <span class="etiqueta-pie">Resistencia</span>
                                <span class="${resistencia[0]}">${resistencia[1]}</span>-${resistenciaCoste}
                            </div>
                            <div class="retirada">
                                <span class="etiqueta-pie">Retirada</span>
                                <span class="normal ret" style="padding:2px">${retirada}</span>
                            </div>
                        </div>
                    </div>
                
            `;
            };
            reader.readAsDataURL(file);
            });
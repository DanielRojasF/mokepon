const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonTierra = document.getElementById('boton-tierra')
sectionReiniciar.style.display = 'none'
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')
 
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')


let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none' // oculto la section por medio del comando style.display = 'none' basicamente le oculto los estilos
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)// coloco un listener en el boton-mascota asi el metodo seleccionar masctoa se ejecuta hasta que presione una opcion
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'

    
    sectionSeleccionarAtaque.style.display = 'flex' // muestro la section por medio del comando style.display = 'block'


    
    
    if (inputHipodoge.checked) { //comparo si el checkbox me retorna un true y lanzo una alerta
        spanMascotaJugador.innerHTML = 'Hipodoge' //Cambiamos el contenido html con javascript, hay varios metodos pero vamos a ver el Element.innerHTML Primero, meter el contenido html dentro de la etiqueta span: <span> </span>
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate(){
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('EMPATE')
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje('GANASTE')
        
    }else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje('GANASTE')
        
    }else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje('GANASTE')
       
    }else {
        crearMensaje('PERDISTE') 
        vidasJugador = vidasJugador - 1
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('FELICITACIONES! GANASTE :)')
    }else if (vidasJugador == 0){
        crearMensajeFinal('LO SIENTO, PERDISTE :(')
    }
}
function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {  
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true//deshabilito el boton con .disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()//location es la direccion en la que nos encontramos y reload hace recargar dicha pagina
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//con esto lo que deseamos hacer es ejecutar 
//el codigo js justo despues de que 
//se ejecute el codigo html y css y una vez disponible se ejecuta el codgio js
window.addEventListener('load', iniciarJuego)

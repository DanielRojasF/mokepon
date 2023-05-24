let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')// traigo la section seleccionar ataque
    sectionSeleccionarAtaque.style.display = 'none' // oculto la section por medio del comando style.display = 'none' basicamente le oculto los estilos
    
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota') //traigo al boton-mascota
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)// coloco un listener en el boton-mascota asi el metodo seleccionar masctoa se ejecuta hasta que presione una opcion

    let botonFuego = document.getElementById('boton-fuego')//enlazo el checkbox de hipodoge del HTML con la variable inputHipodoge
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')// traigo la section seleccionar mascota
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')// traigo la section seleccionar ataque
    sectionSeleccionarAtaque.style.display = 'block' // muestro la section por medio del comando style.display = 'block'


    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
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
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

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
    let spanVidasJugador = document.getElementById('vidas-jugador')//creo una variable que contenga al span vidas-jugador del html 
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

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
    let sectionMensajes = document.getElementById('mensajes')//llamo a la section mensajes del HTML
    
    let parrafo = document.createElement('p')//creo un nuevo parrafo dentro del section mensajes
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', las mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado// creo el mensaje del parrafo

    sectionMensajes.appendChild(parrafo)//agrega el elemento al final del cuerpo del documento 
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')//llamo a la section mensajes del HTML
    
    let parrafo = document.createElement('p')//creo un nuevo parrafo dentro del section mensajes
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)//agrega el elemento al final del cuerpo del documento

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true//deshabilito el boton con .disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
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

/*
Dentro de los navegadores tenemos 2 tipos de APIs:

- APIs nativas: como el DOM que es el API que nos permite acceder al codigo HTML de nuestros
documentos a treves de JavaScript.

- APIs externas: como las APIs de Twitter que nos permite obtener los ultimos tweets del usuario, o la de github que nos permite obtener la informacion de los repositorios de una cuenta.

Ejemplos de APIs WEB

    -DOM
    -XMLHttpRequest: peticiones al servidor
    -fetch: API nos permite peticiones al servidor
    -sessionStorage
    -LocalStorage

FETCH API

Asincronismo (cuando le pido una torta al selior de las tortas con mucho tiempo de anticipacion).

JavaScript usa un modelo asincrono y no bloqueante con un loop de eventos implementado en un solo hilo. 
    -Sinlge thread
    -Operaciones de entrada y salida
    -Bloqueo
    -No bloqueo
Ejemplo de aeropuerto

Pista de aterrizaje = hilo o thread
Input = cuando un avion va a aterrizar
Output = cuando el avion tiene que despegar 
Manejador de eventos = la torre de control



Sincronismo(cuando le pido una torta al senior de las tortas con mucho tiempo de anticipacion).


*/

// Ejemplo de JavaScript sincrono

console.log("Inicio sincrono");
function dosSincrono(){
    console.log("Dos");
}

function unoSincrono(){
    console.log("uno");
    dosSincrono();
    console.log("tres");

}
unoSincrono()
console.log("fin de sincrono");


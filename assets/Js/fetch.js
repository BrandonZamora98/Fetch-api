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


/* 

Ejemplos de tareas asincronas

- Fetch a una URL para obtener un archivo JSON
- Tareas programadas con setTimeout
- Spotify, al momento de reproducir un .mp3



Mecanismos asincronos en JAVASCRIPT

Para controlar la asincronia en JS, podemos usar alguno de estos mecanismos:

    - Callbacks
    - Promises
    - Async/Await

Promesas (promises)

- Cuando mi mama me prometio un helado de chocolate
- Que felipe pase los codigos al final de la sesion
- Promesas de nuestro(a) ex
- Ver el tema de las funciones flecha

Como su nombre lo indica, es algo que de principio no sabemos si se cumplira,por que pueden pasar muchas cosas. La gran ventaja de usar promesas, es poder usar una sola funcion que haga todo el trabajo, que el codigo sea mas estilizado y poder manejar de mejor forma los dos escenarios posibles: si la promesa se cumple, o no.

Una promesa es el resultado de la operacion asincrona, este resultado es en forma de objeto el cual puede estar disponible AHORA o en el futuro.
Aunque esta operacion puede finalizar exitosamente o fallar, la promesa nos permite saber cuando una operacion finaaliza, independientemente del resultado.


Las promesas tienen 3 estados posibles:

    -Pending: estado inicial, cuando se crea la promesa.
    -Fullfiled: Cuando la operacion asincrona se completa con exito(resolve)
    -Rejected: Cuando la operacion asincrona falla(reject)

    //Ejemplo archivos de Felipe

    -Pending: cuanndo felipe promete enviar los archivos
    -Fullfilled: cuando felipe los envia
    -Rejected: Cuando no los envia o cuando avusa que no los puede enviar.

Nuestras promesas tienen algunos metodos:

    -then (function resolve): Ejecuta la funcion resolve cuando la promesa se cumple
    - catch(function reject): Ejecuta la funcion reject cuando la promesa no se cumple.
    
    - then(function resolve, function reject): Ejecutar las dos funciones resolve y reject
    - finally(function end): Ejecutar la funcion end si se cumple o no la promesa.

    //Ejemplos de los archivos de felipe

        - then (funcion archivosEnviados)
        - catch (funcion felipeNoCumple)
        - finally (funcion promesaTerminada)


*/

//Promesa de AMOR donde nos dejan en visto un ratito, y luego nos aceptan la invitacion


/* 
Fetch API
Fetch API

Es el nombre de una nueva API (nativa) para JS con la cual podemos realizar peticions HTTP asincronas utilizando promesas, y de forma que el codigo sea un poco mas sencillo y legible. La forma de utilizar una peticion fetch es sencilla, solo debemos llamar a fetch y pasarle por parametro una URL de la peticion a realizar

*/

//const solicitud = fetch('la url que vamos a consultar')
//Guardo en una constante llamada solicitud, la consulta que hago a una pagina externa




fetch ('https://pokeapi.co/api/v2/pokemon/ditto')//realizamos la peticion a la urlde la api
    .then(datos =>{// cuando te conectes al servidor, ejecutamos la siguinete funcion
        return datos.json();//traeme todos los pokemon, y como se que los traes en texo, yo los convierto a formato JSON
    })
    .then(info =>{ //cuando la promesa se resuelve, entonces ejecutamos esta funcion. Usamos el metodo then para obtener la respuesta de la promesa y guardarla en una variable llamada info. Grcias a esta variable, puedo almacenar la info de mi pokemon y sacar de ahi los datos que necesite.
        console.log("el nombre de nuestro pokemon es: ", info.name, "y su numero es: ", info.id);
    })
/*
Cuando hablamos de la API fetch, tambien debemos de hablar de los endpoints, que son las direcciones que se realizan.

por ejemplo, en la URL https://pokeapi.co/api/v2/pokemon/ditto, nosotros nos conectamos a la pokeapi, budcamos dentro de la categoria pokemon, y traemos la informacion de pikachu. en este caso, pikachu es nuestro endpoint 

*/

    function fetchPokemon(id){//Creamos una funcion que recibe un parametro llamado id
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)//la peticion a la url, donde usamos ek parametro id para obtener la informacion del pokemon
        .then(respuesta => respuesta.json())//almacenamos la respuesta en un formato .json
        .then(dato => console.log(dato))
    }
    fetchPokemon(1);
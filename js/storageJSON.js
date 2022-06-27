//METODO -> localStorage.setItem (contiene una CLAVE y un VALOR);
//clave = nombre para idefentificar el elemento
//valor = valor del elemento
//Las claves y valores de Storage se guardan en formato de cadena de caractares (DOMString)

//EJEMPLO LOCALSTORAGE
//Los datos almacenados en LOCALSTORAGE (variable global preexistente) se almacena en el navegador de forma INDEFINIDA. La info persiste REINICIOS del navegador y hasta del sistema operativo
//DE ESTA MANERA SE ENVIAL AL LOCAL STORAGE
// localStorage.setItem ("luis", 27);  
// localStorage.setItem ("numero", 100);
// localStorage.setItem ("boleano", false);

// Y DE ESTA MANERA SE OBTIENEN LOS VALORES DEL LOCALSTORAGE.GETITEM :
// let usuario = localStorage.getItem("luis");
// let numero = localStorage.getItem ("numero");
// let bolean = localStorage.getItem ("boleano");
//console.log (usuario);// string
//console.log (numero);//string
//console.log (bolean);//string

//SESSIONSTORAGE: SETITEM:
//La información almacenada en sessionstorage (variable global preexistente)se almacena en el navegador hasta que el usuario CIERRA la ventana.
// sessionStorage.setItem ("esValido", false);
// let esValido = (sessionStorage.getItem("esValido") == "true"); //esto es para obtener un BOLEANO. agregar los parentesis a toda la función 
// console.log (esValido);
// console.log (typeof esValido); //Imprime que es un boleano. TYPEOF devuelve QUE tipo es: Numero, string, boleano, objeto, funcion.

// sessionStorage.setItem("numeros", [1,2,3,4]);
// let sesion = sessionStorage.getItem("numeros").split("-"); //con split puedo capturar los valores y separarlos con el caracter que quiera
// console.log (sesion);

// for (let i = 0; i < localStorage.length; i++){
//     let clave = localStorage.key(i);//se pone entre PARENTESIS para que tome el valor de I en cada itirenacion
//         console.log ("Clave :" + clave);
//         console.log ("Valor : " + localStorage.getItem(clave));
// }

//JSON es un formato basado en TEXTO PLANO, para representar datos estructurados con la sintaxis de OBJETOS de JS. Es utilizado para enviar y almacenar datos en las apps web. JSON es un string con un formato especifico
// const producto1 = {id:"1", nombre: "luis", pais:"Argentina"}; //OBJETO ORIGINAL
// const enJson = JSON.stringify(producto1);  //Transformación de OBJETO a STRING EN .JSON

// localStorage.setItem("producto1",enJson);  //Ahora sí puedo guardar el objeto pasado a .JSON porque es un STRING
// console.log (enJson);  //COMPRUEBO QUE ESTÉ BIEN 
//LUEGO, PASO MI STRING EN JSON A OBJETO MEDIANTE PARSE.
// const objetoParse = JSON.parse(enJson); //ESTE PASO NO ES NECESARIO  //declaro la variable y le paso como parametro enJSON porque tiene como valor string en .JSON
// console.log(objetoParse);  //COMPRUEBO QUE ESTÉ BIEN 
// const enParse = JSON.parse(localStorage.getItem("producto1"));  //En la nueva variable, de esta manera extraigo los datos transformados de un string en .JSON a OBJETO 
// console.log (enParse.id);

// const multiplicar = (a,b) => a * b; //funcion
// const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)}; //guardo en el local storage los parametros

// let ingresarDato = parseInt(prompt("Ingresar un valor")); //pido dato para pasarlo a mi funcion
// for (let i=1; i<= 10 ; i++){
    // guardarLocal(i,multiplicar(parseInt(ingresarDato),i)); //Guardar local tiene 2 parametros = A= I Y B= MULTIPLICAR. MULTIPLICAR TIENE 2 PARAMETROS = A= INGRESAR DATO Y B = INDICE I
// }

//EJERCICIO DE PRACTICA

// const cursos = [ {name: "desarrollo web", price: 7000}, //Array de OBJETOS
//                   {name: "javascript", price: 8000},
//                   {name: "react", price: 9000},
// ]

// const carrito = [];

// let ingresarProducto = prompt ("Agregar curso escribiendo el nombre o si ya tiene productos agregados, X para seguir: \n -Desarrollo Web \n - JavaScript \n -React").toLowerCase();

// while (ingresarProducto !== "x"){
//     if (ingresarProducto === "desarrollo web"){
//         carrito.push(cursos[0]);
//     }
//         else if (ingresarProducto === "javascript"){
//             carrito.push(cursos[1]);
//         }
//         else if (ingresarProducto === "react"){
//             carrito.push(cursos[2]);
//         }
//         else {
//             alert ("Por favor, ingrese los datos correctos");
//         }
//             ingresarProducto = prompt("Si desea agregar otro producto, escriba el nombre del curso:\n -Desarrollo Web \n - JavaScript \n -React , sino ingresar: x");
// }

// if (carrito.length !== 0){
//     localStorage.setItem("Curso",JSON.stringify(carrito));
// }
//     else if (localStorage.length > 0){
//         const objetCarrito = JSON.parse(localStorage.getItem("Curso"));
        
//         alert("éstos productos habían en tu carrito");
        
//      for (const producto of objetCarrito){
//          alert (producto.name);
//          alert (producto.price);
//      }   
// }

// let finalizarCompra = prompt ("Desea finalizar compra? (si/no)").toLocaleLowerCase();

// if (finalizarCompra === "si"){
//     localStorage.clear();
//     alert ("Muchas gracias por su compra");
// } else {
//     alert ("Reinicie la página para seguir comprando");
// }
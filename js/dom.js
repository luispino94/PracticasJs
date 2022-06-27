//DOM (document object model) : Es una estructura de objetos generada por el navegador, a partir del codigo HTML
//también es una interfaz del navegador
//Cada etiqueta HTML es un objeto que podemos llamar NODO. Las etiquetas anidadas son llamadas "nodos hijos" de la etiqueta "nodo padre" que las contien
//Se crean dos tipos , 1 de elemento que es una etiqueta del html y el otro es un nodo tipo texto que hace referencia a un string
 //La ventaja de todo esto es que hace que la pagina sea DINAMICA. Ya que capturo los elementos
//  let titulo = document.getElementsByTagName("h1");

//  console.log (titulo.innerHTML);


 //CREACIÓN DE ELEMENTOS: Se utiliza la función document.createElement() y se debe indicar el nombre de etiqueta HTML.
 //Luego , debe agregarse como hijo el nodo creado con appenChild() al body u a otro nodo del documento actual.

 //Se crea el elemento y se le agrega una etiqueta p
//  let parrafo = document.createElement("p");
 //de esto le agregamos un descendiente a nuestro p(parrafo)
//  parrafo.innerHTML="<h2>Hola DOM!</h2>";
 //Luego, necesitamos decirle en que parte del documento queremos que se guarde
//  document.head.appendChild(parrafo);

//quitar elemento
// let parrafo1 = document.getElementById("titulo");
// parrafo1.parentNode.removeChild(parrafo1);

//Utilizar inputs para agregarle valores
// let container = document.getElementById("nombre").value = "Luis";
// let container1 = document.getElementById("edad").value = "27";

// PANTILLAS LITERALES E INNERHTML

// let ingredientes = {id:1, nombre:"azucar", precio:150}

// let contenedor = document.createElement("div");
// contenedor.innerHTML = `<h3> ID : ${ingredientes.id} - Nombre: ${ingredientes.id} - Precio ${ingredientes.precio}`;
// document.body.appendChild(contenedor);


//creando elementos desde objetos
// const productos = [{id:1, nombre:"fideos", precio :125},
//                     {id:2, nombre:"arroz", precio :120},
//                     {id:3, nombre:"salchichas", precio :145},                    
// ]

// for (const producto of productos ){
//     let stock = document.createElement('div');
//     stock.innerHTML = `<div class= "container-productos">
//                     <h3>Productos </h3>
//                     <div>
//                     <ul>
//                     <li>ID: ${producto.id}- Nombre: ${producto.nombre} - Precio: ${producto.precio} 
//                     </li>
//                     </ul>
//                     </div>
//                     </div>`
//     document.body.appendChild(stock);               
// }



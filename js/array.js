const miArray = [1,2,3,4,5, "hola", "manzanas", "pepito"];
// console.log (miArray.length); // Devuelve el numero de elementos que hay dentro de mi array
// console.log (miArray.toString()); // Convierte el array en un string, cada elemento separado por comas
// miArray.push ("Otro elemento", "Saludos");
// console.log (miArray);
// console.log (miArray.join ("/"));

// const otroArray = ["OtroArray"];
// const newArray = otroArray.concat('hola') //Concatena un array con otro array.
// console.log (newArray);

// const nombres = ["Luis", "pedro", "facundo", "sol", "gustavo"];
// const slice = nombres.slice (0,3); // Devuelve una copia de una parte del array dentro de un nuevo array, empezando por inicio hasta fin (FIN NO INCLUIDO). No se modifica el array original.
// console.log (slice);

// const arrayNombres = [];
// let cantidad = 5;
// Ejemplos de Array vacío para cargar datos ingresados mediante prompt.
// do {
//      let entrada = prompt ("Por favor, ingrese un nombre");
//     arrayNombres.push (entrada);
//     console.log (arrayNombres);
// } while (arrayNombres.length != cantidad);


//Ejemplo de Concat desde un array vacío que luego va almacenando datos mediante el prompt

// const nuevaLista = arrayNombres.concat ("luis", "facundo");

// Ejemplo de JOIN generando un salto de linea
// alert (nuevaLista.join("\n"));


// FOR OF - PUEDO RECORRER ITEM X ITEM QUE YO QUIERA DE MI OBJETO 

// const usuarios = [{id:1, name: "Luis",     
//                     id:2, name: "Sol",
//                     id:3, name: "Facundo"}];

//  for (const usuario of usuarios){
//     console.log (usuario.id);
//     console.log (usuario.name);
//  }

// EJEMPLO APLICADO: OBJETOS, PRODUCTO Y ARRAY

// class Producto {
//     constructor(nombre,precio)
//     {       
//     this.nombre = nombre.toUpperCase();
//     this.precio = parseFloat(precio);
//     this.vender = false;
//                                     }
//     calcularIva(){
//         this.precio = this.precio * 1.21;
//     }
//     vendido (){
//         this.vender = true;
//     }
// }
//Declaramos un array de productos para almacenar objetos
// const productos = [];
// const producto4 = new Producto ("arroz", 140);
// const producto5 = new Producto ("fideos", 170);


// productos.push(producto4);
// productos.push (producto5);

//Iteramos el for of para modificar los datos de mi objeto
//  for ( const producto of productos){
//         producto.calcularIva();
//         producto.vendido();
        // console.log (productos);
//  }

 //METODO FIND : LA FUNCIÓN PARAMETRO GENERALMENTE ES UNA FUNCION FLECHA SIN CUERPO. (EN ESTE CASO ELEMENTO ES EL PARAMETRO)
//  const arrayNumeros = [1,2,3,4,5,6];
//  const encontrado = arrayNumeros.find (elemento => elemento >4); //Encuentra 5 porque imprime el primer valor que sigue
//  console.log (encontrado);

 //METODO FILTER: 
//  const arrayFilter = [1,2,3,4,5,6];
//  const encontrado2 = arrayFilter.filter (elemento => elemento >3); //Encuentra 4,5,6. A diferenciar de FIND, FILTER encuentra todas las coincidencias
//  console.log (encontrado2);

//  const nombresFilter = ["luis", "sol", "surak","gustavo","facundo"];
//  const encontrado3 = nombresFilter.filter(nombreFilter=> nombreFilter.includes("s")); //includes significa que busca todos los elementos que contengan "s" en este caso
//  console.log (encontrado3);

//  const arrayNumeros2 = [1,2,3,4,5,6];
//  const porDos = arrayNumeros2.map ( x=> x *2); //empieza desde el 0. 1=0 , pero toma el valor de la tabla.
//  console.log (porDos);

//  const nombresMap = ["luis", "sol", "surak","gustavo","facundo"];
//  const lengthMap = nombresMap.map (nombreMap => nombreMap.length); //En este caso, devuelve la longitud de los nombres.
//  console.log (lengthMap); //Con MAP podríamos obtener también el valor de algo especifico que quisieramos.


//  const daleArray = [100,400,600,2100, 1000,250,40,10,5,30,70];
//  const otrodaleArray = daleArray.filter(elemento => elemento <=100);
//  console.log (otrodaleArray);

//  const ArrayObjetos = [
//         {id:1, nombre:`Zapatillas`, precio: 1600}, // ESTO ES UN ARRAY DE OBJETOS
//         {id:2, nombre:`Remera`, precio: 800 },
//         {id:3, nombre:`Jeans`, precio: 1700 },
//         {id:4, nombre:`Campera`, precio: 900 },
//  ]

//  const PruebaObjetos = ArrayObjetos.filter(nombreFilter=> nombreFilter.precio < 1000);
//  console.log(PruebaObjetos);

// class Productos {
//         constructor(nombre, precio){
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//         }
//          CalcularIva() {
//               this.precio = this.precio * 1.21
//         }
//         Vendido (){
//                 this.vendido = true
//         }
// }
// let arrayProductos = [];
// let arrayProductos2= [];
// const producto1 = new Productos ('chocolate', 400);
// const producto2 = new Productos ('coca-cola', 600);
// arrayProductos.push (producto1);
// arrayProductos2.push (producto2)


// for (const producto of arrayProductos){
//         producto.CalcularIva()
//         producto.Vendido()
//         console.log (arrayProductos)
//         let stock = document.createElement('div');
//         stock.innerHTML = `<div>
//                 <ul>Lista de productos<li>Nombre: ${producto.nombre}- Precio: ${producto.precio}</li>
//                 </ul>
//                 </div>`
//  document.body.appendChild(stock)

// }

// for (const producto of arrayProductos2){
//         producto.CalcularIva()
//         producto.Vendido()
//         console.log (arrayProductos)
//         let stock2 = document.createElement('div');
//         stock2.innerHTML = `<div>
//                 <ul>Lista de productos<li>Nombre: ${producto.nombre}- Precio: ${producto.precio}</li>
//                 </ul>
//                 </div>`
//  document.body.prepend(stock2)

// }
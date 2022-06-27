// function Persona (nombre,edad, calle){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
//     this.hablar = function(){console.log ("HOLA SOY:"+ this.nombre)};
//     this.identificarse = function (){
//         console.log ("Hola soy:"+ this.nombre + "Mi edad es: "+ this.edad + "y vivo en la calle: " + this.calle);
//     }
// }

// const persona1 = new Persona ("Luis", 27, "Puán 3912");
// const persona2 = new Persona ("Sol", 24, "Azcuenaga 3912");
// const persona3 = new Persona ("Alberto", 22, "Mitre 3912");

// persona1.hablar();

//OPERADOR IN Y FOR IN : IN devuelve TRUE si la propiedad especifica existe en el objeto. Mientras que FOR IN permite acceder a todas las propiedades del objeto
// console.log ("nombre" in persona1);
// for (const propiedades in persona1){
//     console.log(persona1[propiedades]);
// }

// persona1.identificarse();
// persona2.identificarse();
// persona3.identificarse();

// class Persona {
//     constructor (nombre, edad, calle){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.calle = calle;        
//     }
//     hablar (){
//         document.write(`Hola, me llamo:${this.nombre},<br> 
//         Vivo sobre la calle: ${this.calle}<br>
//         y tengo ${this.edad} años.<br> 
//         <b>Aguante yo jeje </b><br><br>
//         `);
//     }
//     identificarse (){
//         console.log ("Hola, mi nombre es : " + this.nombre + "y vivo en: "+ this.calle);
//     }
// }

// const persona1 = new Persona ("Luis", 27, "Puán 3912");
// const persona2 = new Persona ("Sol", 24, "Azcuenaga 4555");

// persona1.hablar ();
// persona2.hablar();

// class Producto {
//     constructor (nombre, marca, precio){
//         this.nombre = nombre.toUpperCase();
//         this.marca = marca.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vender = false;
//     }
//     sumarIva(){
//         this.precio = this.precio * 1.21;
//     }
//     vendido(){
//         this.vender = true;
//     }
// }

// const producto1 = new Producto ("Arroz","hetzen", 200);
// const producto2 = new Producto ("Fideos", "Marolio", 250);

// producto1.sumarIva();
// producto1.vendido();
// producto2.sumarIva();
// producto2.vendido();

// console.log(producto1);
// console.log(producto2);



                                //OBJETO CARRITO
// let producto = 0;
// let cantidadProducto = 0;
// let precio = 0;  

// class Pedido {
//     constructor (producto, precio, cantidades) {
//         this.producto = producto,
//         this.precio = precio,
//         this.cantidades = cantidades,
//         this.envio = 0,
//         this.subTotal = 0,
//         this.total = 0
//         }
    
//         calcularSubtotal(){
//             this.subTotal =  this.precio * this.cantidades ;
//         }
//         calcularIva (){
//              return this.subTotal * 0.21;
//         }

//         calcularEnvio (){
//             if (this.subTotal >= 4000){
//                this.envio = 0;
//             } else {
//                 this.envio = 500;
//             }
//             }
//         calcularTotal (){
//             this.total = this.subTotal + this.envio + this.calcularIva();
//         }
// }

// function agregarCarrito (){
//     while (!producto || producto == 0 || producto >4){
//         producto = parseInt (prompt ("Por favor, ingrese el numero del producto deseado: \n 1- Camisa:$700 \n 2- Zapatillas: $1200 \n 3- Pantalon: $1000 \n 4- Remera:$500"));
//     }
//     switch (producto){
//         case 1 :
//             producto = "Camisa";
//             precio = 700;
//             break;
//         case 2 :
//             producto = "Zapatillas";
//             precio = 1200;
//             break;
//         case 3 :
//             producto = "Jean";
//             precio = 1000;
//             break;
//         case 4 :
//             producto = "Remera";
//             precio = 500;
//             break;
//     }
    
//     while (!cantidadProducto || cantidadProducto == 0 || cantidadProducto >400){
//         cantidadProducto = parseInt(prompt("Producto:"+ producto + "\n Ingrese la cantidad deseada"));
//     }

//     return new Pedido (producto, precio, cantidadProducto);
// }

// alert ("Bienvenido/a la tienda!");

// const pedido = agregarCarrito();

// pedido.calcularSubtotal();
// pedido.calcularIva();
// pedido.calcularEnvio();
// pedido.calcularTotal();

// alert ("Detalle del pedido: \n"+
//       "- Producto: " + pedido.producto + " $"+ pedido.precio + "  *  " + " Cantidad: " + pedido.cantidades + " = "+ pedido.precio * pedido.cantidades + "\n"+
//       "- Calcular IVA 21%: "+ pedido.calcularIva()+ "\n"+
//       "- Costo de Envío : "+ pedido.envio +"\n"+
//       "- TOTAL : " + pedido.total      
// );

class Personajes {
    constructor (nombre, aldea, habilidad,genero){
        this.nombre = nombre;
        this.aldea = aldea;
        this.habilidad = habilidad;
        this.genero = genero;
        this.vendido = false;
    }

     getInfo (){
         return `-Nombre: ${this.nombre} \n -Aldea: ${this.aldea} \n -Habilidad: ${this.habilidad} \n- Genero : ${this.genero}`; 
     }

     getVender (){
         this.vendido = true;
         alert ("Vendido");
     }

}

// function solicitarDatos (){
//     let nombres = prompt ("Por favor, ingrese el nombre de su personaje");
//     let aldeas = prompt ("Por favor, ingrese la Aldea de su personaje");
//     let habilidades = prompt ("Por favor, ingrese la habilidad de su personaje");
//     let generos = prompt ("Por favor, ingrese el genero de su personaje");
   
//   if ( nombres != "" && aldeas != "" && habilidades != "" && generos != ""){
//         let pj1 = new Personajes (nombres,aldeas, habilidades,generos);
//         array_personajes.push (pj1)}; 
// }

// let array_personajes = new Array (); //de esta manera genero un nuevo arreglo de objetos con la funcion constructora.

// alert ("Bienvenidos a la tienda del LoL. Por favor complete los datos");
// let resp;

//  do{
//     let  resp = confirm ("Desea agregar otro personaje?");

//      if (resp) {
//          solicitarDatos();
//      }
//  } while (resp);

//  for (let i = 0; i<array_personajes.length; i++){

//         alert (array_personajes[i].getInfo());
//  }

// array_personajes.getVender();



// function saludar(){
//     let ingresarNombre = prompt ("Por favor ingresa tu nombre");
//     alert ("Bienvenido:"+ ingresarNombre);
// }

// saludar();
// saludar();

// let resultado = 0;

// function sumar (primeroNumero,segundoNumero){
//      resultado = primeroNumero + segundoNumero;    
// }

// function mostrar (mensaje){
//     console.log (mensaje);
// }
// sumar (10, 40);
// mostrar (resultado);



// const suma = (a,b) => {return a+b};
// console.log (suma(10,40));

// const suma = function (a,b,c) {return a + b + c};
// console.log (suma(10,50,50));

// const suma = (a,b) => a+b;
// const resta = (a,b) => a - b;
// const iva = x => x * 0.21 ;

// let precioProducto = 500;
// let precioDescuento = 50;

// let precioFinal = resta (suma(precioProducto, iva(precioProducto)) ,precioDescuento);
// console.log (precioFinal);


// let total = 0;
// function agregarCarrito (){
//     do {
//         let producto = prompt ("Por favor, elegí shampoo($600), acondicionador($700) o ambos ($1300)");
//         let cantidad = parseInt(prompt("Seleccioná la cantidad",0));
        
//         let precio = 0;
//    switch (producto){
//        case "shampoo":
//             precio = 600;
//             break;
//        case "acondicionador":
//             precio = 700;
//             break;
//        case "ambos":
//             precio = 1300;
//             break;
//        default:
//            alert ("Alguna de las opciones es incorrecta");
//            precio = 0;
//            cantidad = 0;
//        }
//      total = total + precio * cantidad;
//      console.log (total);

//     otroProducto = confirm ("Desea agregar otro producto?");    
//    } while (otroProducto);   
// }

// function aplicarDescuento (total){
//     if (total >= 5000 ){
//         total = total * 20 /100;
    
//     } 
//     return total;

// }

// function calcularEnvio (total){
//   let confirmacion = confirm ("Querés envio a domicilio?");
//   if ( confirmacion && total >= 2000){
//       alert ("usted tiene envio gratis. Valor final:"+ total)
//   } else if(confirmacion && total < 2000 && total != 0){
//       alert ("El valor del envio cuesta $700. Total:"+total);
//   } else {
//       alert ("El valor final de tu compra es :"+total);
//   }
//   return total;
// }


// agregarCarrito();
// calcularEnvio (aplicarDescuento(total));
// console.log (agregarCarrito);
// console.log (aplicarDescuento);
// console.log (total);

// let usuario = prompt("Por favor Luis, ingresa tu nombre").toLowerCase();

//  if ((usuario != "") && (usuario == "luis")){
//     alert ("Bienvenido Luis");
// } else {
//     alert ("Por favor , ingrese su nombre correctamente");
// }

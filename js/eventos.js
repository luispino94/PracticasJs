//Eventos:
// Son la manera que tenemos en JS de controlar las acciones
// de los usuarios y definir un comportamiento de la pagina o aplicacion cuando se produzcan

//como escribir la función de eventos. Hay varias maneras

//Definir eventos Ejemplo 1:
// let boton = document.getElementById("btnPrincipal");
// boton.addEventListener("click", aca yo puedo poner QUE es lo que quiero que pase, como por ejemplo, CAMBIAR COLOR respuestaClick)
// function respuestaClick(){
//     console.log ("Respuesta evento");
// }

//Definir Eventos 2 :
// let boton = document.getElementById("btnPrincipal");
// boton.onclick = () => (alert("Muchas gracias!"));

//Ventaja de la 2da opción, es que la funcion es anonima y no hay que estar segmetando los parametros.

//funcion para escuchar cambio de color en caja.
//ejemplo 1
// let clickBox = document.getElementById("ClickBox");
// clickBox.addEventListener("click",()=>{
//     clickBox.classList.toggle("color")
// });


// let dblclickBox = document.getElementById("dobleClick");
// dblclickBox.addEventListener("dblclick",()=>{
//     dblclickBox.classList.toggle("color")
// });

// let clickBoxOn = document.getElementById("ClickBoxON");
// clickBoxOn.onclick = () =>{
//         clickBoxOn.classList.toggle("color")
// };

// let dblClickBoxOn = document.getElementById("dblClickOn");
// dblClickBoxOn.ondblclick = () => {
//     dblClickBoxOn.classList.toggle("color");
// }

// let createBoxBtn = document.getElementById("createBoxBtn");
// let stopBoxBtn = document.getElementById("stopBoxesBtn");
// let deleteBoxBtn = document.getElementById("deleteBoxesBtn");
// let boxCtn = document.getElementById("boxCtn");

// createBoxBtn.addEventListener("click", createBox);

// function createBox (){

//         let box = document.createElement ("div");
//         box.classList.add("color");
//         boxCtn.appendChild(box);
// }

// stopBoxBtn.addEventListener("click", ()=>{

//     createBoxBtn.removeEventListener("click", createBox);
// })

// deleteBoxBtn.addEventListener("click",deleteBoxes);

// function deleteBoxes (){
//     boxCtn.innerHTML = "";

// }

// let newTodo = document.getElementById("todo");
// let addBtn = document.getElementById("addTodo");
// let todoList = document.getElementById("todolist");

// function addTodo(item){

//     let lis = document.createElement ("li");
//     lis.textContent = item;

//     todoList.appendChild(lis);
// }


// addBtn.addEventListener("click",()=> {

//     addTodo(newTodo.value);
//     newTodo.value = "";

// });


/*class articulo{

  constructor(nombre, numero_id){
    this.nombre = nombre;
    this.numero_id = numero_id;
  }
}

let listaArticulos= [];

for ( let i= 0; i < 2 ; i = i + 1 ){

let nombre = prompt("articulo?");
let numero_id = prompt("Id numero?");

let nuevo_articulo = new articulo (nombre, numero_id);

listaArticulos.push(nuevo_articulo);
};

console.log(listaArticulos);

function buscar_producto (articulo){
  return articulo.nombre == busqueda_articulo
}

let busqueda_articulo = prompt("nombre del articulo");

let resultado_find = listaArticulos.find(buscar_producto);

console.log(resultado_find);

function buscar(){
  console.log("hola")
}

let btnBuscar= document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", buscar);

let nombreUsuario = document.getElementById("formulario");
//STORAGE
*/
let arrUsuarios = [];

function alta_usuario(){

let nombreUsuario = document.getElementById("nombre");
let password = document.getElementById("password");

let usuario = {nombre: nombreUsuario.value, password: password.value};
arrUsuarios.push(usuario);


let arrJson = JSON.stringify(arrUsuarios);
localStorage.setItem("arrUsuarios", arrJson);

}

function login_usuario(){

  let arr= localStorage.getItem("arrUsuarios");
  let nombreUsuario =document.getElementById("nombre").value;
  let password = document.getElementById("password").value;


arr = JSON.parse(arr);

for (let usuario of arr){
  if(usuario.nombre == nombreUsuario && usuario.password == password){

    document.body.innerHTML = `<h1> Hola ${usuario.nombre}</h1>`;
    break;
  }
  else{
    document.body.innerHTML=`<h1>El usuario : ${nombreUsuario} no está registrado</h1>`;
  }
}
}
let btnRegistro = document.getElementById("btn_registro");
let btnLogIn = document.getElementById("btn_login");

btnRegistro.addEventListener("click", alta_usuario);
btnLogIn.addEventListener("click", login_usuario);


/*
let metros = prompt("ingrese cant. metros"); 
const precio = 3000;
function calcular_total(){

  let precio_total = precio*metros;
  console.log("el total de su compra es", precio_total);
return calcular_total;

}

calcular_total()*/


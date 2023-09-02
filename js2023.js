class articulo{

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



/*
let metros = prompt("ingrese cant. metros"); 
const precio = 3000;
function calcular_total(){

  let precio_total = precio*metros;
  console.log("el total de su compra es", precio_total);
return calcular_total;

}

calcular_total();*/



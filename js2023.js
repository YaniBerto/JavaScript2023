let ingreso = prompt("quiere entrar SI o NO");
while (ingreso!="NO"){

let cantidadArticulos = prompt("Ingrese cantidad de articulos");

if (cantidadArticulos > 0){
console.log ("usted está comprando", cantidadArticulos, "articulos");

}
else{
  console.log("0 Articulos")
}

let metros = prompt("ingrese cant. metros"); 
const precio = 3000;

function calcular_total(){

  let precio_total = precio*metros;
  console.log("el total de su compra es", precio_total);
return calcular_total;

}

calcular_total();

}

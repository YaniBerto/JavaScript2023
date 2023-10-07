fetch("https://api.openweathermap.org/data/2.5/weather?q=Rosario&units=metric&appid=bbf8893c6e8030e157bb633d11a66e17&lang=es")
    .then( response => response.json() )
    .then( data => {
      const ciudad = data.name;
      const temperatura = data.main.temp;
      const descripcion = data.weather[0].description;

      const infoElement = document.createElement("p");
      infoElement.textContent = `Ciudad: ${ciudad}, Temperatura: ${temperatura}°C, Descripción: ${descripcion}`;
     
      const weatherInfo = document.getElementById("weather-info");
      weatherInfo.appendChild(infoElement);
  })

const productosComprados = [];

const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
      productosComprados = JSON.parse(carritoGuardado);

  }

function comprar(producto, precio) {
  productosComprados.push({ producto, precio});
  
  Swal.fire({
    title: `Compraste ${producto}`,
    text: `precio: $${precio}`,
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'Aceptar'
   }).then((result)=>{
    if(result.isConfirmed){
      sumarProducto();
      localStorage.setItem("carrito", JSON.stringify(productosComprados));
    }
   });
  
  
  function sumarProducto(){
    const productosCarrito = document.getElementById("productosCarrito");
    productosCarrito.innerHTML="";
    for(const compra of productosComprados){
      const li = document.createElement("li");
      li.textContent = `${compra.producto} - $${compra.precio}`;
      productosCarrito.appendChild(li);
    }
  }
  function Total(){
    const totalElement = document.getElementById("total");
    totalElement.innerHTML = ""; 

   
    if (productosComprados.length > 0) {
                const totalPrecio = productosComprados.reduce((total, compra) => total + compra.precio, 0);
        
        const total2 = document.createElement("p");
        total2.textContent = `Total: $${totalPrecio}`;
        totalElement.appendChild(total2);
    } else {
        const vacioP = document.createElement("p");
        vacioP.textContent = "El carrito está vacío.";
        totalElement.appendChild(vacioP);
    }
}
  Total();

  const btnPagar = document.getElementById("btnPagar");
 
  btnPagar.addEventListener("click", function(){
    
    Swal.fire('Pagaste');
    
  })


}

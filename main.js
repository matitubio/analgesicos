const productos = [
  {
nombre: "Actron600",
precio: 6100,
},

{
nombre: "Actron400",
precio: 2300,
},

{
nombre: "Alikal",
precio: 700,
},

{
nombre: "Amoxidal",
precio: 2400,
},

{
nombre: "Almaximo",
precio: 2500,
},

{
nombre: "Aspirineta",
precio: 700,
},

{
nombre: "Azitromicina",
precio: 1900,
},

{
nombre: "Bayaspirina",
precio: 1700,
},

{
nombre: "Buscapina",
precio: 6000,
},

{
nombre: "Cafiaspirina",
precio: 2000,
},

{
nombre: "CafiaspirinaPlus",
precio: 2500,
},

{
nombre: "CaramelosCAnti",
precio: 2500,
},

{
nombre: "Dexalergin",
precio: 11500,
},

{
nombre: "Diclofenac",
precio: 1000,
},

{
nombre: "Dorixina",
precio: 1600,
},

{
nombre: "Ibuprofeno600",
precio: 1000,
},

{
nombre: "IbuevanolRap.Acc",
precio: 2100,
},

{
nombre: "IbuevanolPlus",
precio: 2200,
},

{
nombre: "IbuevanolForte",
precio: 2500,
},

{
nombre: "IbuevanolMax",
precio: 3300,
},

{
nombre: "Keterolac",
precio: 1000,
},

{
nombre: "Loratadina",
precio: 1000,
},

{
nombre: "Loperamida",
precio: 1000,
},

{
nombre: "Mejoralito",
precio: 2300,
},

{
nombre: "Migral",
precio: 3900,
},

{
nombre: "Novalagina",
precio: 4900,
},

{
nombre: "Omeprazol",
precio: 1000,
},

{
nombre: "PastillaDeCarbon",
precio: 800,
},

{
nombre: "Ponstil",
precio: 1600,
},

{
nombre: "Quraplus",
precio: 3400,
},

{
nombre: "Refrianex",
precio: 3300,
},

{
nombre: "SildenafilVENT3",
precio: 6500,
},

{
nombre: "SertalPerla",
precio: 3800,
},

{
nombre: "SertalCompuesto",
precio: 5100,
},

{
nombre: "Fabogesic600",
precio: 2600,
},

{
nombre: "Tafirol1g",
precio: 1900,
},

{
nombre: "Tafirol500mg",
precio: 1900,
},

{
nombre: "TafirolPlus",
precio: 3000,
},

{
nombre: "TafirolResaca",
precio: 3500,
},

{
nombre: "TafirolDuo",
precio: 3100,
},

{
nombre: "TeVick",
precio: 1500,
},

{
  nombre: "BayaC",
  precio: 1200,
  },

{
nombre: "TeVENT3",
precio: 1200,
},

{
  nombre: "TeRolfita",
  precio: 800,
  },

{
nombre: "Uvasal",
precio: 400,
},

{
nombre: "Ovulol",
precio: 3000,
},

 {
    nombre: "IbuPediatrico",
    precio: 2500,
    },

{
nombre: "Curitas",
precio: 500,
},

{
nombre: "Enc.CANDELAx25",
precio: 8000,
},

{
nombre: "MiniBICx12",
precio: 9000,
},

{
nombre: "Pres.PRIME",
precio: 1700,
},

{
nombre: "Rep.911",
precio: 3500,
},

{
nombre: "OFF.Crema",
precio: 3500,
},
];

// Función para cargar los productos en el contenedor
const cargarProductos = () => {
  const contenedorProductos = document.getElementById("productos-container");

  // Iterar sobre el array de productos y crear la estructura HTML
  productos.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    // Variables para que cargar precio de lista y que calcule la ganancia
    // const Ganancia = (producto.precio * 30) / 100;
    // const precioFinal = producto.precio + Ganancia;

    const precioSugerido = producto.precio + producto.precio * (40 / 100);
    const precioRedondeado = Math.round(precioSugerido / 10) * 10;

    divProducto.innerHTML = `
      <h4>${producto.nombre}</h4>
      <p>$${producto.precio}</p>
      <label for="${producto.nombre}">Cantidad:</label>
      <select name="${producto.nombre}" id="${producto.nombre}">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>20</option>
        <option>24</option>
        <option>25</option>
        <option>30</option>
        <option>60</option>
        <!-- Agrega más opciones según sea necesario -->
      </select>
     <p class="sugerido">(Sug.$${precioRedondeado}) </p>
    `;

    // Agregar el producto al contenedor
    contenedorProductos.appendChild(divProducto);
  });
};

// formulita +40% sugerido   producto.precio + producto.precio * (40 / 100)

cargarProductos();

document.getElementById("boton-comprar").addEventListener("click", function () {
  // Obtener el nombre del cliente
  const nombreCliente = document.getElementById("nombre").value;

  // Obtener la cantidad de cada producto seleccionado
  const cantidades = {};
  productos.forEach((producto) => {
    const cantidad = document.getElementById(producto.nombre).value;
    if (cantidad > 0) {
      cantidades[producto.nombre] = cantidad;
    }
  });

  // Convertir la información a cadena de consulta
  const queryString = `?nombre=${encodeURIComponent(
    nombreCliente
  )}&${Object.entries(cantidades)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&")}`;

  // Redirigir a factura.html con la información
  window.location.href = `factura.html${queryString}`;
});

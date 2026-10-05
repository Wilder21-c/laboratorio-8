
class Producto {
  constructor(nombre, precio, descuento, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
    this.imagen = imagen;
  }

  calcularPrecioFinal() {
    return this.precio * (1 - this.descuento / 100);
  }
}


const catalogo = [
  new Producto("Teclado mecánico", 150, 20, "img/teclado.svg"),
  new Producto("Mouse inalámbrico", 80, 15, "img/mouse.svg"),
  new Producto("Audífonos", 200, 10, "img/audifonos.svg")
];


const contenedor = document.getElementById("contenedor-productos");
catalogo.forEach((producto) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";
  tarjeta.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>Precio base: S/ ${producto.precio.toFixed(2)}</p>
    <p>Descuento disponible: ${producto.descuento}%</p>
    <p class="precio" aria-live="polite">
      Precio actual: S/ ${producto.precio.toFixed(2)}
    </p>
    <button type="button">Aplicar Descuento</button>
  `;
  contenedor.appendChild(tarjeta);


  const boton = tarjeta.querySelector("button");
  const precio = tarjeta.querySelector(".precio");
  boton.addEventListener("click", () => {
    const precioFinal = producto.calcularPrecioFinal();
    precio.textContent = `Precio final: S/ ${precioFinal.toFixed(2)}`;
    boton.textContent = "Descuento aplicado";
    boton.disabled = true; 
  });
});

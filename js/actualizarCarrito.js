
import { productos } from "./stock.js"
import { obtenerProductos } from "./obtenerProductos.js"
import{validarProductoRepetido} from "./accionesCarrito.js"
import{agregarAlCarrito} from "./accionesCarrito.js"
import { guardarCarritoStorage } from "./storage.js";



const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    const totalCompra = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);

    pintarTotalesCarrito(totalCantidad, totalCompra);
    guardarCarritoStorage(carrito);
};

const pintarTotalesCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito');
    const precioTotal = document.getElementById('precioTotal');

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;
};

export { actualizarTotalesCarrito };
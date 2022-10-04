import { pintarCarrito } from "./accionesCarrito.js";
import { mostrarProductos } from "./main.js";
import { productos } from "./stock.js";
import { obtenerCarritoStorage } from "./storage.js";

document.addEventListener('DOMContentLoaded', ( )=>{
    mostrarProductos(productos);

    if(localStorage.getItem('carrito')){
    const carrito = obtenerCarritoStorage();
    console.log(carrito);
    pintarCarrito(carrito);

    };
});
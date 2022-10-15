import { pintarCarrito } from "./accionesCarrito.js";
import { mostrarProductos } from "./main.js";
import { obtenerCarritoStorage } from "./storage.js";

// Mostrar Productos

document.addEventListener('DOMContentLoaded', ( )=>{
    mostrarProductos();

    if(localStorage.getItem('carrito')){
    const carrito = obtenerCarritoStorage();
    console.log(carrito);
    pintarCarrito(carrito);

    };
});
import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { productos } from "./stock.js";
import { obtenerProductos } from "./obtenerProductos.js"
import { obtenerCarritoStorage } from './storage.js';




let carrito = [];


const validarProductoRepetido = (productoId) => {

    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }

    const productoRepetido = carrito.find(producto => producto.id === productoId);

    if (productoRepetido) {

        productoRepetido.cantidad++;

        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);

        cantidadProducto.innerText = `cantidad: ${productoRepetido.cantidad}`;

        actualizarTotalesCarrito(carrito);


    } else {
        agregarAlCarrito(productoId);
    }
};

const agregarAlCarrito = (productoId) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);


    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} value='${producto.id}' 
                    class='btn waves-effect waves-ligth boton-eliminar'>Eliminar</button>
                    `;
    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
};

// Pintar en el carrito
const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');

    contenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>Producto: ${producto.nombre}</p>
                        <p>Precio $ ${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                        <button id=eliminar${producto.id} value='${producto.id}'
                        class='btn waves-effect waves-ligth boton-eliminar'>Eliminar</button>
                        `;
        contenedor.appendChild(div);
    });
};


const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);

    Swal.fire({
        title: 'Estas seguro?',
        text: 'Estas seguro que quieres eliminar el producto?',
        icon:'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085b6',
        cancelButtonColor: '#A50CA8',
        confirmButtonText:'Eliminar',
        cancelButtonText:'Cancelar',
        position: top,
        imageWith: 600,
        imageHeigth: 400,
        background: "url(../assets/images/alertfondo.png)"

    }).then((result)=>{
        if(result.isConfirmed){
            eliminarProductoCarrito(productoId);
            actualizarTotalesCarrito(carritoActualizado);
            pintarCarrito(carritoActualizado);
            Swal.fire({
                title: 'Eliminado',
                text: 'El producto ha sido eliminado',
                icon:'success',
                position: top,
                imageWith: 600,
                imageHeigth: 400,
                background: "url(../assets/images/alertfondo.png)"

            })

        }
    })
};





export { agregarAlCarrito, validarProductoRepetido, pintarCarrito, eliminarProductoCarrito };
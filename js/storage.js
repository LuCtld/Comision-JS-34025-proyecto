
// Utilizando JSON

//Guardar

const guardarCarritoStorage = ( carritoDeCompras ) => {
    localStorage.setItem ('carrito', JSON.stringify (carritoDeCompras));

};

//Obtener

const obtenerCarritoStorage = ( ) => {
    const carritoStorage = JSON.parse (localStorage.getItem('carrito' ));
    return carritoStorage;
};



export {guardarCarritoStorage, obtenerCarritoStorage};
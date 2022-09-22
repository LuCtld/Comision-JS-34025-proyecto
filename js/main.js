
class Producto {
    constructor (id, nombre, marca, categoria, precio){
        this.id = id,
        this.nombre = nombre,
        this.marca = marca,
        this.categoria = categoria,
        this.precio = Number(precio);
    }
}

const arrayProductos =[];


const producto1 = new Producto (1, 'base', 'keepsurfing', 'parafina', 500);
const producto2 = new Producto (2, 'summer', 'free life', 'parafina', 450);
const producto3 = new Producto (3, 'winter','free life', 'parafina', 650);

//Metodo Push
arrayProductos.push(producto1, producto2, producto3);

//Saludos

const nombreUsuario = prompt('Hola! Ingresa tu nombre');
let saludoUsuario = prompt('Bienvenido! '+ nombreUsuario);

// Metodo Filter
const marcaFreeLife = arrayProductos.filter ((free) => free.marca === 'free life');
console.log (marcaFreeLife);


// Metodo forEach
const mostrarListaMenorMayor = () => {
    const menorMayor = [];
    arrayProductos.forEach (producto => menorMayor.push(producto.nombre + ' $'+producto.precio));
    alert('Lista de Menor a Mayor precio ' + '\n'+ menorMayor.join('\n'));
};

const mostrarListaMayorMenor = () => {
    const mayorMenor = [];
    arrayProductos.forEach (producto => mayorMenor.push(producto.nombre + ' $'+producto.precio));
    alert('Lista de Mayor a Menor precio ' + '\n'+ mayorMenor.join('\n'));
};

//Metodo Sort - menor a  mayor
const ordenarPorPrecioMenor = () => {
    arrayProductos.sort ((a,b)=> a.precio - b.precio);
    console.log (arrayProductos);
    mostrarListaMenorMayor();
}


//Metodo Sort - mayor a menor
const ordenarPorPrecioMayor = () => {
    arrayProductos.sort ((a,b)=> b.precio - a.precio);
    mostrarListaMayorMenor ();
}

//Agregar Productos

const agregarCarrito = () => {
    let otroProducto;
    let productoNombre = '';
    let productoCantidad = 0;
    let totalCompra =0;

    do{
        productoNombre = prompt('Qué queres comprar'+ '\n'+ producto1.nombre +'\n' + producto2.nombre + '\n'+ producto3.nombre).toLowerCase();
        productoCantidad = parseInt(prompt('Cuántos querés comprar?'));

        const productoSeleccionado = arrayProductos.find(producto => producto.nombre === productoNombre);
        console.log(productoSeleccionado);


        if(productoSeleccionado ){
            totalCompra = productoSeleccionado.precio * productoCantidad;
            alert('Agregó '+ productoNombre +',cantidad: '+ productoCantidad+ '\n El precio final es $'+ totalCompra);

            console.log(productoSeleccionado.nombre, productoCantidad, totalCompra);

        }else{
            alert('El producto no se encuentra en el listado');
        }

        otroProducto = confirm('Desea seguir comprando?');


    } while (otroProducto);

    compraDescuento(totalCompra);
};


const compraDescuento = (totalCompra) => {
    if (totalCompra >= 2500){
        totalCompra = totalCompra * 0.85;
        alert ('Tenés un descuento del 15%')
    }
    obtenerPrecioEnvio(totalCompra);
}

const obtenerPrecioEnvio = (totalCompra) => {
    let confirmaCompra = confirm('Quiere que se lo enviemos a domicilio?');

    if ( confirmaCompra && totalCompra > 2500){
        alert('Tenés envio gratis!');
    } else if (confirmaCompra && totalCompra < 2500 && totalCompra !== 0){
        totalCompra = totalCompra + 500;
        alert('El costo de la compra y costo de envío es $'+totalCompra);
    } else {
        alert('Retiras en el local. El total de la compra es $'+totalCompra);
    }
    comoAbona(totalCompra);
}




const comoAbona = (totalCompra) => {
    let comoPaga =  prompt('Quiere abonar en cuotas o efectivo?').toLowerCase();
    console.log(comoPaga);

    if (comoPaga === 'cuotas'){

        let cuantasCuotas = parseInt (prompt('Quiere abonar en 3, 6 o 12 cuotas?')) ;

        if (cuantasCuotas === 3 || cuantasCuotas === 6 || cuantasCuotas === 12){

            let precioCuotas = totalCompra / cuantasCuotas;
            alert ('Su compra de realizará en '+cuantasCuotas+' de $'+ precioCuotas +'. Gracias vuelva pronto!' );

        }else {
            alert ('No es un numero de cuotas válidas' );
            comoAbona();

        }

    } else {
        alert ('Su compra se realizará en efectivo. Gracias vuelva pronto!' );
    }
}



const ordenDeProductos = () =>{
    if (confirm ('Quiere filtrar los productos de menor a mayor precio')){
        ordenarPorPrecioMenor ();
    } else {
        ordenarPorPrecioMayor ();
    }
    agregarCarrito();


}

ordenDeProductos ();
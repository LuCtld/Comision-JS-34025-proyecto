

//Saludo

function saludar(){
    alert ('Bienvenido a Point Norte Surf Shop!');
    let nombreUsuario = prompt ('Por favor ingrese su nombre');
    while (nombreUsuario === '') {
        nombreUsuario = prompt ('Por favor ingrese su nombre');

    }
}


//Seleccion producto
function seleccionProducto(){
    let idProducto;

    do{
        idProducto= prompt ('Qué producto quieres comprar? \n1.Quilla \n2.Parafina \n3.Pita') ;
    } while (idProducto !=1 &&  idProducto !=2 && idProducto !=3)

    switch (idProducto) {
        case '1':
            return  'QUILLA';
        case '2':
            return  'PARAFINA';
        case '3':
            return 'PITA'
    }
}

//Producto Nombre
function precioProducto(productoNombre){
    if (productoNombre === 'QUILLA'){
        return 500;
    }else if (productoNombre === 'PARAFINA'){
        return 800;
    }else if (productoNombre === 'PITA'){
        return 300;
    }
}

// Producto Cobrar

function cobrarProducto (productoNombre, precio ){
    let cantidadProducto = parseInt (prompt ('Que cantidad de '+productoNombre+ ' quiere comprar?'));
    let costoFinal = precio * cantidadProducto;
    console.log (costoFinal);

    alert ('El costo de su compra es $' +costoFinal );
    console.log(costoFinal);

    let comoAbona = prompt ('Quiere abonar en efectivo (20% de descuento) o en cuotas (15% de recargo)?').toLocaleLowerCase();
    console.log(comoAbona);

    if (comoAbona == "efectivo") {
        let precioconDescuento = precio - precio *(20/100);
        alert ("El precio final de su compra es $" + precioconDescuento + " " + "Gracias! vuelva pronto :)");
        console.log(precioconDescuento);
        } else {
            let precioconRecargo = precio + precio *(15/100);
        alert ("El precio final de su compra es $" + precioconRecargo+ " " + "Gracias! vuelva pronto :)");
        console.log(precioconRecargo);
    }

}


saludar();
let productoNombre = seleccionProducto();
console.log (productoNombre);
let precio =  precioProducto(productoNombre);
console.log (precio);
cobrarProducto(productoNombre, precio);



















// Calcular Precio - Efectivo y cuotas


// function calcularPrecio(productoPrecio) {
//     let cantidadProducto = parseInt (prompt ('Que cantidad quieres comprar?'));
//     let precioCompra = cantidadProducto * productoPrecio;
//     console.log(precioCompra);
//     alert ('El costo de su compra es $' + precioCompra );

//     let comoabona = prompt("Efectivo (descuento del 20%) o Cuotas?").toLocaleLowerCase();

//     if (comoabona === "efectivo") {
//         let preciocondescuento = precioCompra - precioCompra *(20/100);
//         console.log(preciocondescuento);
//         alert ("El precio final de su compra es $" + preciocondescuento + " " + "Gracias! vuelva pronto :)");
//         }
//         else{
//             let cantidaddecuotas = parseInt (prompt ("Seleccione 3, 6 o 12 cuotas"));
//             let preciocuotas = precioCompra / cantidaddecuotas;
//                 console.log(preciocuotas);
//                 alert ("Su compra se realizará en "  + cantidaddecuotas +  " cuotas de $" + preciocuotas + " Gracias! vuelva pronto :)")

//             while (cantidaddecuotas !== 3 || cantidaddecuotas !== 6  || cantidaddecuotas !== 12)
//                 cantidaddecuotas = parseInt (prompt ("Seleccione 3, 6 o 12 cuotas"));
//                 preciocuotas = precioCompra / cantidaddecuotas;
//                 console.log(preciocuotas);
//                 alert ("Su compra se realizará en "  + cantidaddecuotas +  " cuotas de $" + preciocuotas + " Gracias! vuelva pronto :)")


//     }
// }

// calcularPrecio(productoPrecio);


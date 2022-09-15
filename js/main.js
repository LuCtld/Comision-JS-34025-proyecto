
//productos
function Producto (producto){
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.marca = producto.marca;
        this.precio = producto.precio;
}

const producto1 = new Producto({id:1, nombre:'parafina', marca:'summer', precio:500});
const producto2 = new Producto({id:2, nombre:'quilla', marca:'freelife', precio:1000});
const producto3 = new Producto({id:3, nombre:'pita', marca:'fcs', precio:800});
const producto4 = new Producto({id:4, nombre:'deck', marca:'freelife', precio:1500});

const listadoProductos = [producto1, producto2, producto3, producto4];

//Saludo

function saludar(){
    alert ('Bienvenido a Point Norte Surf Shop!');
    let nombreUsuario = prompt ('Por favor ingrese su nombre');
    while (nombreUsuario === '') {
        nombreUsuario = prompt ('Por favor ingrese su nombre');
    }
}
saludar();

let queCompra = prompt ('Que producto quiere comprar? \nParafina \nQuilla \nPita \nDeck').toLocaleLowerCase();
let queCantidad = parseInt(prompt('Que cantidad quiere comprar?'));

function seleccionProducto() {
    for (let i = 0; i < 5; i++){
        if (queCompra == listadoProductos[i].nombre){
        let precioFinal = queCantidad * listadoProductos[i].precio;

        alert ('Su compra es ' + queCantidad + ' ' + queCompra + ' por un costo de $'+ precioFinal);
        console.log(queCompra,queCantidad, precioFinal);


            let comoAbona = prompt('Cómo quiere abonar? efectivo (descuento 20%) o cuotas (recargo 15%)').toLocaleLowerCase();

            if (comoAbona == "efectivo") {
                let precioconDescuento = precioFinal - precioFinal *(20/100);
                alert ('El precio final de su compra es $' + precioconDescuento  + " Gracias! vuelva pronto :)");
                console.log(precioconDescuento);
                } else if (comoAbona == "cuotas"){
                    let precioconRecargo = precioFinal  + precioFinal  *(15/100);
                    alert ("El precio final de su compra es $" + precioconRecargo+ " " + "Gracias! vuelva pronto :)");
                    console.log(precioconRecargo);
            } else{
                alert ("No es una opcion válida :(");

            }

        }

    }

}

seleccionProducto();











// //Saludo

// function saludar(){
//     alert ('Bienvenido a Point Norte Surf Shop!');
//     let nombreUsuario = prompt ('Por favor ingrese su nombre');
//     while (nombreUsuario === '') {
//         nombreUsuario = prompt ('Por favor ingrese su nombre');

//     }
// }


// //Seleccion producto
// function seleccionProducto(){
//     let idProducto;

//     do{
//         idProducto= prompt ('Qué producto quieres comprar? \n1.Quilla \n2.Parafina \n3.Pita') ;
//     } while (idProducto !=1 &&  idProducto !=2 && idProducto !=3)

//     switch (idProducto) {
//         case '1':
//             return  'QUILLA';
//         case '2':
//             return  'PARAFINA';
//         case '3':
//             return 'PITA'
//     }
// }

// //Producto Nombre
// function precioProducto(productoNombre){
//     if (productoNombre === 'QUILLA'){
//         return 500;
//     }else if (productoNombre === 'PARAFINA'){
//         return 800;
//     }else if (productoNombre === 'PITA'){
//         return 300;
//     }
// }

// // Producto Cobrar

// function cobrarProducto (productoNombre, precio ){
//     let cantidadProducto = parseInt (prompt ('Que cantidad de '+productoNombre+ ' quiere comprar?'));
//     let costoFinal = precio * cantidadProducto;
//     console.log (costoFinal);

//     alert ('El costo de su compra es $' +costoFinal );
//     console.log(costoFinal);

//     let comoAbona = prompt ('Quiere abonar en efectivo (20% de descuento) o en cuotas (15% de recargo)?').toLocaleLowerCase();
//     console.log(comoAbona);

//     if (comoAbona == "efectivo") {
//         let precioconDescuento = precio - precio *(20/100);
//         alert ("El precio final de su compra es $" + precioconDescuento + " " + "Gracias! vuelva pronto :)");
//         console.log(precioconDescuento);
//         } else {
//             let precioconRecargo = precio + precio *(15/100);
//         alert ("El precio final de su compra es $" + precioconRecargo+ " " + "Gracias! vuelva pronto :)");
//         console.log(precioconRecargo);
//     }

// }


// saludar();
// let productoNombre = seleccionProducto();
// console.log (productoNombre);
// let precio =  precioProducto(productoNombre);
// console.log (precio);
// cobrarProducto(productoNombre, precio);


















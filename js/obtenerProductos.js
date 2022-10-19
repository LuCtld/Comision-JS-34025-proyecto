//Obtener Stock con Fetch

const productos = '../js/data/stock.json';

const obtenerProductos = async () => {
    try {
        const response = await fetch(productos);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Ha ocurrido un error', error);

    }

}

export{obtenerProductos}
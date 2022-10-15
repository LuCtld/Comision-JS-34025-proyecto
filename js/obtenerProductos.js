//Obtener Stock con Fetch

const obtenerProductos = async () => {
    try {
        const response = await fetch('../js/data/stock.json');
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Ha ocurrido un erros', error);

    }

}

export{obtenerProductos}
//Toastify

const mareas = document.getElementById('mareas');

mareas.addEventListener('click', () => {
    Toastify({
        text:'Click para conocer el pronostico de Mareas!',
        duration: 3000,
        style:{
            background:'#A53692'
        },
        destination: 'https://tablademareas.com/ar/buenos-aires/mar-del-plata',
        newWindiw: true,
    }).showToast();

});
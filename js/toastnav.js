//Toastify

const olas = document.getElementById('olas');

olas.addEventListener('click', () => {
    Toastify({
        text:'Click para conocer el pronostico de Olas!',
        duration: 3000,
        style:{
            background:'#A53692'
        },
        destination: 'https://www.surfline.com/',
        newWindiw: true,
    }).showToast();

});
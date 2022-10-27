

const mareas = () => {
    const contenedorMareas = document.getElementById('contenedor-mareas');

    const div = document.createElement("div")
        div.classList.add("menu")
        div.innerHTML +=`
        <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-mareas">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link" id="enero" aria-current="page" href="#">Enero</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="febrero" aria-current="page" href="#">Febrero</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="marzo" aria-current="page" href="#">Marzo</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="abril" aria-current="page" href="#">Abril</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="mayo" aria-current="page" href="#">Mayo</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="junio" aria-current="page" href="#">Junio</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="julio" aria-current="page" href="#">Julio</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="agosto" aria-current="page" href="#">Agosto</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="septiembre" aria-current="page" href="#">Septiembre</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="octubre" aria-current="page" href="#">Octubre</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="noviembre" aria-current="page" href="#">Noviembre</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="diciembre" aria-current="page" href="#">Diciembre</a>
        </li>
        </ul>
    </div>
</div>
</nav>
        </ul>
                        </div>
        `
        contenedorMareas.appendChild(div);

        const enero = document.getElementById('enero');
        enero.addEventListener('click', () => {

        const divMarea = document.createElement('div');
        div.classList.add("mareaImagen");
        div.innerHTML +=` <img class="cuadro-marea" src="../assets/images/enero.png" alt="Marea Enero">`
        contenedorMareas.appendChild(divMarea);
        mareas.reset()
        })

        const febrero = document.getElementById('febrero');
        febrero.addEventListener('click', () => {
        const divMarea = document.createElement('div');
        div.classList.add("mareaImagen");
        div.innerHTML +=` <img class="cuadro-marea" src="../assets/images/febrero.png" alt="Marea Enero">`
        contenedorMareas.appendChild(divMarea);
        mareas.reset()
        })

}

mareas();
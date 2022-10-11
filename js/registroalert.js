
//Formulario
 const datosFormulario = [];

const formulario = () => {

    const contenedorFormulario = document.getElementById('contenedor-formulario');

    const div = document.createElement("div")
        div.classList.add("formualrio")
        div.innerHTML += `
        <div class="container">
        <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
                <form class="form-horizontal" method="get" action=>
                    <fieldset>
                        <legend class="text">Subscripcion NewsLetter</legend>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="fname" name="name" type="text" placeholder="Nombre" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="lname" name="name" type="text" placeholder="Apellido" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="email" name="email" type="text" placeholder="Mail" class="form-control" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon" ></i></span>
                            <div class="col-md-8">
                                <input id="phone" name="phone" type="text" placeholder="Teléfono" class="form-control" >
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Dejanos un mensaje :)" rows="7"></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 ">
                                <button id="enviado" type="submit" class="btn-form">Enviar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        </div>
        </div>`

        contenedorFormulario.appendChild(div);



            const enviado= document.getElementById("enviado");

            enviado.addEventListener ('click', () =>{
                Swal.fire({
                    icon:'success',
                    title:'Enviado',
                    text:'Su formulario ha sido enviado',
                    timer : 4000,
                    position: top,
                    imageWith: 600,
                    imageHeigth: 400,
                    background: "url(../assets/images/alertfondo.png)"
                });
            })



}



formulario();
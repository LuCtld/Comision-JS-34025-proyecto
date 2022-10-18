
//Formulario de Registro NewsLetter

const formulario = () => {

    const contenedorFormulario = document.getElementById('contenedor-formulario');

    const div = document.createElement("div")
        div.classList.add("formualrio")
        div.innerHTML += `
        <div class="container">
        <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
                <form id="contact_form" class="form-horizontal" method="get" action=>
                    <fieldset>
                        <legend class="text">Subscripcion NewsLetter</legend>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="user_name" name="name" type="text" placeholder="Nombre" class="form-control" >
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="user_email" name="email" type="text" placeholder="Mail" class="form-control" required>
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

}

formulario();

const contactForm = document.getElementById('contact_form');
const userName = document.getElementById('user_name');
const userEmail = document.getElementById('user_email');
const message = document.getElementById('message');

const sendEmail = async (body) => {
    const settings = {
        method:'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body),
    }
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', settings);
    const data = await response.json();
    return data;
};

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        service_id: 'service_thvmv68',
        template_id: 'template_2ieloo9',
        user_id: 'POji759wU0J6OjhnR',
        template_params: {
            'to_name': userName.value,
            'from_name': userEmail.value,
            'message': message.value
        }
    };

    sendEmail (body)
    .then((response)=>{
        console.log(response.text());
        Swal.fire({
            icon: 'success',
            title: 'Enviado!',
            text: 'Tu mensaje ha sido enviado, te responderemos en breve!',

        }).catch((error) => {
            console.log(error)


        })


    })
});
document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    mostrarServicios();
}

async function mostrarServicios(){
    try {
        const resultado =await fetch('./servicios.json');
        const db = await resultado.json();
        const {servicios} = db; //Extrae el contenido de servicios que se encuentra en la variable db
        
        //Generar el HTML
        servicios.forEach(servicio => {
            const{id, nombre, precio} = servicio;

            //DOM Scripting
            //Generando nombre del servicio
            const nombreServicio = document.createElement('P');
            nombreServicio.textContent = nombre;
            nombreServicio.classList.add('nombre-servicio');

            //Generando el precio
            const precioServicio = document.createElement('P');
            precioServicio.textContent = "$ "+precio;
            precioServicio.classList.add('precio-servicio');
            
            //Generar div contenedor de servicio
            const servicioDiv = document.createElement('DIV');
            servicioDiv.classList.add('servicio');

            //Inyectar precio y nombre al div
            servicioDiv.appendChild(nombreServicio);
            servicioDiv.appendChild(precioServicio);

            //Inyectarlo al HTML
            document.querySelector('#servicios').appendChild(servicioDiv);

            //console.log(servicioDiv);
        });


    } catch (error) {
        console.log(error);
    }
}
function mostrar(event) {
    event.preventDefault(); // Evita que el formulari recarregui la pàgina    
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.style.display = 'flex'; // Asegúrate de que el contenedor sea visible

    document.querySelectorAll('.button-container .button').forEach(button => { // Agafa tots els botons
        button.style.display = 'block'; //Fa visible els botons
    });
    document.getElementById('primer').style.display = 'none';
}

function declarar() { // Mostra o oculta el segon formulari
    const status = document.getElementById('segon');    
    if (status.style.display === 'block') { 
        status.style.display = 'none'; // Oculta el formulario si está visible
    } else {
        status.style.display = 'block'; // Muestra el formulario si está oculto
    }
}

function consultar() { // Mostra o oculta el segon formulari
    const status = document.querySelector('.consultar');    
    if (status.style.display === 'block') { 
        status.style.display = 'none'; // Oculta el formulario si está visible
    } else {
        status.style.display = 'block'; // Muestra el formulario si está oculto
    }
}

function altres() { // Mostra o oculta el segon formulari
    const status = document.querySelector('.altres');    
    if (status.style.display === 'block') { 
        status.style.display = 'none'; // Oculta el formulario si está visible
    } else {
        status.style.display = 'block'; // Muestra el formulario si está oculto
    }
}
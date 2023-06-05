document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const cartelDiv = document.getElementById('cartel');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    cartelDiv.innerHTML = '';// Limpiar el contenido anterior

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const provincia = document.getElementById('provincia').value;

    const errors = [];

    if (nombre === '') {
      errors.push('El campo "Nombre" es obligatorio.');
    } else if (nombre.length > 50) {
      errors.push('El campo "Nombre" debe tener máximo 50 caracteres.');
    }

    if (apellido === '') {
      errors.push('El campo "Apellido" es obligatorio.');
    } else if (apellido.length > 50) {
      errors.push('El campo "Apellido" debe tener máximo 50 caracteres.');
    }

    if (direccion === '') {
      errors.push('El campo "Dirección" es obligatorio.');
    } else if (direccion.length > 100) {
      errors.push('El campo "Dirección" debe tener máximo 100 caracteres.');
    }

    if (telefono === '') {
      errors.push('El campo "Teléfono" es obligatorio.');
    } else if (!/^[0-9]{10}$/.test(telefono)) {
      errors.push('El campo "Teléfono" debe contener exactamente 10 dígitos numéricos.');
    }

    if (correo === '') {
      errors.push('El campo "Correo electrónico" es obligatorio.');
    }

    if (provincia === '') {
      errors.push('Debes seleccionar una provincia.');
    }

    
    if (errors.length === 0) {
      // Los datos son válidos, agregar HTML para mostrar los datos enviados
      //const resultHTML = document.createElement('div');
      const cartelDiv = document.getElementById('cartel');
      cartelDiv.innerHTML = `
        <p>¡Formulario enviado con éxito!</p>
        <h2>Datos enviados:</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellido:</strong> ${apellido}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Correo electrónico:</strong> ${correo}</p>
        <p><strong>Provincia:</strong> ${provincia}</p>
      `;
      cartelDiv.appendChild(cartelDiv);
      cartelDiv.style.display = "block"
    } else {
      // Mostrar los errores en el HTML
      const errorsHTML = document.createElement('div');
      errorsHTML.innerHTML = `
        <h2>Error:</h2>
        <ul>
          ${errors.map(error => `<li>${error}</li>`).join('')}
        </ul>
      `;
      cartelDiv.appendChild(errorsHTML);
      cartelDiv.style.display = "block"
    }
  });

});
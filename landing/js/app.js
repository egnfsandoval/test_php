$(document).ready(function() {
    const regexmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexpass = /^(?=(?:.*[A-Z]){2,})(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).{8,}$/;
    $('#btnsuccess').prop('disabled',true);
    function tieneMasDe17(fechaNacimiento) {
        const hoy = new Date();
        const fechaNac = new Date(fechaNacimiento);
        
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mes = hoy.getMonth() - fechaNac.getMonth();
        const dia = hoy.getDate() - fechaNac.getDate();
    
        if (mes < 0 || (mes === 0 && dia < 0)) {
          edad--;
        }
    
        return edad >= 17;
      }
    function limpiarCampos(){
        $('#nombre').val('');
        $('#email').val('');
        $('#password').val('');
        $('#fecha_nacimiento').val('');
        $('#btnsuccess').prop('disabled',true);
        $('#nombre').removeClass("valido");
        $('#email').removeClass("valido");
        $('#password').removeClass("valido");
        $('#fecha_nacimiento').removeClass("valido");
        
    }
    $('#btnsuccess').click(function() {
        const datos = {
            nombre: $('#nombre').val(),
            correo: $('#email').val(),
            password: $('#password').val(),
            fnac: $('#fecha_nacimiento').val(),
            token: $('meta[name="token"]').attr('content')
          };
        $.ajax({
          url: 'http://localhost/api/registro.php',
          type: 'POST',
          data: JSON.stringify(datos), 
          contentType: 'application/json; charset=utf-8', 
          dataType: 'json',
          success: function(data) {
            limpiarCampos();
            alert(data.mensaje);
          },
          error: function() {
            alert('Error al crear el usuario');
          }
        });
      });

      function validarFormulario(){
        const nombre = $('#nombre').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val().trim();
        const fecha = $('#fecha_nacimiento').val();

        const nombreValido = nombre.trim() != "";
        const emailValido = regexmail.test(email);
        const passwordValida = regexpass.test(password);
        const edadValida = fecha ? tieneMasDe17(fecha) : false;

        $('#nombre').toggleClass('valido', nombreValido).toggleClass('invalido', !nombreValido && nombre !== '');
        $('#email').toggleClass('valido', emailValido).toggleClass('invalido', !emailValido && email !== '');
        $('#password').toggleClass('valido', passwordValida).toggleClass('invalido', !passwordValida && password !== '');
        $('#fecha_nacimiento').toggleClass('valido', edadValida).toggleClass('invalido', !edadValida && fecha !== '');

        $('#btnsuccess').prop('disabled', !(nombreValido && emailValido && passwordValida && edadValida));
      }
      $('#nombre, #email, #password, #fecha_nacimiento').on('input change', validarFormulario);
      
  });
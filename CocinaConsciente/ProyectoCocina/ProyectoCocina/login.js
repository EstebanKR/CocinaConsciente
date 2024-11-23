// Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);

// Declarando variables
var formulario_login = document.querySelector("#formulario__login");
var formulario_register = document.querySelector("#formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

// Validar el formulario de login
formulario_login.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    var telefono = formulario_login.querySelector('input[name="telefono"]').value.trim();
    var password = formulario_login.querySelector('input[name="contraseña"]').value.trim();

    // Validar que los campos no estén vacíos
    if (!telefono || !password) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validar que el teléfono solo contenga dígitos
    if (!/^\d+$/.test(telefono)) {
        alert("El número de teléfono debe contener solo dígitos.");
        return;
    }

    // Si todo es válido, redirigir a index.html
    alert("Inicio de sesión exitoso...");
    window.location.href = "index.html"; // Redirige a la página deseada
});

// Validar el formulario de registro
formulario_register.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    var nombre = formulario_register.querySelector('input[name="nombre"]').value.trim();
    var correo = formulario_register.querySelector('input[name="correo"]').value.trim();
    var telefono = formulario_register.querySelector('input[name="telefono"]').value.trim();
    var password = formulario_register.querySelector('input[name="password"]').value.trim();

    // Validar que los campos no estén vacíos
    if (!nombre || !correo || !telefono || !password) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validar que el correo tenga un formato válido
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        alert("El correo electrónico no tiene un formato válido.");
        return;
    }

    // Validar que el teléfono solo contenga dígitos
    if (!/^\d+$/.test(telefono)) {
        alert("El número de teléfono debe contener solo dígitos.");
        return;
    }

    // Si todo es válido, redirigir a index.html
    alert("Formulario de registro válido. Redirigiendo...");
    window.location.href = "index.html"; // Redirige a la página deseada
});

// Funciones de interacción de interfaz
function anchoPage() {
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

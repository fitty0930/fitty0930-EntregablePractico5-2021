document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".buttonCampana").addEventListener("click", function() {
        document.querySelector(".items_notificaciones").classList.toggle("ocultar");
    });
    document.querySelector(".navbar-button").addEventListener("click", function() {
        document.querySelector(".items_perfil").classList.toggle("ocultar");
    });
});
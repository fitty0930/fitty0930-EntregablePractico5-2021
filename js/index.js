document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".buttonCampana").addEventListener("click", function() {
        document.querySelector(".items_notificaciones").classList.toggle("ocultar");
    });
});
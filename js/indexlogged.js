document.addEventListener("DOMContentLoaded", function() {
    let campanita = document.getElementById("campanita");


    campanita.addEventListener("mouseover", function() {
        // console.log("holas")
        campanita.classList.add("fas")
        campanita.classList.remove("far")
    })

    campanita.addEventListener("mouseout", function() {
        campanita.classList.remove("fas")
        campanita.classList.add("far")
    })

    let btnbuscar = document.getElementById("btn-buscar");
    if(btnbuscar){
        btnbuscar.addEventListener("click", function() {
            window.location.href = 'resultspagelogeado.html'; // LO REDIRIJO A DONDE SE LOGUEO
        })
    }

    // VA AL INDEX LOGGUED IN
    document.querySelector(".buttonCampana").addEventListener("click", function() {
        document.querySelector(".items_notificaciones").classList.toggle("ocultar");
        document.querySelector(".items_perfil").classList.add("ocultar");
        console.log("ee")
    });
    document.querySelector(".navbar-button").addEventListener("click", function() {
        document.querySelector(".items_perfil").classList.toggle("ocultar");
        document.querySelector(".items_notificaciones").classList.add("ocultar");

    });
    // let campanita = document.getElementById("campanita");
});
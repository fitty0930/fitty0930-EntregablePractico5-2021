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
    btnbuscar.addEventListener("click", function() {
        window.location.href = 'resultspagelogeado.html'; // LO REDIRIJO A DONDE SE LOGUEO
    })
});
document.addEventListener("DOMContentLoaded", function() {

    let btnbuscar = document.getElementById("btn-buscar");
    btnbuscar.addEventListener("click", function() {
        window.location.href = 'resultspage.html'; // LO REDIRIJO A DONDE SE LOGUEO
    })

    console.log(window.scrollY)
});
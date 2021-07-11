document.addEventListener("DOMContentLoaded", function() {
    let preloder = document.querySelector("#preloder");
    let page = document.querySelector(".page");
    let percent = document.querySelector(".percent");


    loadPage();

    function loadPage() {
        let i = 0;
        let percentCount = 9;
        let interval = setInterval(function() {
            percentCount += 7;
            if (i === 3) {
                loading = false;

                //se oculta el preloader
                preloder.classList.toggle("hide");

                //se espera un segundo y se hace un fadeIn al contenido de la pagina
                setTimeout(function() {
                    preloder.classList.toggle("ocultar");
                    document.querySelector(".center").classList.toggle("ocultar");
                    page.classList.toggle("ocultar");
                    page.classList.toggle("showPermanente");
                }, 1000);

                clearInterval(interval);
            }
            percent.innerHTML = percentCount + "%";
            i += 0.25;
        }, 250);
    }


    let btnbuscar = document.getElementById("btn-buscar");
    btnbuscar.addEventListener("click", function() {
        window.location.href = 'resultspage.html'; // LO REDIRIJO A DONDE SE LOGUEO
    })






});
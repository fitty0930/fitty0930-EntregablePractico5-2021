document.addEventListener("DOMContentLoaded", function() {
    const numb = document.querySelector(".number");
    let cards = document.querySelectorAll(".card_horizontal");
    let page= document.querySelector(".page");
    let counter = 0;

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
                setTimeout(function() {
                    mostrarLoaderContenido();
                }, 1000);
            }
            document.querySelector(".percent").innerHTML = percentCount + "%";
            i += 0.25;
        }, 250);
    }

    document.querySelector(".btn_search").addEventListener("click", function() {
        document.querySelector(".cargando").classList.toggle("ocultar");
        document.querySelector(".resultados").classList.toggle("ocultar");
        mostrarLoaderContenido();
    })

    function mostrarLoaderContenido(){
        let interval = setInterval(() => {
            if (counter == 100) {
                clearInterval(interval);
                document.querySelector(".cargando").classList.toggle("ocultar");
                document.querySelector(".resultados").classList.toggle("ocultar");
                console.log("ee")

                for (let card of cards) {
                    card.classList.toggle("showPermanente");
                }
                counter = 0;
            } else {
                counter += 1;
                numb.textContent = counter + "%";
            }
        }, 49);
    }

    

});
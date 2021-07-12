document.addEventListener("DOMContentLoaded", function() {
    let btnBuzz = document.getElementById("buzzlightyear");

    btnBuzz.addEventListener("click", function() {
        btnBuzz.classList.add("hvr-buzz-js")
        setTimeout(function() { btnBuzz.classList.remove("hvr-buzz-js"); }, 5000);
    });

    let corazonfav = document.getElementById("corazon-fav")

    corazonfav.addEventListener("mouseover", function() {

        corazonfav.classList.add("fas")
        corazonfav.classList.remove("far")
    })

    corazonfav.addEventListener("mouseout", function() {
        corazonfav.classList.remove("fas")
        corazonfav.classList.add("far")
    })

    let btnAddList = document.getElementById("btnAddList");

    btnAddList.addEventListener("mouseover", function() {
        btnAddList.classList.add("text-success")
    })

    btnAddList.addEventListener("mouseout", function() {
        btnAddList.classList.remove("text-success")
    })

    let flechaDer = document.getElementById("flechaDer");

    flechaDer.addEventListener("mouseover", function() {
        flechaDer.classList.add("text-primary");
    })

    flechaDer.addEventListener("mouseout", function() {
        flechaDer.classList.remove("text-primary");
    })

    let flechaIzq = document.getElementById("flechaIzq");

    flechaIzq.addEventListener("mouseover", function() {
        flechaIzq.classList.add("text-primary");
    })

    flechaIzq.addEventListener("mouseout", function() {
        flechaIzq.classList.remove("text-primary");
    })

    let carrIzq = document.getElementById("carrIzq");
    carrIzq.addEventListener("mouseover", function() {
        carrIzq.classList.add("text-primary");
    })

    carrIzq.addEventListener("mouseout", function() {
        carrIzq.classList.remove("text-primary");
    })

    let carrDer = document.getElementById("carrDer");
    carrDer.addEventListener("mouseover", function() {
        carrDer.classList.add("text-primary");
    })

    carrDer.addEventListener("mouseout", function() {
        carrDer.classList.remove("text-primary");
    })

});
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
});
document.addEventListener("DOMContentLoaded", function() {
    let btnBuzz = document.getElementById("buzzlightyear");

    btnBuzz.addEventListener("click", function() {
        btnBuzz.classList.add("hvr-buzz-js")
        setTimeout(function() { btnBuzz.classList.remove("hvr-buzz-js"); }, 5000);
    });

    let corazonfav = document.getElementById("corazon-fav")

    corazonfav.addEventListener("mouseover", function() {
        console.log("holas")
        corazonfav.classList.add("fas")
        corazonfav.classList.remove("far")
    })

    corazonfav.addEventListener("mouseout", function() {
        corazonfav.classList.remove("fas")
        corazonfav.classList.add("far")
    })
});
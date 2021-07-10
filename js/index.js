document.addEventListener("DOMContentLoaded", function() {
    let campanita = document.getElementById("campanita");


    campanita.addEventListener("mouseover", function() {
        console.log("holas")
        campanita.classList.add("fas")
        campanita.classList.remove("far")
    })

    campanita.addEventListener("mouseout", function() {
        campanita.classList.remove("fas")
        campanita.classList.add("far")
    })

});
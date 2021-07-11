document.addEventListener("DOMContentLoaded", function() {
    let corazon1 = document.getElementById("corazon1");
    corazon1.addEventListener("mouseover", function() {
        corazon1.classList.add("fas");
        corazon1.classList.remove("far");
    })

    corazon1.addEventListener("mouseout", function() {
        corazon1.classList.remove("fas")
        corazon1.classList.add("far")
    })

    let corazon2 = document.getElementById("corazon2");
    corazon2.addEventListener("mouseover", function() {
        corazon2.classList.add("fas");
        corazon2.classList.remove("far");
    })

    corazon2.addEventListener("mouseout", function() {
        corazon2.classList.remove("fas")
        corazon2.classList.add("far")
    })

    let corazon3 = document.getElementById("corazon3");
    corazon3.addEventListener("mouseover", function() {
        corazon3.classList.add("fas");
        corazon3.classList.remove("far");
    })

    corazon3.addEventListener("mouseout", function() {
        corazon3.classList.remove("fas")
        corazon3.classList.add("far")
    })

});
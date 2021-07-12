document.addEventListener("DOMContentLoaded", function() {

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

    let estrella1 = document.getElementById("estrella1");
    let estrella2 = document.getElementById("estrella2");
    let estrella3 = document.getElementById("estrella3");
    let estrella4 = document.getElementById("estrella4");
    let estrella5 = document.getElementById("estrella5");
    let calification_span = document.getElementById("calification-span");

    estrella1.addEventListener("mouseout", function() {
        estrella1.classList.remove("fas");
        estrella1.classList.add("far")
        calification_span.innerHTML = "Califica a Martin con las estrellas"
        calification_span.classList.remove("rate-bad")
        calification_span.classList.remove("rate-regular")
        calification_span.classList.remove("rate-good")
    })

    estrella1.addEventListener("mouseover", function() {
        estrella1.classList.add("fas");
        estrella1.classList.remove("far")
        calification_span.classList.remove("rate-regular")
        calification_span.classList.remove("rate-good")
        calification_span.innerHTML = "Muy mala"
        calification_span.classList.add("rate-bad")
    })

    estrella2.addEventListener("mouseout", function() {
        estrella1.classList.remove("fas");
        estrella1.classList.add("far")
        estrella2.classList.remove("fas");
        estrella2.classList.add("far")
        calification_span.innerHTML = "Califica a Martin con las estrellas"
        calification_span.classList.remove("rate-bad")
        calification_span.classList.remove("rate-regular")
        calification_span.classList.remove("rate-good")
    })

    estrella2.addEventListener("mouseover", function() {
        estrella1.classList.add("fas");
        estrella1.classList.remove("far")
        estrella2.classList.add("fas");
        estrella2.classList.remove("far")
        calification_span.innerHTML = "Mala"
        calification_span.classList.remove("rate-regular")
        calification_span.classList.remove("rate-good")
        calification_span.classList.add("rate-bad")
    })

    estrella3.addEventListener("mouseout", function() {
        estrella1.classList.remove("fas");
        estrella1.classList.add("far")
        estrella2.classList.remove("fas");
        estrella2.classList.add("far")
        estrella3.classList.remove("fas");
        estrella3.classList.add("far")
        calification_span.innerHTML = "Califica a Martin con las estrellas"
        calification_span.classList.remove("rate-bad")
        calification_span.classList.remove("rate-regular")
        calification_span.classList.remove("rate-good")
    })

    estrella3.addEventListener("mouseover", function() {
        estrella1.classList.add("fas");
        estrella1.classList.remove("far")
        estrella2.classList.add("fas");
        estrella2.classList.remove("far")
        estrella3.classList.add("fas");
        estrella3.classList.remove("far")
        calification_span.innerHTML = "Regular"
        calification_span.classList.remove("rate-bad")
        calification_span.classList.remove("rate-good")
        calification_span.classList.add("rate-regular")
    })

    estrella4.addEventListener("mouseout", function() {
        estrella1.classList.remove("fas");
        estrella1.classList.add("far")
        estrella2.classList.remove("fas");
        estrella2.classList.add("far")
        estrella3.classList.remove("fas");
        estrella3.classList.add("far")
        estrella4.classList.remove("fas");
        estrella4.classList.add("far")
        calification_span.innerHTML = "Califica a Martin con las estrellas"
        calification_span.classList.remove("rate-bad")
        calification_span.classList.remove("rate-regular")
        calification_span.classList.remove("rate-good")
    })

    estrella4.addEventListener("mouseover", function() {
        estrella1.classList.add("fas");
        estrella1.classList.remove("far")
        estrella2.classList.add("fas");
        estrella2.classList.remove("far")
        estrella3.classList.add("fas");
        estrella3.classList.remove("far")
        estrella4.classList.add("fas");
        estrella4.classList.remove("far")
        calification_span.innerHTML = "Buena"
        calification_span.classList.remove("rate-bad")
        calification_span.classList.remove("rate-regular")
        calification_span.classList.add("rate-good")
    })

    estrella5.addEventListener("mouseout", function() {
        estrella1.classList.remove("fas");
        estrella1.classList.add("far")
        estrella2.classList.remove("fas");
        estrella2.classList.add("far")
        estrella3.classList.remove("fas");
        estrella3.classList.add("far")
        estrella4.classList.remove("fas");
        estrella4.classList.add("far")
        estrella5.classList.remove("fas");
        estrella5.classList.add("far")
        calification_span.innerHTML = "Califica a Martin con las estrellas"
        calification_span.classList.remove("rate-bad")
        calification_span.classList.remove("rate-regular")
        calification_span.classList.remove("rate-good")
    })

    estrella5.addEventListener("mouseover", function() {
        estrella1.classList.add("fas");
        estrella1.classList.remove("far")
        estrella2.classList.add("fas");
        estrella2.classList.remove("far")
        estrella3.classList.add("fas");
        estrella3.classList.remove("far")
        estrella4.classList.add("fas");
        estrella4.classList.remove("far")
        estrella5.classList.add("fas");
        estrella5.classList.remove("far")
        calification_span.innerHTML = "Muy buena"
        calification_span.classList.remove("rate-bad")
        calification_span.classList.remove("rate-regular")
        calification_span.classList.add("rate-good")
    })


});
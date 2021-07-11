document.addEventListener("DOMContentLoaded", function() {
    const numb = document.querySelector(".number");
    let cards= document.querySelectorAll(".card_horizontal");
    let counter = 0;
    let interval= setInterval(() => {
        if(counter == 100 ){
            clearInterval(interval);
            document.querySelector(".cargando").classList.toggle("ocultar");
            document.querySelector(".resultados").classList.toggle("ocultar");
            console.log("ee")

            for (let card of cards) {
                card.classList.toggle("showPermanente");
            }
            counter = 0;
        }else{
            counter+=1;
            numb.textContent = counter + "%";
        }
    }, 49);
});
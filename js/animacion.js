document.addEventListener("DOMContentLoaded", function() {
    
    listarCardHorizontales();

    function listarCardHorizontales() {
        let cards= document.querySelectorAll(".card_horizontal");

        for (let card of cards) {
            card.classList.toggle("ocultar");
        }
    }
})
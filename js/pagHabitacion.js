document.addEventListener("DOMContentLoaded", function () {
    // El selector deseado
let img_carousel = document.querySelectorAll(".img_carousel");
let img_central_carousel = document.querySelector(".img_central_carousel");


for (let i = 0; i < img_carousel.length; i++) {
    let ckEdiloop = img_carousel[i];
    ckEdiloop.addEventListener("click", function(el){
        let thisSrc = this.src;
        ckEdiloop.src= img_central_carousel.src;
       img_central_carousel.src= thisSrc;
    });
}
})
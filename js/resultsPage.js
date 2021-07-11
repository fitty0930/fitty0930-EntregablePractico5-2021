document.addEventListener("DOMContentLoaded", function() {
    const numb = document.querySelector(".number");
    let counter = 0;
    let interval= setInterval(() => {
        if(counter == 100 ){
            clearInterval(interval);
            document.querySelector(".cargando").classList.toggle("ocultar");
            document.querySelector(".resultados").classList.toggle("ocultar");
            console.log("ee")
            counter = 0;
        }else{
            counter+=1;
            numb.textContent = counter + "%";
        }
    }, 80);
});
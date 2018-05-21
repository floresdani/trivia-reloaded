function recibir(){ 
    var valor = document.getElementById("texto").value;
    
        document.getElementById("txt").innerHTML="Bienvenid@ " + valor + " ¿Quiéres jugar?.";  
}   /* Ingresar el nombre */
    /* Aceptar juego */
window.onload = function() {
    var answer1 = prompt("¿han egresado hombres en Laboratoria? s/n");
        if (answer1.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
            document.getElementById("rightAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No han egresado hombres</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
            document.getElementById("wrongAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No han egresado hombres</p>"
            "</div>";
        }    
    var answer2 = prompt("¿hay laboratoria en concepción? s/n");
        if (answer2.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
            document.getElementById("rightAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No hay laboratoria en concepción</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
            document.getElementById("wrongAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No hay laboratoria en concepción</p>"
            "</div>";
        }
}
    /* No aceptar juego */
function notAccept() {
        document.getElementById("notPlaying").innerHTML = "Hasta pronto.";
}

           
    

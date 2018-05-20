function recibir(){ 
    var valor = document.getElementById("texto").value;
    
        document.getElementById("txt").innerHTML="Bienvenid@ " + valor + " ¿Quiéres jugar?.";  
}   /* Ingresar el nombre */
    
/* Aceptar juego */
(function (){
    var accept = document.getElementById("accept");
    accept.addEventListener("click", function (){
    document.getElementById("playing").innerHTML = question1;
    var question1 = document.write("¿Han egresado hombres de Laboratoria? s/n");
    if (question1() === "n") {
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
    }});
    });
    
    /* No aceptar juego */
(function (){ 
    var notAccept= document.getElementById("notAccept");
    notAccept.addEventListener("click", function(){
    document.getElementById("notPlaying").innerHTML = "Hasta pronto.";
    });
})

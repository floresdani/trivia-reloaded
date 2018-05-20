function recibir(){ 
    var valor = document.getElementById("texto").value;
    
        document.getElementById("txt").innerHTML="Bienvenid@ " + valor + " ¿Quiéres jugar?.";  
}   /* Ingresar el nombre */
    /* Aceptar juego */
function accept() {
 
}
    /* No aceptar juego */
function notAccept() {
        document.getElementById("notPlay").innerHTML = "Hasta pronto.";
}
    function studentQuestions(){
        var questions = [
            "¿Hay sede en Concepción?", 
            "¿Hay egresados hombres?", 
            ];
        var respuestas = [
            ["No", "Sí"],
            ["No", "Sí"],
        ]; 
        document.getElementById("question").innerHTML = questions;
    }
    function placeQuestions(){

    }

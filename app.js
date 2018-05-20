function recibir(){ 
    var valor = document.getElementById("texto").value;
    
        document.getElementById("txt").innerHTML="Bienvenid@ " + valor + " ¿Quiéres jugar?.";  
}   /* Ingresar el nombre */
    /* Aceptar juego */
function accept(){
    
}
    /* No aceptar juego */
function notAccept() {
        document.getElementById("notPlaying").innerHTML = "Hasta pronto.";
}
function studentQuestions(){
        var questions = [
            "¿Hay sede en Concepción?", 
            "¿Hay egresados hombres?", 
            ];
        var answers = [
            ["No", "Sí"],
            ["No", "Sí"],
        ]; 
        document.getElementById("question").innerHTML = questions;
        document.getElementById("answer").innerHTML = answers;    
    }   

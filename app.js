function recibir(){ 
    var valor = document.getElementById("texto").value;
    
        document.getElementById("txt").innerHTML="Bienvenid@ " + valor + " ¿Quiéres jugar?.";  
}   /* Ingresar el nombre */
    /* Aceptar juego */
function accept(){
var questions = "¿Hay sede en Concepción?";
        

        document.getElementById("question").innerHTML = questions;
        document.getElementById("answer").innerHTML = answers;     
}
    /* No aceptar juego */
function notAccept() {
        document.getElementById("notPlaying").innerHTML = "Hasta pronto.";
}

           
    

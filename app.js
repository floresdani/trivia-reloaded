    function recibir(){ 
    var valor = document.getElementById("texto").value;
    
        document.getElementById("txt").innerHTML="Bienvenid@ " + valor + ".";  
    } /* Ingresar el nombre */
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

//Este Codigo es para la calculadora

function outcome() {
  
    //Obtiene los valores de los inputs
    let num1 = document.getElementById("num-one").value;
    let num2 = document.getElementById("num-two").value;
    let total = 0;


    //Verifica que el usuario haya ingresado valores
    if (document.getElementById("box1").checked) 
        total = parseInt(num1) + parseInt(num2);
    else if (document.getElementById("box2").checked) 
        total = parseInt(num1) - parseInt(num2);
    else if (document.getElementById("box3").checked) 
        total = parseInt(num1) * parseInt(num2);
    else 
        total = parseInt(num1) / parseInt(num2);
    
    document.getElementById("resultArea").innerHTML = "Resultado " + String(total);
}

//funcion alerta

function alerta(){
    alert("Loading weather report...");
}

//eliminar Cookie

var galleta = document.querySelector(".cookie");

function eliminar(){
    galleta.remove();
}

//funcion para farenheit y celcius
function Far(x){
    return parseInt(x*9/5+32);
}

function Cel(x){
    return parseInt((x-32)*5/9);
}

//convertir temperaturas
function cambioTemp(element){
    for(i=1; i<9; i++){
        var temp = document.querySelector("#temp" + i);
        var tempv = parseInt(temp.innerText);

        if(element.value == "farenheit"){
            temp.innerText = Far(tempv);
        }
    
        else{
            temp.innerText = Cel(tempv);
        }
    }
    
}
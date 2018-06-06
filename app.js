window.onload = function(){
let comida=document.getElementById("pedido").value;
let ordena=document.getElementById("ordenar");
let mens="";

ordena.addEventListener('click', ordenar);

function ordenar(){ 
    comida=document.getElementById("pedido").value;
    comida=comida.toLocaleLowerCase();
   
    switch (comida){
        case "ceviche":mens="Exelente, su comida estará lista pronto";break;
        case "tacos al pastor": mens="Exelente, su comida estará lista pronto";break;
        case "empanada chilena":mens="Exelente, su comida estará lista pronto";break;
        case "hamburguesa": mens="Exelente, su comida estará lista pronto";break;
        default: mens="Lo sentimos, su pedido no esta en el menú, elija otra cosa por favor";   

        }
    document.getElementById("msj").innerHTML=mens;
    
    }

    
}
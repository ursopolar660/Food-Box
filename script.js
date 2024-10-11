let prato;
let bebida;
let sobremesa;
let valorPrato;
let valorBebida;
let valorSobremesa;

function pepperoni() {
    document.getElementById("pepperoni").style.borderColor = "green";
    document.getElementById("queijos").style.borderColor = "white";
    document.getElementById("portuguesa").style.borderColor = "white";

    prato = "pepperoni";
    valorPrato = parseFloat(25.90)
}
function queijos() {
    document.getElementById("queijos").style.borderColor = "green";
    document.getElementById("pepperoni").style.borderColor = "white";
    document.getElementById("portuguesa").style.borderColor = "white";

    prato = "queijos";
    valorPrato = parseFloat(35.90)
}
function portuguesa() {
    document.getElementById("portuguesa").style.borderColor = "green";
    document.getElementById("pepperoni").style.borderColor = "white";
    document.getElementById("queijos").style.borderColor = "white";

    prato = "portuguesa";
    valorPrato = parseFloat(39.90)
}
function fanta() {
    document.getElementById("fanta").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "white";

    bebida = "fanta";
    valorBebida = parseFloat(11.90)
}
function coca() {
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "white";

    bebida = "coca";
    valorBebida = 13
}
function guarana() {
    document.getElementById("guarana").style.borderColor = "green";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("coca").style.borderColor = "white";

    bebida = "guarana";
    valorBebida = parseFloat(10.90)
}
function prest(){
    document.getElementById("prestigio").style.borderColor = "green";
    document.getElementById("kitkat").style.borderColor = "white";

    sobremesa = "prestigio"
    valorSobremesa = parseFloat(3.50)
}
function kitkat(){
    document.getElementById("prestigio").style.borderColor = "white";
    document.getElementById("kitkat").style.borderColor = "green";

    sobremesa = "kitkat"
    valorSobremesa = parseFloat(4.50)
}

function pedido(){
    let pedido;
    if(prato == true && sobremesa == false && bebida == false ){
        pedido = valorPrato
    }else if(prato == false && sobremesa == false && bebida == true){
        pedido = valorBebida
    }else if(prato == false && sobremesa == true && bebida == false){
        pedido = valorSobremesa
    }else if(prato == true && sobremesa == false && bebida == true){
        pedido = valorPrato + valorBebida
    }else if(prato == true && sobremesa == true && bebida == false){
        pedido = valorPrato + valorSobremesa
    }else{
        pedido = valorBebida ||+ valorPrato ||+ valorSobremesa
    }
    document.getElementById("valorPedido").innerHTML = String(`R$ ${pedido}0`)
    
}

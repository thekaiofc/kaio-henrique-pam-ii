let n1 = 5;
let n2 = 8;

console.log(n1+n2); //soma
console.log(n1-n2); //subtração
console.log(n1*n2); //multiplicação
console.log(n1/n2); //divisão
console.log(n1**n2);  //esponenciação
console.log(Math.sqrt(n1));  //raiz quadrada
console.warn("Olá funções");

function soma(numero1, numero2){
    return numero1+numero2;
}
console.log(soma(10,10));

function subtração(numero1, numero2){
    return numero1-numero2;
}
console.log(subtração(9,9));

function multiplicação(numero1, numero2){
    return numero1*numero2;
}
console.log(multiplicação(9,9));

function divisão(numero1, numero2){
    return numero1/numero2;
}
console.log(divisão(9,9));

function esponenciação(numero1, numero2){
    return numero1**numero2;
}
console.log(esponenciação(9,9));

function raiz(numero1){
    return Math.sqrt(numero1);
}
console.log(raiz(9,9));

const divisao = (v1, v2) => {
    let msg = "";
    if (v1 > v2) {
        let resultado = v1 / v2;
        msg = resultado;
        return msg;
    }
    msg = "Insira um valor menor para v2";
    return msg;
}
console.log(divisao(10, 2));
console.log(divisao(2, 10));

// --------------------------

const divisaoII = (v1,v2) => {
    if (v1 > v2) {
        let resultado = v1 / v2;
        return resultado;
    }
    return "insira um valor menor para v2";
}
console.log(divisaoII(50, 2));
console.log(divisao(2, 10));

// --------------------------

const somar = (v1, v2) => {
    let resultado = v1 + v2;
    console.log(resultado);
}
somar(10,5);

const subtrair = (v1, v2) => {
    let resultado = v1 - v2;
    console.log(resultado);
}
subtrair(10,4);

const multiplicar = (v1, v2) => {
    let resultado = v1 * v2;
    console.log(resultado);
}
multiplicar(5,4);
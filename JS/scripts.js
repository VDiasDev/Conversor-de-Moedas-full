const escolhaSuaOpcao = document.querySelector("#moedas")
const escolhaODestino = document.querySelector("#moedas2")
const display = document.querySelector("#valor")
const converter = document.querySelector("#botao1")
const espacoFinal = document.querySelector("#result")


let opcaoEscolhida = ""
let opcaoDestino = ""
let escolhidoBrl = 0;
let DestinadoBrl = 0;
let valorEscrito1 = 0;
let resultadoFinal = 0;

let valorDaEscolhida = 0;
let valorDaDestinada = 0;

const brl = 1;
const usd = 0.204;
const eur = 0.186;
const jpy = 30.566;
const gbp = 0.16;
const cad = 0.28;
const chf = 0.18;
const aud = 0.31;
const cny = 1.45;
const inr = 16.99;

function valorDaOpção(){
    
    if(opcaoEscolhida === document.querySelector("#moedas").value){
        return
    }

    opcaoEscolhida = document.querySelector("#moedas").value;
    verificarValorEscolhido()
}

function verificarValorEscolhido() {
    switch(opcaoEscolhida) {
        case "none":
            valorDaEscolhida = 0;
            break;
        case "brl":
            valorDaEscolhida = brl;
            break;
        case "usd":
            valorDaEscolhida = usd;
            break;
        case "eur":
            valorDaEscolhida = eur;
            break;
        case "jpy":
            valorDaEscolhida = jpy;
            break; 
        case "gbp":
            valorDaEscolhida = gbp;
            break;
        case "cad":
            valorDaEscolhida = cad;
            break;
        case "chf":
            valorDaEscolhida = chf;
            break;
        case "aud":
            valorDaEscolhida = aud;
            break;
        case "cny":
            valorDaEscolhida = cny;
            break;
        case "inr":
            valorDaEscolhida = inr;
            break;
            default:       
    }
    console.log(valorDaEscolhida)
}

function definirValor() {
    if(opcaoDestino === document.querySelector("#moedas2").value){
        return
    }

    opcaoDestino = document.querySelector("#moedas2").value;

    verificarValorDestino()
}

function verificarValorDestino() {
    if (opcaoEscolhida == "none"){ return }

    switch(opcaoDestino){
        case "none":
        valorDaDestinada = 0;
        break;
        case "brl":
        valorDaDestinada = brl;
        break;
        case "usd":
        valorDaDestinada = usd;
        break;
        case "eur":
        valorDaDestinada = eur;
        break;
        case "jpy":
        valorDaDestinada = jpy;
        break;
        case "gbp":
        valorDaDestinada = gbp;
        break;
        case "cad":
        valorDaDestinada = cad;
        break;
        case "chf":
        valorDaDestinada = chf;
        break;
        case "aud":
        valorDaDestinada = aud;
        break;
        case "cny":
        valorDaDestinada = cny;
        break;
        case "inr":
        valorDaDestinada = inr;
        break;
        default:
    }
    console.log(valorDaDestinada)
}

function registrarGuardado(e){
    let valorEscrito = e.target.value;
    valorEscrito1 = Number(valorEscrito)
}

function regraDeTres(){
    if (valorEscrito1 == 0 || valorDaEscolhida == 0 || valorDaDestinada == 0){
        espacoFinal.value = 0;
        return}
    escolhidoBrl = (valorEscrito1*brl) / valorDaEscolhida
    console.log(escolhidoBrl)
    DestinadoBrl = (valorEscrito1*brl) / valorDaDestinada
    console.log(DestinadoBrl)
    mostrarResultado()
}

function mostrarResultado(){
    let resultadoFinal = escolhidoBrl*valorEscrito1 / DestinadoBrl
    
    espacoFinal.value = resultadoFinal

}



escolhaSuaOpcao.addEventListener("click", valorDaOpção)
escolhaODestino.addEventListener("click", definirValor)
display.addEventListener("input", registrarGuardado)
converter.addEventListener("click", regraDeTres)

//deifinção de variáveis
const horas = document.getElementById("hora");
const minutos = document.getElementById("minuto");
const segundos = document.getElementById("segundo");

const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");

//função que faz o resgate do horário atual do sistema
const relogio = setInterval(function clock(){

    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();

    if(hr < 10) hr = "0" + hr;
    if(min < 10) min = "0" + min;
    if(seg < 10) seg = "0" + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})

//função que retorna a data atual do sistema
const data = setInterval(function calendario(){
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let a = date.getFullYear();

    if(d < 10) d = "0" + d;
    if(m < 10) m = "0" + m;

    dia.textContent = d;
    mes.textContent = m;
    ano.textContent = a;
} )


let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")


function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let totalCarne = carnePH(duracao) * adultos + (carnePH(duracao) / 2 * criancas);
    let totalCerveja = cervejaPH(duracao) * adultos;
    let totalBebidas = bebidasPH(duracao) * adultos + (bebidasPH(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${totalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalBebidas/2000)} Garrafas de Bebidas de 2L</p>`
}

function carnePH(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPH(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPH(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
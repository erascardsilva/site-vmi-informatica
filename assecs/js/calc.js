// Funçoes de calculo porcentagem, juros parcelas e taxas de venda!!!!


function vvenda() {
    let mensagem = document.getElementById("resultado");
    let valor1 = document.querySelector("#vproduto");
    let valor2 = parseFloat(valor1.value);
    let lucrofrete = (valor2 * 0.3) + 20.0;
    let impostos = valor2 + (valor2 * 0.06);
    let valorfinal = lucrofrete + impostos;
    const menresultado = valorfinal;

    mensagem.textContent = `O produto sendo comprado a R$: ${valor2} ` +
        `somando  ao produto frete e impostos o valor cobrado deverá ser  de R$ : ${valorfinal} `;

}

function vporc() {
    let mensagem = document.getElementById("resultado");
    let porcent = document.querySelector("#vporc");
    let vporcento = document.querySelector("#qporc");
    let part = parseFloat(vporcento.value);
    let valorp = parseFloat(porcent.value);
    let px = part / 100;
    let porccalc = valorp * px;
    let porsoma = valorp + porccalc;
    let porsubi = valorp - porccalc;

    mensagem.textContent = `${part}% de  ${valorp} é = ${porccalc} ` +
        `| ${valorp} + ${part}% é = ${porsoma}` +
        `| ${valorp} - ${part}% é = ${porsubi} `;
}

function parcela() {
    let mensagem = document.getElementById("resultado");
    let valor5 = document.querySelector("#valorparc");
    let numero = document.querySelector("#nparce");
    let valorparcela = parseFloat(valor5.value);
    let nparcela = parseInt(numero.value);
    let parcela;
    let resul;
    let valorcobrar;

    if (nparcela == 1) {
        parcela = 4.59 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    } else if (nparcela == 2) {
        parcela = 7.64 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    } else if (nparcela == 3) {
        parcela = 9.23 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    } else if (nparcela == 4) {
        parcela = 10.86 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);

    } else if (nparcela == 5) {
        parcela = 12.31 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    } else if (nparcela == 6) {
        parcela = 13.65 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    } else if (nparcela == 7) {
        parcela = 14.72 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    } else if (nparcela == 8) {
        parcela = 16.23 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    } else if (nparcela == 9) {
        parcela = 17.69 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    } else if (nparcela == 10) {
        parcela = 18.65 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    } else {
        alert("Digite uma parcela de 1 a 10 vezes");
    }
    let perca = valorparcela - resul;

    mensagem.textContent = `Valor da venda  R$ = ${valorparcela}  ` +
        `\n | Parcelado em ${nparcela} x  ` +
        `\n | O valor que será creditado R$ = ${resul.toFixed(2)}` +
        `\n | Lucro operadora de cartão R$ =  ${perca.toFixed(2)}` +
        `\n | Deve cobrar o valor de R$ : ${valorcobrar.toFixed(2)}`;
}



function apagaForm() {
    document.getElementById('vproduto').value = '';
    document.getElementById('valorparc').value = '';
    document.getElementById('nparce').value = '';
    document.getElementById('vporc').value = '';
    document.getElementById('qporc').value = '';

}
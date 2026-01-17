// Erasmo Cardoso - Dev
// Lógica da Calculadora Modernizada

function vvenda() {
    const mensagem = document.getElementById("resultado");
    const valor1 = document.querySelector("#vproduto");
    const valor2 = parseFloat(valor1.value);

    if (isNaN(valor2)) {
        mensagem.innerHTML = "<span style='color: var(--accent-color)'>Por favor, digite um valor válido.</span>";
        return;
    }

    // Lucro e Frete (R$ 20.00 fixo + 30%)
    const lucrofrete = (valor2 * 0.3) + 20.0;
    // Impostos (6%)
    const impostos = valor2 + (valor2 * 0.06);
    // Valor Final
    const valorfinal = lucrofrete + impostos;

    mensagem.innerHTML = `
        <p><strong>Custo:</strong> R$ ${valor2.toFixed(2)}</p>
        <p><strong>Valor Cobrado (Final):</strong> <span style="color: var(--primary-color); font-size: 1.2rem;">R$ ${valorfinal.toFixed(2)}</span></p>
        <small style="color: var(--text-muted)">Inclui 30% margem + R$20 frete + 6% imposto sobre base.</small>
    `;
}

function vporc() {
    const mensagem = document.getElementById("resultado");
    const porcentInput = document.querySelector("#vporc"); // Valor Base
    const vporcentInput = document.querySelector("#qporc"); // Porcentagem

    const valorp = parseFloat(porcentInput.value); // Base
    const part = parseFloat(vporcentInput.value); // %

    if (isNaN(valorp) || isNaN(part)) {
        mensagem.innerHTML = "<span style='color: var(--accent-color)'>Preencha ambos os campos.</span>";
        return;
    }

    const valorDaPorcentagem = valorp * (part / 100);
    const soma = valorp + valorDaPorcentagem;
    const subtracao = valorp - valorDaPorcentagem;

    mensagem.innerHTML = `
        <p><strong>${part}% de ${valorp}:</strong> ${valorDaPorcentagem.toFixed(2)}</p>
        <p><strong>Soma (${valorp} + ${part}%):</strong> ${soma.toFixed(2)}</p>
        <p><strong>Subtração (${valorp} - ${part}%):</strong> ${subtracao.toFixed(2)}</p>
    `;
}

function parcela() {
    const mensagem = document.getElementById("resultado");
    const valorInput = document.querySelector("#valorparc");
    const numeroInput = document.querySelector("#nparce");

    const valorparcela = parseFloat(valorInput.value);
    const nparcela = parseInt(numeroInput.value);

    if (isNaN(valorparcela) || isNaN(nparcela)) {
        mensagem.innerHTML = "<span style='color: var(--accent-color)'>Dados inválidos.</span>";
        return;
    }

    let taxa = 0;

    // Taxas hardcoded do sistema legado
    const taxas = {
        1: 4.59, 2: 7.64, 3: 9.23, 4: 10.86, 5: 12.31,
        6: 13.65, 7: 14.72, 8: 16.23, 9: 17.69, 10: 18.65
    };

    if (taxas[nparcela]) {
        taxa = taxas[nparcela] / 100;

        const valorCreditado = valorparcela - (valorparcela * taxa);
        // Descontar a taxa inversa para que o valor final cubra a taxa
        const valorCobrar = valorparcela / (1 - taxa);
        const custoOperadora = valorparcela - valorCreditado;

        mensagem.innerHTML = `
            <p><strong>Venda:</strong> R$ ${valorparcela.toFixed(2)} em ${nparcela}x</p>
            <p><strong>Valor a Creditar (Líquido):</strong> R$ ${valorCreditado.toFixed(2)}</p>
            <p><strong>Custo Operadora:</strong> R$ ${custoOperadora.toFixed(2)}</p>
            <hr style="border-color: var(--glass-border); margin: 10px 0;">
            <p><strong>Para receber R$ ${valorparcela.toFixed(2)}, cobre:</strong> <br>
            <span style="color: var(--secondary-color); font-size: 1.5rem;">R$ ${valorCobrar.toFixed(2)}</span></p>
        `;

    } else {
        mensagem.innerHTML = "<span style='color: var(--accent-color)'>Digite parcelas de 1 a 10.</span>";
    }
}

function apagaForm() {
    document.getElementById('vproduto').value = '';
    document.getElementById('valorparc').value = '';
    document.getElementById('nparce').value = '';
    document.getElementById('vporc').value = '';
    document.getElementById('qporc').value = '';
    // Não limpamos o resultado imediatamente para o usuário ver
}

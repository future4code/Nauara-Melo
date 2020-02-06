const despesas = []

class Despesa {
    constructor (valor, tipo, descricao) {
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}

function cadastrarDespesa() {
    const valorInput = document.getElementById("valor")
    const tipoInput = document.getElementById("tipo")
    const descricaoInput = document.getElementById("descricao")

    if (valorInput.value === "" || tipoInput.value === "" || descricaoInput.value === "") {
        alert ("Favor, preencher todos os campos.")
    } else {
        const despesa = new Despesa(valorInput.value, tipoInput.value, descricaoInput.value)

        despesas.push(despesa)

        limparCampos(valorInput, tipoInput, descricaoInput)
        exibirExtratoTotal()
    }
         
}

function limparCampos(valorInput, tipoInput, descricaoInput) {
    valorInput.value = ''
    tipoInput.value = ''
    descricaoInput.value = ''
}

function filtrarDespesa() {
    const valorMinimoInput = document.getElementById("valorMinimo")
    const valorMaximoInput = document.getElementById("valorMaximo")
    const tipoDespesaExtratoInput = document.getElementById("tipoDespesaExtrato")

    if (valorMinimoInput.value === '' || valorMaximoInput.value === '' || tipoDespesaExtratoInput.value === '') {
        alert ("Favor, preencher todos os campos.")
    } else {
        const despesasFiltradas = buscarDespesas(valorMaximoInput.value, valorMinimoInput.value, tipoDespesaExtratoInput.value)
        console.log(despesasFiltradas)
        exibirDespesas(despesasFiltradas)
    }
}

function exibirDespesas(despesasFiltradas) {
    const despesasDetalhadasElemento = document.getElementById('despesasDetalhadas')

    const listaDespesas = despesasDetalhadasElemento.querySelector('ul')
    
    listaDespesas.innerHTML = ''

    for (let despesa of despesasFiltradas) {
        listaDespesas.innerHTML += '<li>' + 'Valor: ' + despesa.valor + ' | Tipo: '+ despesa.tipo + ' | Descrição: ' + despesa.descricao + '</li>'
    }
}

function buscarDespesas(valorMaximo, valorMinimo, tipo) {
    return despesas.filter((despesa) => {
        return valorMaximo >= despesa.valor && valorMinimo <= despesa.valor && despesa.tipo === tipo
    })
}

function somarValorTotal() {
    let somaTotal = 0

    for (let despesa of despesas) {
        somaTotal += Number(despesa.valor)
    }

    return somaTotal
}

function exibirExtratoTotal() {
    const valorTotalElemento = document.getElementById('valorTotal')

    valorTotalElemento.innerHTML = somarValorTotal()
}

function limparFiltros() {
    const valorMinimoInput = document.getElementById("valorMinimo")
    const valorMaximoInput = document.getElementById("valorMaximo")
    const tipoDespesaExtratoInput = document.getElementById("tipoDespesaExtrato")

    valorMaximoInput.value = ''
    tipoDespesaExtratoInput.value = ''
    valorMinimoInput.value = ''
}
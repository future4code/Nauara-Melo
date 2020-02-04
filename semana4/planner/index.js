function criarTarefa() {
    const diaSelecionado = document.getElementById("selecionaDia").value
    const inputNomeTarefa = document.getElementById("nova_tarefa")

    if (inputNomeTarefa.value === "") {
        alert("Insira uma nova tarefa.")

    } else {
        const divDiadaSemana = document.getElementById(diaSelecionado)
    
        const listaTarefas = divDiadaSemana.querySelector('ul')
        listaTarefas.innerHTML += "<li>" + inputNomeTarefa.value + "</li>"
    
        inputNomeTarefa.value = ""
    }

}
function adicionarTarefa() {
    const guardaTarefa = document.getElementById("tarefa").value;
    const diaDaSemana = document.getElementById("dias-semana").value;

    switch (diaDaSemana) {
        case "domingo":
            const tarefaDomingo = document.getElementById("domingo");
            tarefaDomingo.innerHTML += `<li>${guardaTarefa}</li>`;
            guardaTarefa.value = "";
            break;

        case "segunda":
            const tarefaSegunda = document.getElementById("segunda");
            tarefaSegunda.innerHTML += `<li>${guardaTarefa}</li>`;
            guardaTarefa.value = "";
            break;

        case "terca":
            const tarefaTerca = document.getElementById("terca");
            tarefaTerca.innerHTML += `<li>${guardaTarefa}</li>`;
            guardaTarefa.value = "";
            break;

        case "quarta":
            const tarefaQuarta = document.getElementById("quarta");
            tarefaQuarta.innerHTML += `<li>${guardaTarefa}</li>`;
            guardaTarefa.value = "";
            break;

        case "quinta":
            const tarefaQuinta = document.getElementById("quinta");
            tarefaQuinta.innerHTML += `<li>${guardaTarefa}</li>`;
            guardaTarefa.value = "";
            break;

        case "sexta":
            const tarefaSexta = document.getElementById("sexta");
            tarefaSexta.innerHTML += `<li>${guardaTarefa}</li>`;
            guardaTarefa.value = "";
            break;

        case "sabado":
            const tarefaSabado = document.getElementById("sabado");
            tarefaSabado.innerHTML += `<li>${guardaTarefa}</li>`;
            guardaTarefa.value = "";
            break;
    }
}
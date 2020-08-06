let listaDeDespesas = [];

function cadastrarDespesa() {
    const valorDespesa = document.getElementById("valor");
    const tipoDespesa = document.getElementById("tipo-despesa");
    const descricaoDespesa = document.getElementById("descricao");
    const containerDespesa = document.getElementById("cadastro-despesas");
    
    const despesa = {
        valor: valorDespesa.value,
        tipo: tipoDespesa.value,
        descricao: descricaoDespesa.value
    }
    
    containerDespesa.innerHTML += `<p>${despesa.valor} ${despesa.tipo} ${despesa.descricao}</p>`;
    listaDeDespesas.push(despesa);
    valorDespesa.value = "";
    descricaoDespesa.value = "";
}

console.log(listaDeDespesas)

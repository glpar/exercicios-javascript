/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

const output = document.querySelector('#output')
const show = (message) => {
    output.textContent += `${message}\n`
}

const valor = {
    receitas: [20, 30, 40 , 110],
    despesas: [32, 45, 55, 60]
}

function contas(teste) {
    let receitaTotal = 0;
    let despesaTotal = 0;

    for(i=0; i < teste.receitas.length; i++){
        receitaTotal+= teste.receitas[i];
    }
    show(`Receitas: R$ ${receitaTotal.toFixed(2)}`)

    for(i=0; i < teste.despesas.length; i++){
        despesaTotal+= teste.despesas[i];
    }

    show(`Despesas: R$ ${despesaTotal.toFixed(2)}`)

    valorFinal = receitaTotal - despesaTotal;

    if(valorFinal > 0) {
        show("O saldo da família é positivo: R$ " + valorFinal.toFixed(2))
    }

    
    else if(valorFinal == 0) {
        show("O saldo da família é neutro: R$ " + valorFinal.toFixed(2))
    }

    
    else if(valorFinal < 0) {
        show("O saldo da família é negativo: R$ " + valorFinal.toFixed(2))
    }
}

contas(valor)

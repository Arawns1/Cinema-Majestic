function escolhaAssento() {

    const assentos = document.getElementsByClassName("assento")

    /* adiciona addEventListerner em cada assento */
    for(i = 0; i < assentos.length; i++) {
        assentos[i].addEventListener("click", assentoEscolhido)
    }

}

function assentoEscolhido() {

    /* se o assento não foi escolhido e ainda não atingiu o limite */
    if(this.classList.contains("assentoEscolhido") == false && escolhidoLista.length < qntdAssentosMax) {
        this.classList.add("assentoEscolhido")
        escolhidoLista.push(this.innerHTML)
    
    /* se o assento foi escolhido e ainda não atingiu o limite ou atingiu */
    } else if (this.classList.contains("assentoEscolhido") == true && (escolhidoLista.length < qntdAssentosMax || escolhidoLista.length == qntdAssentosMax)) {
        this.classList.remove("assentoEscolhido")
            for(i = 0; i < escolhidoLista.length; i++) {
                if(escolhidoLista[i] == this.innerHTML) {
                    escolhidoLista.splice(i, 1)
                }
            } 
    }
} 

/* escreve os assentos dentro da div sala */
function escreveTela() {

    var colunas = ['K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
    var totalAssentos = 10
    var assentos = document.getElementsByClassName("assentos")[0]

    for (i = 0; i < colunas.length; i++) {
        for (j = 0 ; j < totalAssentos; j++) {
            assentos.innerHTML += `<div class="assento">${colunas[i]}${j+1}</div>`
        }
    }
}

/* quantidade máxima de assentos que podem ser escolhidos  */
var qntdAssentosMax = 8

/* salva o nome dos assentos escolhidos */
var escolhidoLista = []

document.addEventListener("DOMContentLoaded", escreveTela)
document.addEventListener("DOMContentLoaded", escolhaAssento)
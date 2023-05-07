var linkPaginaConclusao = "../conclusao/index.html"


/* Pegando Informações do Session Storage */
var objFilmeEscolhido = JSON.parse(sessionStorage.getItem("filmeEscolhido"))
var objAssentoEscolhido = JSON.parse(sessionStorage.getItem("assentos"))
var objIngressos = JSON.parse(sessionStorage.getItem("Ingressos"))
var objProdutos = JSON.parse(sessionStorage.getItem("produtos"))
/* Insere informações do filme no resumo */
console.log("ss")
document.querySelector(".resumo").innerHTML = `

<div class="resumoFilme">
    <img src=${objFilmeEscolhido.posterURL} alt="poster filme" class="imagemFilme">
    <div class="infoFilme">
        <div class="nomeFilme">${objFilmeEscolhido.movieTitle}</div>
        <div class="tipoFilme">
            <div class="audioFilme">Dublado</div>
            <div class="telaFilme">2D</div>
        </div>
        <div class="sessaoFilme">📅 03/05/2023 - 18:30</div>
        <div class="localFilme">📍 Petrópolis - RJ</div>
    </div>
</div>
<div class="resumoCompra">
    <h3 class="tituloResumo">Resumo</h3>
    <div class="aquisicoes">
        <div id="assentosEscolhidos">
            <h4>Assentos escolhidos: </h4>
            <div id="assentos">
                ${addAssentos()}
            </div>
        </div>
        <div class="ingressos">
            ${mostrarIngressos()}
        </div>
        <h4 class="tituloResumo">Snacks</h4>
        <div id="extrato">
            ${mostrarProdutos()}
        </div>
        <div id="totalValor">
            <span> Total </span>
            <span id="total"> ${atualizaSaldo()} </span>
        </div>
    </div>
</div>
`

function addAssentos() {
    let assentos = ``
    objAssentoEscolhido.forEach(assento => {
        assentos += `<span> ${assento}</span>`
    });
    return assentos
}

var valorTotalFinal = 0;
function mostrarIngressos() {
    let ingressos = ``
    let subTotal = 0
    objIngressos.forEach(ingresso => {
        ingressos += `<span> ${ingresso[1] + "x " + ingresso[0].toUpperCase()}</span>`
        subTotal += parseInt(ingresso[1]) * parseInt(ingresso[2]);
        ingressos += `<span> ${"R$ " + subTotal.toFixed(2)} </span> `
    })
    valorTotalFinal = subTotal
    return ingressos
}

function atualizaSaldo() {
    return "R$" + valorTotalFinal.toFixed(2)
}
function mostrarProdutos() {
    let produtos = ``
    objProdutos.forEach(produto => {
        produtos += `<div class=productRow>
                    <span>${produto[2] + "x " + produto[0]}</span>
                    <span> R$ ${(produto[1] * produto[2]).toFixed(2)}</span>
                    </div>`
        valorTotalFinal += produto[1] * produto[2]
    })
    return produtos
}


document.querySelector(".avancarAssentos").addEventListener("click", e => {
    e.preventDefault()
    let cardOwner = document.querySelector(".cardOwner").value;
    let cardCPF = window.btoa(document.querySelector(".cpfNumber").value)
    let cardNumber = window.btoa(document.querySelector("#cardNumber").value)
    let cardMonth = document.querySelector("#mes").value
    let cardYear = document.querySelector("#ano").value
    let cardCVV = window.btoa(document.querySelector("#cvv-input").value)
    let infoPagamentos = [cardOwner, cardCPF, cardNumber, cardMonth, cardYear, cardCVV]
    sessionStorage.setItem("Pagamento", JSON.stringify(infoPagamentos))
    window.location.href = linkPaginaConclusao
});
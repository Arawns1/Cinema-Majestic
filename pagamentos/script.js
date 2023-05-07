var linkPaginaConclusao = "../conclusao/index.html"


/* Pegando Informações do Session Storage */
var objFilmeEscolhido = JSON.parse(sessionStorage.getItem("filmeEscolhido"))
var objAssentoEscolhido = JSON.parse(sessionStorage.getItem("assentos"))
var objIngressos = JSON.parse(sessionStorage.getItem("Ingressos"))
var objProdutos = JSON.parse(sessionStorage.getItem("produtos"))
var usuarioLogadoSession = JSON.parse(sessionStorage.getItem("user"))
var usuarioLogadoStorage = JSON.parse(localStorage.getItem(usuarioLogadoSession.email))
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
    var valorTotal = 0;
    let ingressos = ``
    objIngressos.forEach(ingresso => {
        ingressos += `<div class="ingressoRow">
      <span> ${ingresso[1] + "x " + ingresso[0].toUpperCase()}</span>
      <span> ${"R$ " + (ingresso[2]).toFixed(2)} </span>
      </div>`
        valorTotal += parseInt(ingresso[1]) * parseInt(ingresso[2]);
    })
    valorTotalFinal = valorTotal
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
    atualizarHistoricoIngressos(usuarioLogadoStorage.meusTickets)
    window.location.href = linkPaginaConclusao
});

function atualizarHistoricoIngressos(meusTicketsHistorico){
    var valorTotalIngresso = JSON.parse(sessionStorage.getItem("Ingressos"))
    var produtos = JSON.parse(sessionStorage.getItem("produtos"))
    var assentos = JSON.parse(sessionStorage.getItem("assentos"))
    var filme = JSON.parse(sessionStorage.getItem("filmeEscolhido"))
    let historicoTickets = []

    if ( meusTicketsHistorico == null || meusTicketsHistorico.length == 0 ){
        historicoTickets = []
    } else {
        historicoTickets = meusTicketsHistorico
    }
    
    var valorFinalIngressos = 0
    var valorFinalProdutos = 0

    valorTotalIngresso.forEach(ingresso => {
        valorFinalIngressos += (parseFloat(ingresso[1]) * parseFloat(ingresso[2]))
    })

    if (produtos != null || produtos.length == 0) {
        for (var i = 0; i < produtos.length; i++) {
            valorFinalProdutos += parseFloat(produtos[i][2]) + parseFloat(produtos[i][1])
        }
    }

    historicoTickets.push({
        img: filme.posterURL,
        film: filme.movieTitle,
        date: "03/05/2023 - 18:30",
        adress: "Petrópolis - RJ",
        orderNumber: historicoTickets.length+1,
        card: "G5 Bank",
        totalValue: valorFinalIngressos
    })

    var userUpdated = {
        email: usuarioLogadoStorage.email,
        nome: usuarioLogadoStorage.nome,
        senha: usuarioLogadoStorage.senha,
        sobrenome: usuarioLogadoStorage.sobrenome,
        meusTickets: historicoTickets
    }

    localStorage.setItem(usuarioLogadoSession.email, JSON.stringify(userUpdated))
}


/* Pegando Informações do Session Storage */

var objFilmeEscolhido = JSON.parse(sessionStorage.getItem("filmeEscolhido"))
var objAssentoEscolhido = JSON.parse(sessionStorage.getItem("assentos"))
/* Insere informações do filme no resumo */

document.querySelector(".resumo").innerHTML = `
    <div class="resumoFilme">
    <img src=${objFilmeEscolhido.posterURL}
        alt="poster filme" class="imagemFilme">

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
        <p>Assentos escolhidos</p>
        ${addAssentos()}
        </div>
    </div>

    <div id="totalValor">Total R$ 00.00</div>
`

function addAssentos() {
    let assentos = ``
    objAssentoEscolhido.forEach(assento => {
        assentos += `<span> ${assento}</span>`
    });
    return assentos
}


/*------------ SELECTS -------------------- */
var selects = document.querySelectorAll(".selecao select")

selects.forEach(select => {
    select.innerHTML += addOptions();
    select.addEventListener("change", e => {
        e.preventDefault()
        // atualizaSelect(select.value, select.id)
    })
})


function addOptions() {
    let options = `<option value="0"> 0</option>`
    objAssentoEscolhido.forEach((assento, index) => {
        options += `<option value="${index + 1}"> ${index + 1}</option>`
    });
    return options
}

var qntdMaxIngressos = objAssentoEscolhido.length;
var qtdInteira = 0
var qtdMeia = 0
var qtdHermetius = 0
var qtdG5bank = 0

document.querySelector("#ingresso-inteira").addEventListener("change", e => {
    e.preventDefault();
    qtdInteira = e.target.value
})
document.querySelector("#ingresso-meia").addEventListener("change", e => {
    e.preventDefault();
    qtdMeia = e.target.value
})
document.querySelector("#ingresso-inteiro-hermetius").addEventListener("change", e => {
    e.preventDefault();
    qtdHermetius = e.target.value
})
document.querySelector("#ingresso-inteiro-g5").addEventListener("change", e => {
    e.preventDefault();
    qtdG5bank = e.target.value

})

var button = document.querySelector(".avancarAssentos").addEventListener("click", e => {
    e.preventDefault()
    var total = parseInt(qtdInteira) + parseInt(qtdMeia) + parseInt(qtdHermetius) + parseInt(qtdG5bank)

    let inteira = ["inteira", qtdInteira, 36.0]
    let meia = ["meia", qtdMeia, 18.0]
    let hermetius = ["hermetius", qtdHermetius, 24.0]
    let g5 = ["g5", qtdG5bank, 24.0]

    var ingressos = [inteira, meia, hermetius, g5, total]

    if (total > qntdMaxIngressos) {
        alert("Quantidade de assentos maior que o escolhido!")
    }
    else {
        let ingressosFiltered = ingressos.filter(e => e[1])
        sessionStorage.setItem("Ingressos", JSON.stringify(ingressosFiltered))
    }

    if (sessionStorage.getItem("user") !== null) {
        var nomeFilme = JSON.parse(sessionStorage.getItem("assentos"));

        if (nomeFilme[0] == "Super Mario Bros: O Filme") {
            window.location.href = "../src/snacksMario.html"
        }
        if (nomeFilme[0] == "Guardiões da Galáxia Vol. 3") {
            window.location.href = "../src/snacksGuardioesDaGalaxia.html"
        }

        if (nomeFilme[0] == "Cavaleiros do Zodíaco - Saint Seiya: O Começo") {
            window.location.href = "../src/snacksCavaleirosDoZodiaco.html"
        }
    }
})

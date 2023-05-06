/* Pegando Informações do Local Storage */

var objFilmeEscolhido = JSON.parse(localStorage.getItem("filmeEscolhido"))
console.log(objFilmeEscolhido)
/* Insere informações do filme no resumo */

document.querySelector(".resumoFilme").innerHTML =
    `
    <img src="${objFilmeEscolhido.posterURL}" alt="poster filme" class="imagemFilme">
    <div class="infoFilme">
        <div class="nomeFilme">${objFilmeEscolhido.movieTitle}</div>
        <div class="tipoFilme">
            <div class="audioFilme">Dublado</div>
            <div class="telaFilme">2D</div>
        </div>
        <div class="sessaoFilme">📅 03/05/2023 - 18:30</div>
        <div class="localFilme">📍 Petrópolis - RJ</div>
    </div>
`
function escolhaAssento() {

    const assentos = document.getElementsByClassName("assento")

    /* adiciona addEventListerner em cada assento */
    for (i = 0; i < assentos.length; i++) {
        assentos[i].addEventListener("click", assentoEscolhido)
    }

}

function assentoEscolhido() {

    /* se o assento não foi escolhido e ainda não atingiu o limite */
    if (this.classList.contains("assentoEscolhido") == false && escolhidoLista.length < qntdAssentosMax) {
        this.classList.add("assentoEscolhido")
        escolhidoLista.push(this.innerHTML)

        /* se o assento foi escolhido e ainda não atingiu o limite ou atingiu */
    } else if (this.classList.contains("assentoEscolhido") == true && (escolhidoLista.length < qntdAssentosMax || escolhidoLista.length == qntdAssentosMax)) {
        this.classList.remove("assentoEscolhido")
        for (i = 0; i < escolhidoLista.length; i++) {
            if (escolhidoLista[i] == this.innerHTML) {
                escolhidoLista.splice(i, 1)
            }
        }
    }
}

/* escreve os assentos e os corredores dentro da div sala */
function escreveTela() {

    var corredores = ['K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
    var totalAssentos = 10
    var assentos = document.getElementsByClassName("assentos")[0]
    var corredorDiv = document.getElementsByClassName("corredor")

    for (i = 0; i < corredores.length; i++) {
        for (j = 0; j < totalAssentos; j++) {
            assentos.innerHTML += `<div class="assento">${corredores[i]}${j + 1}</div>`
        }
    }

    for (i = 0; i < corredorDiv.length; i++) {
        corredores.forEach(letra => corredorDiv[i].innerHTML += `<span>${letra}</span>`)
    }
}


/* quantidade máxima de assentos que podem ser escolhidos */
var qntdAssentosMax = 8

/* salva o nome dos assentos escolhidos */
var escolhidoLista = []

document.addEventListener("DOMContentLoaded", escreveTela)
document.addEventListener("DOMContentLoaded", escolhaAssento)


/* salva as informações na session */
document.querySelector(".avancarAssentos").addEventListener("click", e => {
    e.preventDefault()
    var nomeFilme = document.querySelector(".nomeFilme").textContent
    var assentosUsuario = [nomeFilme, escolhidoLista]

    if (sessionStorage.getItem("user") !== null) {
        if (escolhidoLista.length !== 0) {

            sessionStorage.setItem("assentos", JSON.stringify(assentosUsuario))
            var nomeFilme = document.querySelector(".nomeFilme").textContent
            if (nomeFilme == "Super Mario Bros: O Filme") {
                window.location.href = "../ingressos/mario.html"

            }
            if (nomeFilme == "Guardiões da Galáxia Vol. 3") {
                window.location.href = "../ingressos/guardioesGalaxia.html"
            }

            if (nomeFilme == "Cavaleiros do Zodíaco - Saint Seiya: O Começo") {
                window.location.href = "../ingressos/cavaleirosDoZodiaco.html"
            }

        }
    }
    else {
        let myModal = new bootstrap.Modal(document.getElementById('modalNaoLogado'), {});
        console.log(myModal)
        myModal.show();
    }
})

document.querySelector(".btn-primary").addEventListener("click", e => {
    window.location.href = "../login/login.html"
})
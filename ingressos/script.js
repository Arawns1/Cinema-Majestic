
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
        atualizaSelect(select.value, select.id)
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
var qntdEscolhida = 0
var ultimovalor = 0; //1
var selectidultimo = null;
function atualizaSelect(numIngresso, selectidatual) {
    console.log("-----------")

    // //Diminuir
    // if (numIngresso < ultimovalor) {
    //     if (numIngresso == 0) {
    //         qntdEscolhida -= ultimovalor
    //     }
    //     else {
    //         qntdEscolhida -= parseInt(numIngresso)
    //     }
    // }

    if (numIngresso == 0 && ultimovalor == 0) {
        qntdEscolhida = 0
    }

    if (selectidultimo != selectidatual) {
        if (numIngresso < ultimovalor) {
            if (numIngresso == 0) {
                qntdEscolhida -= ultimovalor
            }
            else {
                qntdEscolhida -= parseInt(numIngresso)
            }
        }
        else {
            if (numIngresso == qntdMaxIngressos) {
                qntdEscolhida = numIngresso
            }
            else {
                qntdEscolhida += parseInt(numIngresso)
            }
        }
    }
    else {
        if (numIngresso < ultimovalor) {
            if (numIngresso == 0) {
                qntdEscolhida -= ultimovalor
            }
            else {
                if (ultimovalor == 0) {
                    qntdEscolhida += numIngresso
                }
                else {
                    qntdEscolhida -= parseInt(numIngresso)
                }
            }
        }
        else {
            if (numIngresso == qntdMaxIngressos) {
                qntdEscolhida = numIngresso
            }
            else {
                qntdEscolhida += parseInt(numIngresso)
            }

        }
    }
    selectidultimo = selectidatual;
    console.log("qntdescolhida: " + qntdEscolhida)
    console.log("nume ingressos disponiveis: " + (qntdMaxIngressos - qntdEscolhida))
    console.log("valor atual: " + numIngresso)
    console.log("ultimo valor:" + ultimovalor)
    ultimovalor = numIngresso


}




/*------------ FIM SELECTS -------------------- */


var button = document.querySelector(".avancarAssentos").addEventListener("click", e => {
    e.preventDefault()
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






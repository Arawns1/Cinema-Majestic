const linkPaginaPagamento = "../pagamentos/index.html"
/* Pegando Informações do Session Storage */
var objFilmeEscolhido = JSON.parse(sessionStorage.getItem("filmeEscolhido"))
var objAssentoEscolhido = JSON.parse(sessionStorage.getItem("assentos"))
var objIngressos = JSON.parse(sessionStorage.getItem("Ingressos"))
/* Insere informações do filme no resumo */

document.querySelector(".resumoAllan").innerHTML = `
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
            <div id ="extrato" >
              <div id="pr" class="prhidden">
                <div class="extratoProduto ExtratoPipoca">
                  <span>Pipoca:</span>
                  <span id="pPipoca"></span>
                </div>
                <div class="extratoProduto ExtratoCoca">
                  <span>Coca-Cola:</span>
                  <span id="pCoca"></span>
                </div>
                <div class="extratoProduto ExtratoMentos">
                  <span>Mentos:</span>
                  <span id="pMentos"></span>
                </div>
                <div class="extratoProduto ExtratoTrento">
                  <span>Trento:</span>
                  <span id="pTrento"></span>
                </div>
                <div class="extratoProduto ExtratoAgua">
                  <span>Água: </span>
                  <span id="pAgua"></span>
                </div>
              </div>
          </div>
          <div id="totalValor">
                    <span>
                    Total
                    </span> 
                    <span id="total">
                    ${atualizaSaldo()}
                    </span>
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

var valorTotalFinal;
function mostrarIngressos() {
  var valorTotal = 0;
  let ingressos = ``
  objIngressos.forEach(ingresso => {
    ingressos += `<span> ${ingresso[1] + "x " + ingresso[0].toUpperCase()}</span>`
    ingressos += `<span> ${"R$ " + ingresso[2]} </span> `
    valorTotal += parseInt(ingresso[1]) * parseInt(ingresso[2]);
  })
  valorTotalFinal = valorTotal
  return ingressos
}
function atualizaSaldo() {
  return "R$" + valorTotalFinal.toFixed(2)
}



var produtos = [
  {
    nome: 'Pipoca',
    preco: 5.0,
    imagem: 'pipoca.png'
  },

  {
    nome: 'coca-cola',
    preco: 3.0,
    imagem: 'coca-removebg-preview.png'
  },
  {
    nome: 'mentos',
    preco: 1.0,
    imagem: 'mentos.png'

  },
  {

    nome: 'trento',
    preco: 2.0,
    imagem: 'trento.png'
  },

  {
    nome: 'Agua',
    preco: 1.5,
    imagem: 'agua.png'
  },

]

const divProdutos = document.getElementById("produtos");
produtos.forEach(produto => {

  const quadro = document.createElement("div");
  quadro.classList.add("produto");
  quadro.classList.add(produto.nome + "Card")

  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.nome;

  const nome = document.createElement("p");
  nome.textContent = produto.nome;

  const preco = document.createElement("p");
  preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

  const id = document.createElement("p");

  //para quantidade de produtos======================================
  let inputQuantidade = document.createElement("input");
  inputQuantidade.type = "number";
  inputQuantidade.placeholder = "Qntd."
  inputQuantidade.onchange = () => extrato()
  inputQuantidade.value = "";
  inputQuantidade.id = produto.nome

  const botao = document.createElement("button");

  const contador = document.createElement("span");
  contador.textContent = 0;
  botao.addEventListener("click", () => {
    const quantidade = parseInt(inputQuantidade.value);

  });

  quadro.appendChild(img);
  quadro.appendChild(nome);
  quadro.appendChild(preco);

  quadro.appendChild(inputQuantidade);


  divProdutos.appendChild(quadro);
});

// EXTRATO ============================================================
const produtosStore = []
var quantidadePipoca = 0
var quantidadeCoca = 0
var quantidadeMentos = 0
var quantidadeTrento = 0
var quantidadeAgua = 0


const extrato = () => {
  quantidadePipoca = document.getElementById("Pipoca").value
  console.log(quantidadePipoca)
  let pPipoca = 5 * quantidadePipoca
  if (pPipoca > 0) {
    document.getElementById("pPipoca").innerText = "R$" + pPipoca.toFixed(2)
    document.querySelector(".ExtratoPipoca").classList.remove("ExtratoPipocahidden")
    document.querySelector("#pr").classList.remove("prhidden");


  }
  else {
    document.querySelector(".ExtratoPipoca").classList.add("ExtratoPipocahidden")

  }

  quantidadeCoca = document.getElementById("coca-cola").value
  let pCoca = 3 * quantidadeCoca
  if (pCoca > 0) {
    document.getElementById("pCoca").innerText = "R$ " + pCoca.toFixed(2)
    document.querySelector(".ExtratoCoca").classList.remove("ExtratoCocahidden")
    document.querySelector("#pr").classList.remove("prhidden");
    console.log(document.getElementById("coca-cola").value)
  }
  else {
    document.querySelector(".ExtratoCoca").classList.add("ExtratoCocahidden")
  }

  quantidadeMentos = document.getElementById("mentos").value
  let pMentos = 1 * quantidadeMentos
  if (pMentos > 0) {
    document.getElementById("pMentos").innerText = "R$ " + pMentos.toFixed(2)
    document.querySelector(".ExtratoMentos").classList.remove("ExtratoMentoshidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else {
    document.querySelector(".ExtratoMentos").classList.add("ExtratoMentoshidden")
  }

  quantidadeTrento = document.getElementById("trento").value
  let pTrento = 2 * quantidadeTrento
  if (pTrento > 0) {
    document.getElementById("pTrento").innerText = "R$ " + pTrento.toFixed(2)
    document.querySelector(".ExtratoTrento").classList.remove("ExtratoTrentohidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else {
    document.querySelector(".ExtratoTrento").classList.add("ExtratoTrentohidden")
  }
  quantidadeAgua = document.getElementById("Agua").value
  let pAgua = 1.50 * quantidadeAgua
  if (pAgua > 0) {
    document.getElementById("pAgua").innerText = "R$ " + pAgua.toFixed(2)
    document.querySelector(".ExtratoAgua").classList.remove("ExtratoAguahidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else {
    document.querySelector(".ExtratoAgua").classList.add("ExtratoAguahidden")
  }

  let total = pAgua + pCoca + pMentos + pTrento + pPipoca
  document.getElementById("total").innerText = "R$ " + (total + valorTotalFinal).toFixed(2)
}


document.querySelector(".avancarProdutos").addEventListener("click", e => {
  e.preventDefault();
  produtosStore.push(["Pipoca", 5, quantidadePipoca]);
  produtosStore.push(["coca-cola", 3, quantidadeCoca]);
  produtosStore.push(["mentos", 1, quantidadeMentos]);
  produtosStore.push(["trento", 2, quantidadeTrento]);
  produtosStore.push(["Agua", 1.50, quantidadeAgua]);
  var produtoFiltrado = produtosStore.filter(e => e[2])

  if (sessionStorage.getItem("user") !== null) {
    sessionStorage.setItem("produtos", JSON.stringify(produtoFiltrado))
    window.location.href = linkPaginaPagamento
  }

});


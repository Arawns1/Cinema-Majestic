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
var quantidadePipoca
var quantidadeCoca
var quantidadeMentos
var quantidadeTrento
var quantidadeAgua

const extrato = () => {

  quantidadePipoca = document.getElementById("Pipoca").value
  let pPipoca = 5 * quantidadePipoca
  if (pPipoca > 0) {
    document.getElementById("pPipoca").innerText = pPipoca
    document.querySelector(".ExtratoPipoca").classList.remove("ExtratoPipocahidden")
    document.querySelector("#pr").classList.remove("prhidden");
    
    
  }
  else{
   document.querySelector(".ExtratoPipoca").classList.add("ExtratoPipocahidden")
   
  }

  quantidadeCoca = document.getElementById("coca-cola").value
  let pCoca = 3 * quantidadeCoca
  if (pCoca > 0) {
    document.getElementById("pCoca").innerText = pCoca
    document.querySelector(".ExtratoCoca").classList.remove("ExtratoCocahidden")
    document.querySelector("#pr").classList.remove("prhidden");
    console.log(document.getElementById("coca-cola").value)
  }
  else{
    document.querySelector(".ExtratoCoca").classList.add("ExtratoCocahidden")
  }

  quantidadeMentos = document.getElementById("mentos").value
  let pMentos = 1 *quantidadeMentos
  if (pMentos > 0) {
    document.getElementById("pMentos").innerText = pMentos
    document.querySelector(".ExtratoMentos").classList.remove("ExtratoMentoshidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else{
    document.querySelector(".ExtratoMentos").classList.add("ExtratoMentoshidden")
  }

  quantidadeTrento  = document.getElementById("trento").value
  let pTrento = 2 * quantidadeTrento
  if (pTrento > 0) {
    document.getElementById("pTrento").innerText = pTrento
    document.querySelector(".ExtratoTrento").classList.remove("ExtratoTrentohidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else{
    document.querySelector(".ExtratoTrento").classList.add("ExtratoTrentohidden")
  }
  quantidadeAgua = document.getElementById("Agua").value
  let pAgua = 1.50 *quantidadeAgua
  if (pAgua > 0) {
    document.getElementById("pAgua").innerText = pAgua 
    document.querySelector(".ExtratoAgua").classList.remove("ExtratoAguahidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else{
    document.querySelector(".ExtratoAgua").classList.add("ExtratoAguahidden")
  }

  let total = pAgua + pCoca + pMentos + pTrento + pPipoca
  document.getElementById("total").innerText = total 
}

  
document.querySelector(".avancarProdutos").addEventListener("click" , e  =>{ 
  e.preventDefault();
  produtosStore.push(["Pipoca",5 , quantidadePipoca]);
  produtosStore.push(["coca-cola",3 , quantidadeCoca]);
  produtosStore.push(["mentos",1 , quantidadeMentos]);
  produtosStore.push(["trento",2 , quantidadeTrento]);
  produtosStore.push(["Agua",1.50 , quantidadeAgua]);
  var produtoFiltrado = produtosStore.filter(e => e[2])
  
   if(sessionStorage.getItem("user") !== null){
  sessionStorage.setItem("produtos" ,JSON.stringify(produtoFiltrado))
  window.location.href = "../pagamentos/index.html"
 }

});


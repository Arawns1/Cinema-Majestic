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
  
  {
    nome: 'Pipoca Chocolate',
    preco: 20.00,
    imagem: 'pipoca_chocolate-removebg-preview.png'
  },

  {
    nome: 'Pipoca Caramelho',
    preco: 15.00,
    imagem: 'pipoca_caramelo-removebg-preview.png'
  },

  {
    nome: 'Pipoca com Oreo',
    preco: 25.00,
    imagem: 'pipoca_oreo-removebg-preview.png'
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

const extrato = () => {

  let pPipoca = 5 * document.getElementById("Pipoca").value
  if (pPipoca > 0) {
    document.getElementById("pPipoca").innerText = pPipoca
    document.querySelector(".ExtratoPipoca").classList.remove("ExtratoPipocahidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else{
   document.querySelector(".ExtratoPipoca").classList.add("ExtratoPipocahidden")
   
  }


  let pCoca = 3 * document.getElementById("coca-cola").value
  if (pCoca > 0) {
    document.getElementById("pCoca").innerText = pCoca
    document.querySelector(".ExtratoCoca").classList.remove("ExtratoCocahidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else{
    document.querySelector(".ExtratoCoca").classList.add("ExtratoCocahidden")
  }

  let pMentos = 1 * document.getElementById("mentos").value
  if (pMentos > 0) {
    document.getElementById("pMentos").innerText = pMentos
    document.querySelector(".ExtratoMentos").classList.remove("ExtratoMentoshidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else{
    document.querySelector(".ExtratoMentos").classList.add("ExtratoMentoshidden")
  }


  let pTrento = 2 * document.getElementById("trento").value
  if (pTrento > 0) {
    document.getElementById("pTrento").innerText = pTrento
    document.querySelector(".ExtratoTrento").classList.remove("ExtratoTrentohidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else{
    document.querySelector(".ExtratoTrento").classList.add("ExtratoTrentohidden")
  }

  let pAgua = 1.50 * document.getElementById("Agua").value
  if (pAgua > 0) {
    document.getElementById("pAgua").innerText = pAgua 
    document.querySelector(".ExtratoAgua").classList.remove("ExtratoAguahidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else{
    document.querySelector(".ExtratoAgua").classList.add("ExtratoAguahidden")
  }

  let pePipocaChocolate = 20.0 * document.getElementById("Pipoca Chocolate").value
  if (pePipocaChocolate > 0) {
    document.getElementById("pePipocaChocolate").innerText = pePipocaChocolate 
    document.querySelector(".ExtratoPChocolate").classList.remove("ExtratoPChocolatehidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else{
    document.querySelector(".ExtratoPChocolate").classList.add("ExtratoPChocolatehidden")
  }

  let PipocaCara = 15.0 * document.getElementById("Pipoca Caramelho").value
  if (PipocaCara > 0) {
    document.getElementById("PipocaCara").innerText = PipocaCara 
    document.querySelector(".ExtratoPCaramelo").classList.remove("ExtratoPCaramelohidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }
  else{
    document.querySelector(".ExtratoPCaramelo").classList.add("ExtratoPCaramelohidden")
  }


  let PipocaOreo = 25.0 * document.getElementById("Pipoca com Oreo").value
  if (PipocaOreo > 0) {
    document.getElementById("PipocaOreo").innerText = PipocaOreo 
    document.querySelector(".ExtratoPOreo").classList.remove("ExtratoPOreohidden")
    document.querySelector("#pr").classList.remove("prhidden");
  }

  else{
    document.querySelector(".ExtratoPOreo").classList.add("ExtratoPOreohidden")
  }

  let total = pAgua + pCoca + pMentos + pTrento + pPipoca + pePipocaChocolate + PipocaCara + PipocaOreo
  document.getElementById("total").innerText = total 
}



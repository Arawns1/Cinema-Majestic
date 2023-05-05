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
  inputQuantidade.value = 0
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


//===================================================================================================
var PipocasEspecias = [
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

const divPipocasEspecias = document.getElementById("PipocasEspecias");

PipocasEspecias.forEach(pipoca => {
  const quadro = document.createElement("div");
  quadro.classList.add("PipocasEspecias");

  const img = document.createElement("img");
  img.src = pipoca.imagem;
  img.alt = pipoca.nome;

  const nome = document.createElement("p");
  nome.textContent = pipoca.nome;

  const preco = document.createElement("p");
  preco.textContent = `R$ ${pipoca.preco.toFixed(2)}`;

  const inputQuantidade = document.createElement("input");
  inputQuantidade.type = "number";
  inputQuantidade.value = 0;
  inputQuantidade.id = pipoca.nome;
  inputQuantidade.addEventListener("change", () => {
    extrato();
  });

  quadro.appendChild(img);
  quadro.appendChild(nome);
  quadro.appendChild(preco);
  quadro.appendChild(inputQuantidade);

  divPipocasEspecias.appendChild(quadro);
});



// EXTRATO ============================================================

const extrato = () => {
  let pPipoca = 5 * document.getElementById("Pipoca").value
  document.getElementById("pPipoca").innerText = pPipoca
  
  let pCoca = 3 * document.getElementById("coca-cola").value
  document.getElementById("pCoca").innerText = pCoca
  
  let pMentos = 1 * document.getElementById("mentos").value
  document.getElementById("pMentos").innerText = pMentos
  
  let pTrento = 2 * document.getElementById("trento").value
  document.getElementById("pTrento").innerText = pTrento
  
  let pAgua = 1.50 * document.getElementById("Agua").value
  document.getElementById("pAgua").innerText = pAgua 
  


  let pePipocaChocolate = 20.0 * document.getElementById("Pipoca Chocolate").value
  document.getElementById("pePipocaChocolate").innerText = pePipocaChocolate 

  let PipocaCara = 15.0 * document.getElementById("Pipoca Caramelho").value
  document.getElementById("PipocaCara").innerText = PipocaCara 

  let PipocaOreo = 25.0 * document.getElementById("Pipoca com Oreo").value
  document.getElementById("PipocaOreo").innerText = PipocaOreo 

  let total = pAgua + pCoca + pMentos + pTrento + pPipoca + pePipocaChocolate + PipocaCara + PipocaOreo
  document.getElementById("total").innerText = total 

  
}
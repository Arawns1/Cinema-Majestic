var produtos = [
  {
    nome: 'Pipoca',
    preco: 5.0,
    imagem: 'https://th.bing.com/th/id/OIP.SgKXhNnKVDP_ke3w0uZRdwHaF7?pid=ImgDet&rs=1'
  },

  {
    nome: 'coca-cola',
    preco: 3.0,
    imagem: 'https://th.bing.com/th?id=OP.l1uWJeicMphAHg474C474&w=248&h=248&o=5&pid=21.1'
  },
  {
    nome: 'mentos',
    preco: 1.0,
    imagem: 'https://th.bing.com/th/id/R.8596296c122bde6f2949ce54e9038afe?rik=Za36Xtqyqse4NA&pid=ImgRaw&r=0'

  },
  {
    nome: 'trento',
    preco: 2.0,
    imagem: 'https://www.drogariaminasbrasil.com.br/media/product/801/trento-chocolate-32g-cff.jpg'
  },

  {
    nome: 'Agua',
    preco: 1.5,
    imagem: 'https://th.bing.com/th/id/OIP.9DMrjdrEAlDVczpVIcHFgAHaHa?pid=ImgDet&rs=1'
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

  let total = pAgua + pCoca + pMentos + pTrento + pPipoca
  document.getElementById("total").innerText = total 
}

// document.getElementById("search").addEventListener('input', (e) => {
//   extrato();
// })
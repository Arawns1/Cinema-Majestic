var btnVoltarMenu = document.querySelector("#voltarMenu").addEventListener("click", e => {
  window.location.href = "../home/index.html"
})

/** pegar as informações da sessão e compra */
var gerarIngresso = document.querySelector("#imprimirIngresso").addEventListener("click", e => {
    
    var divProdutos = document.querySelector("#produtos")
    var spanAssentos = document.querySelector("#assentos")
    var valorTotal = 0
    var valorTotalIngresso = document.querySelector("#valorTotal")
    var produtos = JSON.parse(sessionStorage.getItem("produtos"))
    var assentos = JSON.parse(sessionStorage.getItem("assentos"))

    /* pegar informações do filme */


    /* pega os produtos */

    if (produtos != null) {
      divProdutos.innerHTML = ""

      for (i = 0; i < produtos.length; i++) {
        divProdutos.innerHTML += `<span>x${produtos[i][2]} ${produtos[i][0]}</span>`
        valorTotal += parseFloat(produtos[i][2]) + parseFloat(produtos[i][1])
        valorTotalIngresso.innerHTML = `TOTAL R$ ${valorTotal.toFixed(2)}`
      }
    }

    /* pega os assentos */
    spanAssentos.innerHTML = `<span>${assentos}</span>`

    /* imprime */
    window.print()

})


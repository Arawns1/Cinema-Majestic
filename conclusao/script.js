var btnVoltarMenu = document.querySelector("#voltarMenu").addEventListener("click", e => {
  window.location.href = "../home/index.html"
})

var gerarIngresso = document.querySelector("#imprimirIngresso").addEventListener("click", e => {
    window.print()
})
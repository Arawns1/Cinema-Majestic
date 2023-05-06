var btnVoltarMenu = document.querySelector("#voltarMenu").addEventListener("click", e => {
  window.location.href = "../home/index.html"
})

/** pegar as informações da sessão e compra */
var gerarIngresso = document.querySelector("#imprimirIngresso").addEventListener("click", e => {
    
    var divProdutos = document.querySelector("#produtos")
    var spanAssentos = document.querySelector("#assentos")
    var tituloFilme = document.querySelector("#nomeFilme")
    var valorTotal = 0
    var valorTotalIngresso = document.querySelector("#valorTotal")
    var produtos = JSON.parse(sessionStorage.getItem("produtos"))
    var assentos = JSON.parse(sessionStorage.getItem("assentos"))
    var filme = JSON.parse(sessionStorage.getItem("filmeEscolhido"))


    /* pega o nome do filme */

    tituloFilme.innerHTML = `${filme.movieTitle}`

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

document.querySelector("#linkSair").addEventListener("click", e => {
  e.preventDefault();
  sessionStorage.clear();
  window.location.reload();
})

document.querySelector("#novaSenhaBtn").addEventListener("click", e => {
  e.preventDefault();

  var inputSenha = document.querySelector("#inputSenha").value;
  var inputConfirmaSenha = document.querySelector("#inputConfirmaSenha").value;
  var novaSenha = document.querySelector(".novaSenha");


  if (inputSenha != "" && inputSenha == inputConfirmaSenha) {
      const userLogado = JSON.parse(sessionStorage.getItem("user"));
      userLogado.senha = window.btoa(inputSenha);
      localStorage.removeItem(userLogado.email);
      localStorage.setItem(userLogado.email, JSON.stringify(userLogado));
      setFormMessage(novaSenha, "success", "Senha Alterada!");
      setTimeout(function () {
          setFormMessage(novaSenha, "success", "");
      }, 3000);
  } else {
      setFormMessage(novaSenha, "error", "As senhas devem ser iguais");
      setTimeout(function () {
          setFormMessage(novaSenha, "success", "");
      }, 3000);
  }
});

document.querySelector("#linkAlterarSenha").addEventListener('click', e => {
  e.preventDefault();
  var novaSenha = document.querySelector(".novaSenha");
  novaSenha.classList.add("novaSenhaDrop");

});

document.querySelector(".novaSenha").addEventListener('mouseleave', e => {
  e.preventDefault();
  var novaSenha = document.querySelector(".novaSenha");
  var inputSenha = document.querySelector("#inputSenha");
  var inputConfirmaSenha = document.querySelector("#inputConfirmaSenha");
  novaSenha.classList.remove("novaSenhaDrop");
  inputSenha.value = "";
  inputConfirmaSenha.value = "";
});


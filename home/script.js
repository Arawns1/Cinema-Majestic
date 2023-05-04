window.addEventListener('load', () => {
    var spanLogin = document.querySelector("#spanLogin");
    var spanLogado = document.querySelector("#spanLogado");

    if(sessionStorage.getItem("user") !== null){

        const user = JSON.parse(sessionStorage.getItem("user"));
        var arrayNome = user.nome.toUpperCase().split("");
        var arraySobrenome = user.sobrenome.toUpperCase().split("");

        console.log(arrayNome[0]);
        console.log(arraySobrenome[0]);        

        spanLogin.classList.add("spanLoginHidden");
        spanLogado.classList.remove("spanLoginHidden");

        document.querySelector("#userBtn").textContent = arrayNome[0] + arraySobrenome[0];

    }
    else{
        spanLogin.classList.remove("spanLoginHidden");
        spanLogado.classList.add("spanLoginHidden");
    }


    
});

document.querySelector("#linkSair").addEventListener("click" , e => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.href = "./index.html";
})



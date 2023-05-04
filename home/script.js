window.addEventListener('load', () => {
    var spanLogin = document.querySelector("#spanLogin");
    var spanLogado = document.querySelector("#spanLogado");

    if(sessionStorage.getItem("user") !== null){
        spanLogin.classList.add("spanLoginHidden");
        spanLogado.classList.remove("spanLoginHidden");
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


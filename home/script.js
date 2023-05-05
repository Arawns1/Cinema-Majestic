window.addEventListener('load', () => {
    var spanLogin = document.querySelector("#spanLogin");
    var spanLogado = document.querySelector("#spanLogado");

    if(sessionStorage.getItem("user") !== null){
        const user = JSON.parse(sessionStorage.getItem("user"));
        var arrayNome = user.nome.toUpperCase().split("");
        var arraySobrenome = user.sobrenome.toUpperCase().split("");        
        spanLogin.classList.add("spanLoginHidden");
        spanLogado.classList.remove("spanLoginHidden");
        document.querySelector("#userBtn").textContent = arrayNome[0] + arraySobrenome[0];    }
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

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message_success", "form_message_error");
    messageElement.classList.add(`form_message_${type}`);
};


 document.querySelector("#novaSenhaBtn").addEventListener("click" , e => {
     e.preventDefault();    
     
    var inputSenha = document.querySelector("#inputSenha").value;
    var inputConfirmaSenha = document.querySelector("#inputConfirmaSenha").value;
    var novaSenha = document.querySelector(".novaSenha");
    

     if(inputSenha != "" && inputSenha == inputConfirmaSenha){
        const userLogado = JSON.parse(sessionStorage.getItem("user"));
        userLogado.senha = window.btoa(inputSenha);
        localStorage.removeItem(userLogado.email);        
        localStorage.setItem(userLogado.email, JSON.stringify(userLogado));         
         setFormMessage(novaSenha, "success" , "Senha Alterada!");
         setTimeout(function() {
             setFormMessage(novaSenha, "success" , "");
         }, 3000);
        }else{
        setFormMessage(novaSenha, "error" , "As senhas devem ser iguais");         
        setTimeout(function() {
             setFormMessage(novaSenha, "success" , "");
        }, 3000);
    }
});

document.querySelector("#linkAlterarSenha").addEventListener('click' , e =>{
    e.preventDefault();    
    var novaSenha = document.querySelector(".novaSenha");    
    novaSenha.classList.add("novaSenhaDrop");

});

document.querySelector(".novaSenha").addEventListener('mouseleave' , e => {
    e.preventDefault();
    var novaSenha = document.querySelector(".novaSenha");
    var inputSenha = document.querySelector("#inputSenha");
    var inputConfirmaSenha = document.querySelector("#inputConfirmaSenha");    
    novaSenha.classList.remove("novaSenhaDrop");
    inputSenha.value = "";
    inputConfirmaSenha.value = "";
});

document.querySelector("#comprarMarioBtn").addEventListener("click", e => {
    e.preventDefault
    window.location.href = "../assentos/index.html"
})
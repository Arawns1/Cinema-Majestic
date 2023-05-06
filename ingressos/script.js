var button = document.querySelector(".avancarAssentos").addEventListener("click" , e => {
    e.preventDefault()
    if (sessionStorage.getItem("user") !== null) { 
        var nomeFilme = JSON.parse(sessionStorage.getItem("assentos"));     
        
        if (nomeFilme[0] == "Super Mario Bros: O Filme") {
            window.location.href = "../src/snacksMario.html"       
        } 
        if(nomeFilme[0] == "Guardiões da Galáxia Vol. 3"){
            window.location.href = "../src/snacksGuardioesDaGalaxia.html"
        }
        
        if(nomeFilme[0] == "Cavaleiros do Zodíaco - Saint Seiya: O Começo"){
            window.location.href = "../src/snacksCavaleirosDoZodiaco.html"
        }
        
    }
})






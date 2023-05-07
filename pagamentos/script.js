document.querySelector(".avancarAssentos").addEventListener("click" , e => {
    e.preventDefault()
    window.location.href = "../conclusao/index.html"
    
});



window.addEventListener('load', () => {

    var ingressos = JSON.parse(sessionStorage.getItem("Ingressos"))
    var produtos = JSON.parse(sessionStorage.getItem("produtos"))
    var totalValor = 0;

    ingressos.forEach(element => {
        if(element[0] == "inteira"){
            if(element[1] != "0"){
                document.querySelector(".inteira").textContent = `Inteira: ${element[1]} = R$ ${(element[2]*element[1]).toFixed(2)}`
                totalValor += element[1] * element[2]
            }
            
        }
        if(element[0] == "meia"){
            if(element[1] != "0"){
                document.querySelector(".meia").textContent = `Meia: ${element[1]} = R$ ${(element[2]*element[1]).toFixed(2)}`
                totalValor += element[1] * element[2]
            }
            
        }
        if(element[0] == "hermetius"){
            if(element[1] != "0"){
                document.querySelector(".hermetius").textContent = `Hermetius: ${element[1]} = R$ ${(element[2]*element[1]).toFixed(2)}`
                totalValor += element[1] * element[2] 
            }
            
        }
        if(element[0] == "g5"){
            if(element[1] != "0"){
                document.querySelector(".g5").textContent = `G5 Bank: ${element[1]} = R$ ${(element[2]*element[1]).toFixed(2)}`
                totalValor += element[1] * element[2]
            }
           
        }
    });

    produtos.forEach(element => {
        if(element[0] == "Pipoca"){
            if(element[2] != "0"){
                document.querySelector(".pipoca").textContent = `Pipoca: ${element[2]} = R$ ${(element[2]*element[1]).toFixed(2)}`
                totalValor += element[1] * element[2]
            }
            
        }
        if(element[0] == "coca-cola"){
            if(element[2] != "0"){
                document.querySelector(".coca-cola").textContent = `Coca-Cola: ${element[2]} = R$ ${(element[2]*element[1]).toFixed(2)}`
                totalValor += element[1] * element[2]
            }
            
        }
        if(element[0] == "mentos"){
            if(element[2] != "0"){
                document.querySelector(".mentos").textContent = `Mentos: ${element[2]} = R$ ${(element[2]*element[1]).toFixed(2)}`
                totalValor += element[1] * element[2] 
            }
            
        }
        if(element[0] == "trento"){
            if(element[2] != "0"){
                document.querySelector(".trento").textContent = `Trento: ${element[2]} = R$ ${(element[2]*element[1]).toFixed(2)}`
                totalValor += element[1] * element[2]
            }
           
        }
        if(element[0] == "Agua"){
            if(element[2] != "0"){
                document.querySelector(".agua").textContent = `Água: ${element[2]} = R$ ${(element[2]*element[1]).toFixed(2)}`
                totalValor += element[1] * element[2]
            }
           
        }
    });






    document.querySelector("#totalValor").textContent = `Total: R$ ${totalValor.toFixed(2)}`
    
})


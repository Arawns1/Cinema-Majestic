var slideMovies = [
    {
        movieTitle: 'Guardiões da Galáxia: Volume 3',
        rating: 4.5,
        synopsis: "Agora já conhecidos como os Guardiões da Galáxia, os guerreiros viajam ao longo do cosmos e lutam para manter sua nova família unida. Enquanto isso tentam desvendar os mistérios da verdadeira paternidade de Peter Quill (Chris Pratt)",
        trailerURL: 'https://www.youtube.com/embed/ZLKMAtut5AQ',
        posterURL: 'https://th.bing.com/th/id/OIP.iPUFfQpueQXnhlkdltQxZgHaK9?pid=ImgDet&rs=1',
        paginaCompra: '../assentos/guardioesgalaxia.html'
    },
    {
        movieTitle: 'Os Cavaleiros do Zodíaco - Saint Seiya: O Começo',
        rating: 3.0,
        synopsis: " Produzido pela Toei Animation e baseado na sensação internacional do anime, Cavaleiros do Zodíaco traz a saga de Saint Seiya para a tela grande em live-action pela primeira vez. Seiya (Mackenyu)",
        trailerURL: 'https://www.youtube.com/embed/ZLKMAtut5AQ',
        posterURL: 'https://www.cavzodiaco.com.br/images23/live_poster_new_1.jpg',
        paginaCompra: '../assentos/cavaleiroszodiaco.html'
    },
    {
        movieTitle: 'Super Mario Bros.',
        rating: 5,
        synopsis: " Em Super Mario Bros. - O Filme, Mario é um encanador que trabalha junto com seu irmão Luigi. Um dia, Mario e Luigi vão parar no reino dos cogumelos, governado pela Princesa Peach, mas ameaçado pelo rei dos Koopas, Bowser.",
        trailerURL: 'https://www.youtube.com/embed/8apWNNMFDyY',
        posterURL: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/02/super_mario_bros_filme_poster__2b3rnu52-758x1200.jpeg',
        paginaCompra: '../assentos/mario.html'
    }
]
window.addEventListener('load', () => {
    var spanLogin = document.querySelector("#spanLogin");
    var spanLogado = document.querySelector("#spanLogado");

    if (sessionStorage.getItem("user") !== null) {
        const user = JSON.parse(sessionStorage.getItem("user"));
        var arrayNome = user.nome.toUpperCase().split("");
        var arraySobrenome = user.sobrenome.toUpperCase().split("");
        spanLogin.classList.add("spanLoginHidden");
        spanLogado.classList.remove("spanLoginHidden");
        document.querySelector("#userBtn").textContent = arrayNome[0] + arraySobrenome[0];
    }
    else {
        spanLogin.classList.remove("spanLoginHidden");
        spanLogado.classList.add("spanLoginHidden");
    }

    var slide = document.querySelector("#carrousel");
    slide.innerHTML = `
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        ${addFilmes()}
        </div>
        <!-- SLIDE CONTROLLERS-->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Próximo</span>
        </button>
    </div>
    `
    function addFilmes() {
        let moviePattern;
        slideMovies.forEach((movie, i) => {
            if (i == 0) {
                moviePattern += `
                <div class="carousel-item active" data-bs-interval="5000">
                    <iframe class="d-block w-100" 
                    src="${movie.trailerURL}?controls=0&autoplay=1&mute=1&autohide=0&showinfo=0&modestbranding=1&loop=1&rel=1&playlist=${movie.trailerURL.substring(movie.trailerURL.lastIndexOf("/") + 1)}"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div class="movieTitle">
                        <h1>${movie.movieTitle} </h1>
                        <ul class="ratings">
                        ${addRating(movie)}
                        </ul>
                        <p class="sinopse">
                        ${movie.synopsis}
                        </p>
                        <a href="${movie.paginaCompra}">
                        <button tabindex="3">
                        Comprar Ingresso</button>
                        </a>
                    </div>
                </div>`
            }

            else {
                moviePattern += `
                <div class="carousel-item" data-bs-interval="5000">
                    <iframe class="d-block w-100"
                    src="${movie.trailerURL}?controls=0&autoplay=0&mute=1&autohide=0& showinfo=0&modestbranding=1&loop=1&rel=1&playlist=${movie.trailerURL.substring(movie.trailerURL.lastIndexOf("/") + 1)}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                    <div class="movieTitle">
                        <h1>${movie.movieTitle} </h1>
                        <ul class="ratings">
                        ${addRating(movie)}
                        </ul>
                        <p class="sinopse">
                        ${movie.synopsis}
                        </p>
                        <a href="${movie.paginaCompra}">
                        <button tabindex="3">
                        Comprar Ingresso</button>
                        </a>
                    </div>
                </div>`
            }
        })
        return moviePattern
    }

    function addRating(movie) {
        var stars = ``
        //Verifica se é maior que 5
        if (movie.rating >= 5) {
            for (let i = 0; i < 5; i++) {
                stars += `<li><img src="assets/black-star-silhouette.png" alt="estrela_rating"></li>`
            }
            stars += `<li><span id="rate"> ${(movie.rating).toFixed(1)} </span></li>`
            return stars
        }
        //Verifica se a avaliação termina com 0
        if ((movie.rating * 10) % 5 == 0 && (movie.rating * 10) % 2 == 0) {
            for (let i = 0; i < movie.rating; i++) {
                stars += `<li><img src="assets/black-star-silhouette.png" alt="estrela_rating"></li>`
            }
            stars += `<li><span id="rate"> ${(movie.rating).toFixed(1)} </span></li>`
            return stars
        }
        //Verifica de Termina com 5
        if ((movie.rating * 10) % 5 == 0 && (movie.rating * 10) % 2 != 0) {
            for (let i = 1; i <= movie.rating; i++) {
                console.log(i + " - " + movie.rating)
                stars += `<li><img src="assets/black-star-silhouette.png" alt="estrela_rating"></li>`
            }
            stars += `<li><img src="assets/black-star-silhouette.png" style="clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%)" alt="estrela_rating"></li>`
            stars += `<li><span id="rate"> ${(movie.rating).toFixed(1)} </span></li>`
            return stars
        }
    }

    // --------- Adicionando Posters //
    var emCartaz = document.querySelector(".containerPosters")
    emCartaz.innerHTML = addPosters()

    function addPosters() {
        var poster = ``
        slideMovies.forEach(movie => {
            poster += `<a href="${movie.paginaCompra}">
            <div class="poster">
            <div class="label">Estreia</div>
            <img src="${movie.posterURL}" alt="${movie.movieTitle} poster">
            <div class="titlePoster">
            <h2>${movie.movieTitle}</h2>
            </div>
            </div>
            </a>
        
    `
        })
        return poster
    }
});

document.querySelector("#linkSair").addEventListener("click", e => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.reload();
})
/* ------ ADICIONANDO FILMES --------------- */


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message_success", "form_message_error");
    messageElement.classList.add(`form_message_${type}`);
};


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




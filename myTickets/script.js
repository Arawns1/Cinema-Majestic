var usuarioLogadoSession = JSON.parse(sessionStorage.getItem("user"))
var usuarioLogadoStorage = JSON.parse(localStorage.getItem(usuarioLogadoSession.email))

const tickets = usuarioLogadoStorage.meusTickets || []

const main = document.querySelector(".ticketsContainer");
let htmlTickets = "";
tickets.forEach(element => {
    htmlTickets += `
    <div tabindex="3" class="ticket">
        <img src="${element.img}" alt="img filme">

        <div class="ticketInfo1">
            <h2>${element.film}</h2>
            <section>
                <img id="icon" src="./assets/calendar.png" alt="calendarIcon">
                ${element.date}
            </section>

            <section>
                <img id="icon" src="./assets/adress.png" alt="adressIcon">
                ${element.adress}
            </section>
        </div>

        <div class="ticketInfo2">
            <h2>Nº do pedido: ${element.orderNumber}</h2>
            <section>
                <img id="icon" src="./assets/card.png" alt="cardIcon">
                ${element.card}
            </section>

            <section>
                <img id="icon" src="./assets/cifrao.png" alt="total">
                R$${element.totalValue}
            </section>
            
        </div>
    </div>
    `
});
main.innerHTML = htmlTickets;

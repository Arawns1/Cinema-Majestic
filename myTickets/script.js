const tickets = [
    {
        img: "https://www.cafecomfilme.com.br/media/k2/items/cache/873d536679c7dd70570264f8804d062a_XL.jpg?t=20230226_234138",
        film: "Os Cavaleiros do Zodíaco",
        date: "05/05/2023 - 22:00",
        adress: "Petrópolis - RJ",
        orderNumber: "23",
        card: "Cartão G5 Black - Crédito",
        totalValue: "100,00"
    },

    {
        img: "https://www.shoppinganaliafranco.com.br/sites/saf/files/cinema/super-mario-bros__1.jpg",
        film: "Super Mario Bros.",
        date: "07/05/2023 - 18:30",
        adress: "Petrópolis - RJ",
        orderNumber: "222",
        card: "Cartão G5 Black - Crédito",
        totalValue: "200,00"
    },

    {
        img: "https://sm.ign.com/t/ign_br/screenshot/default/guardioes-galaxia-vol-3-4_vqg1.600.jpg",
        film: "Guardiões da Galáxia Vol 3.",
        date: "10/05/2023 - 17:45",
        adress: "Petrópolis - RJ",
        orderNumber: "40",
        card: "Cartão G5 Black - Crédito",
        totalValue: "150,00"
    }
]

const main = document.querySelector(".ticketsContainer");
let htmlTickets = "";
tickets.forEach(element => {
    htmlTickets += `
    <div class="ticket">
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

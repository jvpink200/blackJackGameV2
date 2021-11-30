let startgame = document.getElementById("start-game");
let newCard = document.getElementById("new-card");
let cards = document.getElementById("cards");
let card = [12,8];
let sum = document.getElementById("sum");
let total = card[0] + card[1];
startgame.addEventListener("click", function() {
    cards.innerHTML += card[0];
    cards.innerHTML += " " + card[1];
    sum.innerHTML += card[0] + card[1];
});

newCard.addEventListener("click", function() {
    let addCard = 12;
    sum.innerHTML = total + addCard;
    let pushCard = card.push(addCard);
    cards.innerHTML
    console.log(card[2] + total);
});




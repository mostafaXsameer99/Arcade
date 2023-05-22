var cards = document.querySelectorAll(".card");
var hasFlipped = false;
var firstCard, secondCard;
var waitBoard;
var counter = 0;

function flipCard() {
    if (waitBoard) return; //if matched go on flipping
    if (this == firstCard) return;
    this.classList.add("flip");
    if (!hasFlipped) {
        //first click
        hasFlipped = true;
        firstCard = this;
    } else {
        //second click
        secondCard = this;
        //check if the data-name matching
        if (firstCard.dataset.name == secondCard.dataset.name) {
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
            waiting();
            counter++;
            if (counter == 6) {
                play();
                var loc = location.search;
                loc = loc.split("&");
                var loc2 = loc[0].split("=");
                var player = unescape(loc2[1]);

                localStorage.setItem("name", player);
                let title = document.getElementById("title");
                title.innerHTML = "great jop " + player + " keep going";
                title.style = "text-transform:capitalize";
                let btn = document.getElementById("level1-btn");
                btn.style.visibility = "visible";
            }
        } else {
            //doesn't match
            waitBoard = true; //stop flipping untill back
            setTimeout(function() {
                //to see
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");
                waiting(); //back to flip again
            }, 1000);
        }
    }
}
//to prevent dbl click and click more than 2 imgs
function waiting() {
    hasFlipped = waitBoard = false;
    firstCard = secondCard = null;
}
//to shuffle cards randomly
(function shuffle() {
    cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

function play() {
    var a = new Audio("audio/a.m4a");
    a.play();
}
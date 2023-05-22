var curser = document.querySelector(".curser");
var holes = Array.from(document.querySelectorAll(".hole"));
var showScore = document.querySelector("#score");
var showPrevScore = document.querySelector("#prevScore");
var prevScore = 0
var score = 0;
var play = document.querySelector("#play");
var restart = document.querySelector("#stop")
var start;



play.addEventListener("click", () => {
    start = setInterval(() => {
        play.style.display = "none";
        restart.style.display = "inline-block";
        var rand = Math.floor(Math.random() * holes.length);

        var hole = holes[rand];
        var mole = document.createElement("img")
        mole.setAttribute("src", "../assets/mole1.png");
        mole.classList.add("mole");

        hole.appendChild(mole);
        mole.addEventListener("click", () => {
            score++;
            showScore.textContent = score;
            mole.setAttribute("src", "../assets/mole-whacked1.png")
        });
        setTimeout(() => {
            hole.removeChild(mole);
        }, 1500);
    }, 1600);

});

restart.addEventListener("click", () => {
    clearInterval(start);
    play.style.display = "inline-block";
    restart.style.display = "none";
    if (prevScore < score) {
        prevScore = score;
    }
    showPrevScore.textContent = prevScore;
    score = 0;
    showScore.textContent = score;
})

window.addEventListener('mousemove', e => {
    curser.style.top = e.pageY + 'px'
    curser.style.left = e.pageX + 'px'
});

window.addEventListener('mousedown', () => {
    curser.classList.add('active')
});

window.addEventListener('mouseup', () => {
    curser.classList.remove('active')
});





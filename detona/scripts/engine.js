const state = {
    view: {
        squares:document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeleft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },

    values: {
        timeId: null,
       gameVelocity: 1000
    },
};

function randomSqare() {
state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
});

let randomNumber = Math.floor(Math.random() *9);
let randomSqare = state.view.squares[randomNumber];
randomSqare.classList.add("enemy");
}

function moveEnemy() {
    state.values.timeId = setInterval(randomSqare, state.values.gameVelocity);
} 

function addListennerHitbox() {
state.view.squares.forEach((square) =>{}); 
    
}

function initalize() {
    
moveEnemy();
}

initalize();

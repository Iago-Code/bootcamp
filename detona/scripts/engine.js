const state = {
    view: {
        squares:document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeleft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },

    values: {
        timeId: null,
        countDownTimeid: setInterval (countDown, 1000),
       gameVelocity: 1000,
       hitPosition: 0, 
       result: 0,
       corretTime: 60,
    },
};

function countDown() {
    state.values.corretTime --;
    state.view.timeleft.textContent = state.values.corretTime;  

    if (state.values.curretTime <0) {
        alert("Game Over! O seu resultado foi:" + state.values.values.result);
    }
}

function randomSqare() {
state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
});

let randomNumber = Math.floor(Math.random() *9);
let randomSqare = state.view.squares[randomNumber];
randomSqare.classList.add("enemy");
state.values.hitPosition = randomSqare.id
}

function moveEnemy() {
    state.values.timeId = setInterval(randomSqare, state.values.gameVelocity);
} 

function addListennerHitbox() {
state.view.squares.forEach((square) =>{
    square.addEventListener("mousedown", ()=> {
if (square.id === state.values.hitPosition) {
    state.values.result++
    state.view.score.textContent = state.values.result;
    state.values.hitPosition = null;
}
    });
}); 
    
}

function initalize() {
    
moveEnemy();
addListennerHitbox();
}

initalize();

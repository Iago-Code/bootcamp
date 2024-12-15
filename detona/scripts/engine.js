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
       curretTime: 60,
    },
    actions: {
        timeId: setInterval(randomSqare,1000),
        countDownTimeid: setInterval(countDown, 1000),
    },
};
function countDown() {
    state.values.curretTime--;
    state.view.timeleft.textContent = state.values.curretTime;

     if (state.values.curretTime <0) {
        clearInterval(state.actions.countDownTimeid)
        clearInterval(state.actions.timeId)
        alert("Gamer Over seu resultado foi:" +state.values.result);
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
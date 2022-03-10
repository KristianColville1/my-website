const welcome = document.getElementsByClassName('welcome-msg');
const welcomeMessages = document.getElementsByClassName('msg-text');

let isThePageOpened = false;
let isWelcomeOver = false;
let nextMessage = 0;

let countingBegin = 0;
let myTimer;
let isCountingTime = 0;

window.addEventListener('DOMContentLoaded', (event) => {
    startCounting();
});

function startCounting(){
    myTimer = setInterval(incrementTime, 500);
}

function incrementTime(){
    isCountingTime += 0.5;

    if(isCountingTime >= 2){
        displayWelcome();
        clearInterval(incrementTime);
    }
}

function displayWelcome(){

    
    getNextMessage(next);
}


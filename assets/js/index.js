let isThePageOpened = false;
let countingBegin = 0;
let myTimer;
let isCountingTime = 0;

window.addEventListener('DOMContentLoaded', (event) => {
    startCounting();
});

function startCounting(){
    myTimer = setInterval(incrementTime, 1000);
}

function incrementTime(){
    isCountingTime++;

    if(isCountingTime === 2){
        displayWelcome();
        clearInterval(incrementTime);
    }
}

function displayWelcome(){
    
}

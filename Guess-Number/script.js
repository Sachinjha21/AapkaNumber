let randomNumber = parseInt(Math.random()*100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt'); 
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.loworHi');
const startOver = document.querySelector('.result');
// const x = document.querySelector('.low-hi')

const p = document.createElement('p');

let prevGuess = [];
let numGuess =1;

let playGame = true;

if(playGame){
    
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);

    });
}
// console.log(guess);

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number ');
    } else if(guess<1){
        alert ('Number Should Be Greater Than One');
    } else if(guess>100){
        alert ('Number Should Be Smaller Than One Hundred');
    } else{
        prevGuess.push(guess);
        if(numGuess === 10){
            UpdateGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }
        else{
            UpdateGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("Congratulations You Guessed the Number ");
        endGame();
    } else if(guess < randomNumber){
        console.log("else if")
        displayMessage("Guessed Number is Low but not then your self respect");
    } else if (guess > randomNumber){
        displayMessage(`Guessed Number is high but not then your overconfidence`);
    }
}
function UpdateGuess(guess){

    userInput.value = '';
    guessSlot.innerHTML += `${guess}   `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
    
}
function displayMessage(message){
    console.log("here inside flow");
    lowOrHi.innerHTML = `<h2> ${message} </h2>`
}
function endGame(){
    userInput.value ='';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML=`<button id = "newGame"> START NEW GAME</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();

}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt (Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
    });

}
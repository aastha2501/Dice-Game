//select buttons
let btnNew = document.querySelector('.new-btn');
let btnRoll = document.querySelector('.roll-btn');

//select the image
let dice = document.querySelector('.dice');
dice.classList.add('hidden');

//select both the players
let player0El = document.querySelector('.player0');
let player1El = document.querySelector('.player1');

//select current score of both the players
let currentScore0El = document.querySelector('.currentScore-0');
let currentScore1El = document.querySelector('.currentScore-1');

//select players score
let player0Score = document.querySelector('.player0-score');
let player1Score = document.querySelector('.player1-score');

//select the winner
let Winner = document.querySelector('.winner');
//hide the winner 
Winner.classList.add('hidden');

//active player
let activePlayer = 0;
//array to store total scores

let score = [0, 0];
//current score
let currentScore = 0;

let playing = true;

//audio
var a=new Audio();
a.src="mixkit-arcade-game-opener-222 (1).wav";

//switch player function
const switchPlayer = function () {
    document.querySelector(`.currentScore-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player-active');
    player1El.classList.toggle('player-active');
}
let i = 0;
btnRoll.addEventListener('click',
    function () {
        if (playing) {
            a.pause();
            //1. generate a random number
            let num = Math.trunc(Math.random() * 6) + 1;
            console.log(num);
            //2. display the dice roll
            dice.classList.remove('hidden');
            dice.src = `dice-${num}.png`;

            //3. check the dice roll number 
            // -> if num is not equal to 6 than add num to current score
            //and is the num is 6 than switch player and current score get added to the total score
            // or if total score >=100 than game finish 


            if (num !== 6 && num !== 1) {
                currentScore += num;
                document.querySelector(`.currentScore-${activePlayer}`).textContent = currentScore;

            }

            else {
                //switch to next player
                score[activePlayer] += currentScore;
                document.querySelector(`.player${activePlayer}-score`).textContent = score[activePlayer];
                if (score[activePlayer] >= 100) {
                    document.querySelector(`.player${activePlayer}`).classList.add('win');

                    a.loop=true;
                    a.play();
                    dice.classList.add('hidden');
                    Winner.classList.remove('hidden');
                    playing = false;

                }
                switchPlayer();

            }

        }
    })

    //reset the game
    btnNew.addEventListener('click',
    function(){
        a.pause();
        score=[0,0];
        player0Score.textContent=0;
        player1Score.textContent=0;
        
        player0El.classList.remove('win');
        player1El.classList.remove('win');


        player0El.classList.add('player-active');
        player1El.classList.remove('player-active');
       
        currentScore0El.textContent=0;
        currentScore1El.textContent=0;

        dice.classList.add('hidden');
        Winner.classList.add('hidden');
        playing=true;
        activePlayer=0;
        currentScore=0;
        
    })
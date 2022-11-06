//robot function
function robotBrain() {
    //random number () * 3
    var randomNum = Math.floor(Math.random() * 3);
    //empty robot picks robot picks = ''
    var robotPicks = '';
    //if random number ===  0
    if (randomNum === 0) {
        //robotpicks = rock
        robotPicks = 'Rock';
        //else if random number === 1
    } else if (randomNum === 1) {
        //robotpicks = paper
        robotPicks = 'Paper';
    }
    //else robotpicks = scissor
    else {
        robotPicks = 'Scissor';
    }
    //return robotpicks
    return robotPicks;
}


function playOrNot() {
    var text = 'Do you want to continue?';
    var gameScore = 'SCORE\nYour wins: ' + userWins + '\nPC wins: ' + pcWins + '\nTIE: ' + tieGames
    if (confirm(text) == true) {
        text = playGame();
    } else {
        alert(gameScore);
        if (userWins > pcWins) {
            alert('You beat PC')
        } else {
            alert('PC beats you')
        }
    }
}


function playGame() {
    var userOption = prompt('R for Rock\nP for Paper\nS for Scissor')

    if (userOption === 'r' && robotBrain() === 'Scissor') {
        alert('You: Rock\nPC: Scissor\nYou win!');
        userWins += 1;
    } else if (userOption === 's' && robotBrain() === 'Paper') {
        alert('You: Scissor\nPC: Paper\nYou win!');
        userWins += 1;
    } else if (userOption === 'p' && robotBrain() === 'Rock') {
        alert('You: Paper\nPC: Rock\nYou win!');
        userWins += 1;
    } else if (userOption === 's' && robotBrain() === 'Rock') {
        alert('You: Scissor\nPC: Rock\nYou lose!');
        pcWins += 1;
    } else if (userOption === 'p' && robotBrain() === 'Scissor') {
        alert('You: Paper\nPC: Scissor\nYou lose!');
        pcWins += 1;
    } else if (userOption === 'r' && robotBrain() === 'Paper') {
        alert('You: Rock\nPC: Paper\nYou lose!');
        pcWins += 1;
    }
    else {
        alert('Tie');
        tieGames += 1
    }

    playOrNot();

}

var userWins = 0;
var pcWins = 0;
var tieGames = 0

var btn = document.querySelector('#game-score');
var showScore = document.querySelector('#show-score');

document.getElementById('show-score').innerHTML = 'coming soon..'

btn.addEventListener('click', () => {
    if(showScore.style.display === 'block') {
        showScore.style.display = 'none';
    } else {
        showScore.style.display = 'block';
    }
})


var rulesBtn = document.querySelector('#rules');
var rulesShow = document.querySelector('#rules-show');

rulesBtn.addEventListener('click', () => {
    if(rulesShow.style.display === 'block') {
        rulesShow.style.display = 'none'
    } else {
        rulesShow.style.display = 'block';
    }
})

//HTML STUFF


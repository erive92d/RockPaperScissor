
function playGame() {
 

    // COMPUTER BRAIN
      function computerInput() {
        var computerPicks = ''
        var randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber === 1) {
          computerPicks = 'r';
        }
        else if (randomNumber === 2) {
          computerPicks = 'p'
        }
        else {
          computerPicks = 's'
        }
        return computerPicks;
      }
    
      var wins = 0;
      var computerWins = 0;
      var gamesNum = 13
      
      for(var i = 0; i <= gamesNum; i++) {
        // Start game
        var userInput = prompt("R = Rock, P = Paper, S = Scissor")


     
        if (userInput === computerInput()) {
           alert('Tie')
        }
        // ROCK VS SCISSOR
        else if (userInput.toLowerCase() === 'r' && computerInput() === 's') {
          wins += 1;
          alert('You win!')
          
          
        }  else if (userInput.toLowerCase() === 's' && computerInput() === 'r') {
          //console.log('You picked: Scissor  \nComputer picks: Rock')
          computerWins += 1;
          alert('PC win!')
        }
    
        // PAPER VS ROCK
          else if (userInput.toLowerCase() === 'p' && computerInput() === 'r') {
          //console.log('You picked: Paper  \nComputer picks: Rock')
          wins += 1;
          alert('You win!')
          
        }  else if (userInput.toLowerCase() === 'r' && computerInput() === 'p') {
          //console.log('You picked: Rock  \nComputer picks: Paper')
          computerWins += 1;
          alert('PC win!')
        }
    
        // SCISSOR VS PAPER
    
          else if (userInput.toLowerCase() === 's' && computerInput() === 'p') {
          //console.log('You picked: Scissor \nComputer picks: Paper')
          wins += 1;
          alert('You win!')
          
        }  else if (userInput.toLowerCase() === 'p' && computerInput() === 's') {
          //console.log('You picked: Paper  \nComputer picks: Scissor')
          computerWins += 1;
          alert('PC win!')
        }
        
       }

       alert('You win: ' + wins + 'PC win: ' + computerWins);
       
    
    }
    
playGame()
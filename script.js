const playGame = function() {
  var yourWin = 0;
  var pcWin = 0;
  var gamesPlayed = 20;

  for(var i = 0; i <= gamesPlayed; i++) {
      var pcTurn = ['Rock', 'Paper', 'Scissor']
      var randomNumber = Math.floor(Math.random() * pcTurn.length);
      var userPicks = prompt('Press R for rock, P for paper, S for scissor');
      var pcPicks = pcTurn[randomNumber];
      var result = '';

      if(userPicks === 'r' && pcPicks === 'Paper') {
          result = 'You win'
          yourWin += 1
      }
      else if (userPicks === 's' && pcPicks === 'Rock') {
          result = 'You lose'
          pcWin += 1
      }
      else if (userPicks === 'p' && pcPicks === 'Rock') {
          result = 'You win'
          yourWin += 1
      }
      else if (userPicks === 'p' && pcPicks === 'Scissor') {
          result = 'You lose'
          pcWin += 1
      }
      else if (userPicks === 'r' && pcPicks === 'Paper') {
          result = 'You lose'
          pcWin += 1
      
      }
      else if (userPicks === 's' && pcPicks === 'Scissor') {
          result = 'You win'
          yourWin += 1
      }
      else {
          result = 'Tie'
      }

      
      alert(result + ' You have ' + yourWin + 'win(s) - PC has ' + pcWin + ' win(s)')

}



}

playGame()
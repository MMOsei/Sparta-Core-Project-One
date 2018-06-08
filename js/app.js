$(document).ready(function(){


  var words = [
    'supermalt',
    'jollof',
    'water',
    'talking',
  ];
  var lettersArray;
  var index = Math.floor(Math.random() * words.length);
  var id;
  var livesLeft = 6;


  //This generates a random word to be guessed
  $('#play').one('click', function () {
    submitGuess();
    $('.game-area').toggle(); //turns on the game area once the play button is clicked

    for (var i = 0; i < words[index].length; i++) {
      var letter = $('<div class="letter">' + words[index][i] + '</div>');
      $('#word').append(letter);
    }
    $('#current-score').html(livesLeft);
    move();
  });
  //This allows the Enter button on the keyboard to submit a guess
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      submitGuess();
    }
  })
  //This is what controls the guess box and its submit button
  function submitGuess() {
    var counter = 0;
    for (var i = 0; i < $('.letter').length; i++) {
      if ($('.letter')[i].innerHTML === $('#input').val()) {
        $('.letter')[i].style.color = 'black';
      }
      if ($('.letter')[i].style.color == 'black') {
        counter++;
        if (counter >= words[index].length) { //This the the winning contition
          $('#end').html('YOU WIN');
          clearInterval(id);
        }
      }
    }
    //Lose condtion 1
    if (!words[index].includes($('#input').val())) {
      livesLeft--;
      $('#current-score').html(livesLeft);
    } if (livesLeft == 0) {
      $('#end').html('GAME OVER');
      clearInterval(id);
    }

    $('#input').val(''); //This clears the input box after a guesss has been made
  }

  //Function that controlls the timer
  function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    id = setInterval(frame, 600);
    function frame() {
      if (width == 100) {
        $('#end').html('TIMES UP!!'); //Lose condition 2
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  }
  //Reset button to exit the game early
  $('#reset').click(function() {
    location.reload();
  })

});

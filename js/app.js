$(document).ready(function(){

  //GET GUESSED LETTERS TO SHOW UP ON THE GAME BOARD

  var words = [
    'sausage',
    'sparta'
  ];
  var lettersArray;
  var index = Math.floor(Math.random() * words.length);
  var id;


  //GET GUESSED LETTERS TO SHOW UP ON THE GAME BOARD

  $('#play').one('click', function () {
    submitGuess();
    $('.game-area').toggle();

    for (var i = 0; i < words[index].length; i++) {
      var letter = $('<div class="letter">' + words[index][i] + '</div>');
      $('#word').append(letter);
      // console.log(words[index][i]);
    }
    $('#current-score').html(livesLeft);
    move();
  });



  // var playerScore = 0;
  var livesLeft = 6;

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      submitGuess();
    }
  })

  function submitGuess() {
    var counter = 0;
    for (var i = 0; i < $('.letter').length; i++) {
      if ($('.letter')[i].innerHTML === $('#input').val()) {
        $('.letter')[i].style.color = 'black';
      }
      if ($('.letter')[i].style.color == 'black') {
        counter++;
        if (counter >= words[index].length) {
          $('#end').html('YOU WIN');
          clearInterval(id);
        }
      }
    }

    if (!words[index].includes($('#input').val())) {
      livesLeft--;
      $('#current-score').html(livesLeft);
    } if (livesLeft == 0) {
      $('#end').html('GAME OVER');
      clearInterval(id);
    }

    $('#input').val('');
  }


  // $('#submit').click(function () {
  //
  //   var counter = 0;
  //   for (var i = 0; i < $('.letter').length; i++) {
  //     if ($('.letter')[i].innerHTML === $('#input').val()) {
  //       $('.letter')[i].style.color = 'black';
  //     }
  //     if ($('.letter')[i].style.color == 'black') {
  //       counter++;
  //       console.log(counter);
  //       if (counter >= words[index].length) {
  //         $('#end').html('YOU WIN');
  //         clearInterval(id);
  //         console.log(counter);
  //       }
  //     }
  //   }
  //
  //   console.log(words[index]);
  //   if (!words[index].includes($('#input').val())) {
  //     console.log('not in the string');
  //     livesLeft--;
  //     $('#current-score').html(livesLeft);
  //   } if (livesLeft == 0) {
  //     $('#end').html('GAME OVER');
  //     clearInterval(id);
  //   }
  //
  //   $('#input').val('');
  // });

  function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    id = setInterval(frame, 600);
    function frame() {
      if (width == 100) {
        $('#end').html('TIMES UP!!');
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  }

  $('#reset').click(function() {
    location.reload();
  })

});

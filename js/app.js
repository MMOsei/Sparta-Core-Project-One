$(document).ready(function(){

  console.log('working');

  //get button elements
  var $movieQuoteBtn = $('#movieQuotes-btn');
  var $famousQuotesBtn = $('#famousQuotes-btn');
  var $bookTitlesBtn = $('#bookTitles-btn');
  var $surpriseMeBtn = $('#surpriseMe-btn');

  //Categories variable for the game
  var movieQuotes = [
    'Frankly, my dear, I don\'t give a damn.',
    'I\'m going to make him an offer he can\'t refuse.',
    'Of all the gin joints in all the towns in all the world, she walks into mine.',
    "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya punk?"
  ];
  var famousQuotes = [
    "We are not makers of history. We are made by history.",
    "Do not let your hearts be troubled. Trust in God\; trust also in me.",
    "Happiness is when what you think, what you say, and what you do are in harmony.",
    "Dress shabbily and they remember the dress; dress impeccably and they remember the woman."
  ];
  var bookTitles = [
    "The Wind In The Willows", "To Kill a Mockingbird", "Alice's Adventures in wonderland", "Of Mice and Men"
  ];
  var surpriseMe = [movieQuotes,famousQuotes,bookTitles];

  // When I click movieQuoteBtn
  $movieQuoteBtn.click(function(){
    // I should get a random element from the movieQuotes array
    var index = Math.floor(Math.random() * movieQuotes.length)
    console.log(movieQuotes[index]);
    ;
  })
  // When I click famousQuotesBtn
  $famousQuotesBtn.click(function(){
    // I should get a random element from the movieQuotes array
    var index = Math.floor(Math.random() * famousQuotes.length)
    console.log(famousQuotes[index]);
    ;
  })
  // When I click bookTitlesBtn
  $bookTitlesBtn.click(function(){
    // I should get a random element from the movieQuotes array
    var index = Math.floor(Math.random() * bookTitles.length)
    console.log(bookTitles[index]);
    ;
  })
  // When I click $surpriseMeBtn
  $surpriseMeBtn.click(function(){
    // I should get a random element from the movieQuotes array
    var randomArray = surpriseMe[Math.floor(Math.random() * surpriseMe.length)]


    console.log(randomArray[Math.floor(Math.random() * 4)]);
    ;
  })
  // And console.log() it

  //When I click the
});

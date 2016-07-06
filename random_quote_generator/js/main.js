// Goes generates a random quote from quotes.json
function randomQuoteGenerator() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

$("document").ready(function(event) {
  var randomQuote = randomQuoteGenerator();
  $("#quote-message").text(randomQuote);
});
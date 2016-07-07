// Goes generates a random quote from quotes.json
function randomQuoteGenerator() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

$("document").ready(function(event) {
  console.log("test");
  $("#quote-refresh").on('click', function() {
    $("#quote-message").text(randomQuoteGenerator());
  });
});
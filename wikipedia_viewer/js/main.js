function toggleTextSearch(){
  var bodySearch = $(".body-search-bar");
  bodySearch.focus(function(){
    bodySearch.attr("placeholder", "");
  });


  bodySearch.blur(function(){
    bodySearch.attr("placeholder", "Which wikipedia article would you like to view?");
  });
}

function toggleButtonFade() {
  var bodySearch = $(".body-search-bar");

  bodySearch.focus(function(){
    // Fades out if there is no text
    if ($(".body-search-bar").val() === "") {
      $(".body-submit").animate({
        opacity: "toggle"
      }, 300);
    };
  });

  bodySearch.blur(function(){
    // Fades out if there is no text
    if ($(".body-search-bar").val() === "") {

      $(".body-submit").animate({
        opacity: "toggle"
      }, 300);

    };
  });
}

// Searches articles and generates them into code
function searchPage(){
  // Registers enter key as button press
  $(".body-search-bar").keyup(function(keycode){
    if (keycode.keyCode === 13 && $(this).val() !== "") {
      $(".body-submit").click();
    }
  });

  // Runs when button is clicked
  $(".body-submit").click(function(event){
    $(".center-body-text").hide(500);
    $("#random-button").hide(500);
  });
}

// Generates random web page
function searchRandom() {
  $("#random-button").click(function(event){
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
  });
}

$(document).ready(function(){
  toggleTextSearch();
  toggleButtonFade();
  searchPage();
  searchRandom();
});
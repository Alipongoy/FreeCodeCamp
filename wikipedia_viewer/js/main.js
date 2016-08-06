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
    var title = getSearchQuery();
    $(".center-body-text").hide(500);
    $("#random-button").hide(500);
    $(".body-input").addClass("transition-to-top");

    // Wait to add text
    setTimeout(function(){
      $(".body-input").removeClass("transition-to-top").addClass("body-to-top");
      $(".wrapper").addClass("wrapper-to-top");
      appendTexts();
    }, 750);
  });
}

// Gets the title for query searching
function getSearchQuery(){
  var searchValue = $(".body-search-bar").val();
  return searchValue.replace(/ /, "_");
}

// Appends text
function appendTexts() {
  var textModule = document.createElement("div");
  var header = document.createElement("h1");
  var paragraph = document.createElement("p");
  textModule.setAttribute("class", "text");
  header.textContent = "Hi!";
  paragraph.textContent = "Bye!";
  textModule.appendChild(header);
  textModule.appendChild(paragraph);
  $(".wrapper").append($(textModule));
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
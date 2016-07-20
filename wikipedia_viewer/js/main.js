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
    console.log("shit is running");
    $(".body-submit").animate({
      backgroundColor: "#ffffff"
    }, "slow");
  });
}

$(document).ready(function(){
  toggleTextSearch();
  toggleButtonFade();
});
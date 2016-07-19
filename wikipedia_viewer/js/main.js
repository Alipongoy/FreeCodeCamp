function toggleTextSearch(){
  var bodySearch = $(".body-search-bar");

  bodySearch.focus(function(){
    bodySearch.attr("placeholder", "");
  });


  bodySearch.blur(function(){
    bodySearch.attr("placeholder", "Which wikipedia article would you like to view?");
  });
}

$(document).ready(function(){
  toggleTextSearch();
});
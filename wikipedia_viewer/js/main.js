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

function searchPage(urlToSearch){
  $.ajax( {
    url: urlToSearch,
    dataType: 'jsonp',
    type: 'GET',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
      console.log(data.parse.text["*"]);
    }
  });
}

$(document).ready(function(){
  toggleTextSearch();
  toggleButtonFade();
  searchPage("http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix");
});
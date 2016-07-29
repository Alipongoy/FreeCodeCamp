// Global Variables
var api_key = '014428d375f4624f4e034a28c1de666a';

function findBiggestWidth(widthArray) {
  return widthArray.reduce(function(prevElement, currentElement) {
    return (prevElement > currentElement) ? prevElement : currentElement;
  });
}

function getWidthsArray() {
  var children = $(".body-info").children();
  return children.map(function(_, value) {
    return $(value).width();
  }).toArray();
}

function setWidthAndHeight(largestWidth) {
  $(".body-info").width(largestWidth + 100);
  $(".body-info").height(largestWidth + 100);
}

// Sets the weather
function setWeather(responseObject, attr = "imperial") {
  $("#city-name").text(responseObject.name + ', ' + responseObject.sys.country);
  
  if (attr === "imperial") {
    $("#temperature").text(responseObject.main.temp.toFixed(1) + ' °F');
    $("#temperature").removeAttr("metric");
    $("#temperature").attr("imperial", true);
  }
  
  else if (attr === "metric") {
    $("#temperature").text(responseObject.main.temp.toFixed(1) + ' °C');
    $("#temperature").removeAttr("imperial");
    $("#temperature").attr("metric", true);
  }
  
  $("#status").text(responseObject.weather[0].main);
}

// This changes the background depending on the type of weather
function changeBackground() {
  var weatherToBackground = {
    "Thunderstorm": "http://cdn.calm.com/scenes/scene-N0LlltMMDH.mp4?v=1417688424364",
    "Drizzle": "http://cdn.calm.com/scenes/scene-N0LlltMMDH.mp4?v=1417688424364",
    "Rain": "http://cdn.calm.com/scenes/scene-nGWcJdvlQ2.mp4?v=1418162807311",
    "Snow": "http://cdn.calm.com/scenes/scene-6pNLkdGkUn.mp4?v=1417688433921",
    "Atmosphere": "http://cdn.calm.com/scenes/scene-Jcmdfl7dA7.mp4?v=1418090110509",
    "Clear": "http://cdn.calm.com/scenes/scene-Qqkzy9k7Eo.mp4?v=1418162238190",
    "Clouds": "http://cdn.calm.com/scenes/scene-Uz5hyVfJcr.mp4?v=1417688411342",
    "Extreme": "http://cdn.calm.com/scenes/scene-6pNLkdGkUn.mp4?v=1417688433921"
  };
  var background = weatherToBackground[$("#status").text()];
  if (background === null)
    background = "http://cdn.calm.com/scenes/scene-6pNLkdGkUn.mp4?v=1417688433921";
  $(".background-video").attr("src", background);
}

function accessAPI(units = "imperial", toggle = false) {
  // This gathers latitude and longitude
  $.getJSON("http://ip-api.com/json", function(data) {
    var latitude = data.lat;
    var longitude = data.lon;
    var locationString = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=' + units + '&appid=' + api_key;

    $.getJSON(locationString, function(responseobject) {
      setWeather(responseobject, units);
      if (toggle === false)
        changeBackground();
    });
  });
}

// Changes units

$(document).ready(function(event) {
  var biggestWidth = findBiggestWidth(getWidthsArray());
  setWidthAndHeight(biggestWidth);
  accessAPI();
  
  // This runs if button is clicked
  $(".body-info").click(function(event){
    ($("#temperature").attr("imperial") === "true") ? accessAPI("metric", true) : accessAPI("imperial", true);
  });
});
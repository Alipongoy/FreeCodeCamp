// Global Variables
var api_key = '014428d375f4624f4e034a28c1de666a';

function findBiggestWidth(widthArray) {
  return widthArray.reduce(function(prevElement, currentElement){
    return (prevElement > currentElement) ? prevElement : currentElement; 
  });
}

function getWidthsArray() {
  var children = $(".body-info").children();
  return children.map(function(_, value){
    return $(value).width();
  }).toArray();
}

function setWidthAndHeight(largestWidth) {
  $(".body-info").width(largestWidth + 100);
  $(".body-info").height(largestWidth + 100);
}

// Sets the weather
function setWeather(responseObject) {
  $("#city-name").text(responseObject.name + ', ' + responseObject.sys.country);
  $("#temperature").text(responseObject.main.temp.toFixed(1) + ' °F');
  $("#status").text(responseObject.weather[0].main);
}

// This changes the background depending on the type of weather
function changeBackground(){
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

  console.log($(".background-video").attr("src", background));
}

function accessAPI() {
  var xhr = new XMLHttpRequest();

  // If location is turned on, this runs
  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position){
      var latitude = position.coords.latitude.toFixed(3);
      var longitude = position.coords.longitude.toFixed(3);

      var locationString = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=imperial';
      console.log(locationString);



      xhr.open('GET', locationString + '&APPID=' + api_key, false);
      xhr.send();

      var responseObject = JSON.parse(xhr.response);
      console.log(responseObject);

      setWeather(responseObject);

      changeBackground();
    });
  }
}

$(document).ready(function(event){
  var biggestWidth = findBiggestWidth(getWidthsArray());
  setWidthAndHeight(biggestWidth);
  accessAPI();
});
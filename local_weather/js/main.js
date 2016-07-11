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

function accessAPI() {
  var xhr = new XMLHttpRequest();
  xhr.open();
  xhr.send();
}

$(document).ready(function(event){
  var biggestWidth = findBiggestWidth(getWidthsArray());
  setWidthAndHeight(biggestWidth);
});
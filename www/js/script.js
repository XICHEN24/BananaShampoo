/**
 * Created by Stefan on 4/25/16.
 */

$(document).ready(function(){
  $('.single-item').slick();
});

var size;
var desired_width = 50;
var resizer = $("#hidden-resizer");

resizer.html("This is the text I want to resize.");

while(resizer.width() > desired_width) {
  size = parseInt(resizer.css("font-size"), 10);
  resizer.css("font-size", size - 1);
}

$("#target-location").css("font-size", size).html(resizer.html());

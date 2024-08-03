var src = $('#home').css('background-image');
var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');

var img = new Image();
img.onload = function() {
    alert('image loaded');
}
img.src = url;
if (img.complete) img.onload();
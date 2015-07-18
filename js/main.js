// main.js: Common JavaScript functions
// ====================================

var attachFastClick = Origami.fastclick;
attachFastClick(document.body); // FastClick

$(document).ready(function() {
  $("a").smoothScroll();  // jQuery Smooth Scroll
  $.goup();               // jQuery GoUp
});


$(document).ready(function() {


// Add jQuery here

// EACH CLICK FUCNTION TARGETS THE correct .b-tag FROM THE NAVIGATION
// HIDES ALL .item BY ADDING A CLASS OF HIDE with .addClass 'hide' (A)
// AND REMOVES CLASS OF SHOW FROM ALL .item WITH .removeClass 'show'

// THEN TARGETS THE RIGHT TAGGED ITEM WITH .item.tag
// ADDS THE CLASS OF 'show'
// REMOVES THE CLASS OF 'hide' THAT WAS PREVIOUSLY APPLIED (A)

$(".b-food").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.food").addClass("show");
  $(".item.food").removeClass("hide");
});

$(".b-windows").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.windows").addClass("show");
  $(".item.windows").removeClass("hide");
});

$(".b-lights").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.lights").addClass("show");
  $(".item.lights").removeClass("hide");
});

$(".b-mirrors").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.mirrors").addClass("show");
  $(".item.mirrors").removeClass("hide");
});

$(".b-shelf").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.shelf").addClass("show");
  $(".item.shelf").removeClass("hide");
});

$(".b-nature").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.nature").addClass("show");
  $(".item.nature").removeClass("hide");
});

$(".b-sport").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.sport").addClass("show");
  $(".item.sport").removeClass("hide");
});

$(".b-clothes").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.clothes").addClass("show");
  $(".item.clothes").removeClass("hide");
});

$(".b-clock").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.clock").addClass("show");
  $(".item.clock").removeClass("hide");
});

$(".b-beach").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.beach").addClass("show");
  $(".item.beach").removeClass("hide");
});

$(".b-showall").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.showall").addClass("show");
  $(".item.showall").removeClass("hide");
});

$(".b-music").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.music").addClass("show");
  $(".item.music").removeClass("hide");
});

$(".b-space").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.space").addClass("show");
  $(".item.space").removeClass("hide");
});

$(".b-home").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.home").addClass("show");
  $(".item.home").removeClass("hide");
});
// dont remvoe this line
});

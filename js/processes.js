
$(document).ready(function() {
  changeNavFromScrollPosition($(window).scrollTop());
}
);
$(window).scroll(function (event) {
  event.preventDefault();
  changeNavFromScrollPosition($(window).scrollTop());
});

function changeNavFromScrollPosition(scroll) {
  var menuHeigth = 77;
  var sectionClass = "";
  if (scroll <($(".sprint").offset().top)-menuHeigth) {
    sectionClass = ".resource-nav";
  } else
  if (scroll < ($(".scope").offset().top)-menuHeigth) {
    sectionClass = ".sprint-nav";
  } else
    sectionClass = ".scope-nav";
  $(".processes").find(".active").removeClass("active");
  $(sectionClass).addClass("active");
}

function scrollPage(distanceFromTop){
  $('html, body').animate({
    scrollTop: distanceFromTop
  }, 500);
}
$(".nav-menu-item").on("click", function(e) {
  e.preventDefault();
  var menuHeigth = 76;
  var itemClass = $(this).attr("class").split(" ")[0];
  var windowHeight = $(window).height();
  if (itemClass == "resource-nav") {
    scrollPage( $(".resource").offset().top - menuHeigth);
  }
  if (itemClass == "sprint-nav") {
    scrollPage( $(".sprint").offset().top - menuHeigth);
  }
  if (itemClass == "scope-nav") {
    scrollPage( $(".scope").offset().top - menuHeigth);
  }
});

$(".process-detail-button").on("click", function(e){
  $(".sprint-detail").show();
  console.log("TEST");
});

$(".button-to-top img").on("click", function(e){
  e.preventDefault();
  var menuHeigth = 76;
  var windowHeight = $(window).height();
  scrollPage( $(".resource").offset().top - menuHeigth);
});

$(".button-actors").on("click", function(){
  if($(this).hasClass("selected")) {
    $(this).removeClass("selected");
    $(".subtitle").hide();
  }else {
    $(this).addClass("selected");
    $(".subtitle").show();
  }
});

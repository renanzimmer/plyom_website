
$(document).ready(function() {
    changeNavFromScrollPosition($(window).scrollTop(), $(window).height());
  }
);
$(window).scroll(function (event) {
  event.preventDefault();
  changeNavFromScrollPosition($(window).scrollTop(), $(window).height());
});

function changeNavFromScrollPosition(scroll, windowHeight) {
  var distanceWithoutHeader = windowHeight*0.3;
  if (scroll > distanceWithoutHeader) {
    $(".top-navigation").show();
  } else {
    $(".top-navigation").hide();
  }
  var sectionClass = "";
  if (scroll < ($(".services").offset().top)-77) {
    sectionClass = ".our-cases-nav";
  } else
  if (scroll < ($(".methods").offset().top)-77) {
    sectionClass = ".services-nav";
  } else
  if (scroll < ($(".contact").offset().top)-200) {
    sectionClass = ".methods-nav";
  } else
    sectionClass = ".contact-nav";
  $(".menu").find(".active").removeClass("active");
  $(sectionClass).addClass("active");
}

$(".nav-item").on("click", function(e) {
  e.preventDefault();
  changeCase($(this));
});

function changeCase(selector) {
  $(".minsulin-case").hide();
  $(".ahgora-case").hide();
  $(".youper-case").hide();
  $(".anestech-case").hide();
  var section = ($(selector).attr("class").split(" ")[0].split("-")[0]);
  $("." + section + "-case").show();
  $(selector).closest(".pagination").find(".active").removeClass("active");
  $("." + section + "-nav-item").addClass("active");
}

function scrollPage(distanceFromTop){
  $('html, body').animate({
       scrollTop: distanceFromTop
   }, 500);
}
$(".nav-menu-item").on("click", function(e) {
  e.preventDefault();
  var itemClass = $(this).attr("class").split(" ")[0];
  var windowHeight = $(window).height();
  if (itemClass == "our-cases-nav") {
    scrollPage( $(".our-cases").offset().top);
  }
  if (itemClass == "services-nav") {
    scrollPage( $(".services").offset().top);
  }
  if (itemClass == "methods-nav") {
    scrollPage( $(".methods").offset().top);
  }
  if (itemClass == "contact-nav") {
    scrollPage( $(".contact").offset().top);
  }
  $(this).closest(".menu").find(".active").removeClass("active");
  $(this).addClass("active");

});

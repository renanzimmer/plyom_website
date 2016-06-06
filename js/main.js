
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
  if (scroll >= windowHeight) {
    $(".menu").find(".active").removeClass("active");
    $(".our-cases-nav").addClass("active");
  }
  if (scroll >= (windowHeight + windowHeight*0.8)) {
    $(".menu").find(".active").removeClass("active");
    $(".services-nav").addClass("active");
  }
  if (scroll >= (windowHeight + 2*(windowHeight*0.8))) {
    $(".menu").find(".active").removeClass("active");
    $(".methods-nav").addClass("active");
  }
  if (scroll >= (windowHeight + 3*(windowHeight*0.7))) {
    $(".menu").find(".active").removeClass("active");
    $(".contact-nav").addClass("active");
  }
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
  $(window).scrollTop(distanceFromTop);
}
$(".nav-menu-item").on("click", function(e) {
  e.preventDefault();
  var itemClass = $(this).attr("class").split(" ")[0];
  var windowHeight = $(window).height();
  if (itemClass == "our-cases-nav") {
    scrollPage(windowHeight);
  }
  if (itemClass == "services-nav") {
    scrollPage(windowHeight + windowHeight*0.8);
  }
  if (itemClass == "methods-nav") {
    scrollPage(windowHeight + 2*(windowHeight*0.8));
  }
  if (itemClass == "contact-nav") {
    scrollPage(windowHeight + 3*(windowHeight*0.8));
  }
  $(this).closest(".menu").find(".active").removeClass("active");
  $(this).addClass("active");

});

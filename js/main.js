
$(document).ready(function() {
    $(".top-navigation").hide();
  }
);
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  var distanceWithoutHeader = $(window).height()*0.3;
  if (scroll > distanceWithoutHeader) {
    $(".top-navigation").show();
  } else {
    $(".top-navigation").hide();
  }
});


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
$(".nav-item").on("click", function(e) {
  e.preventDefault();
  changeCase($(this));
});

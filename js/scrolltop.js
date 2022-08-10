$(".top").on("click", function() {
  $('html').animate({
    scrollTop: 0,
  }, 1000);
});
$(window).scroll(function() {
  var height = $(document).scrollTop();
  if (height < 40) {
    $(".top").hide();
  } else {
    $(".top").show();
  }
});
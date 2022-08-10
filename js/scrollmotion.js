// JQ 스크롤 따라다니는 애니메이션
// $(document).ready(function(){
// });
var currentPosition = parseInt( $(".scrollbar-circle").css("top") );
var currentPosition = parseInt( $(".scrollbar-square").css("top") );

$(window).scroll(function() {
var position = $(window).scrollTop();
  $(".scrollbar-circle").stop().animate({ "top": position + currentPosition + "px" }, 1000);
  $(".scrollbar-square").stop().animate({ "top": position + currentPosition + "px" }, 2000);
});
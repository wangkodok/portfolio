// 다크 모드 클릭
$(".dark-mode .btn").on("click", function() {
  if($("body").hasClass("light")) {
    // 다크 모드
    $("body").addClass("dark");
    $("body").removeClass("light");
    $(".dark-mode .dark").show();
    $(".dark-mode .light").hide();
  } else {
    // 라이트 모드
    $("body").addClass("light");
    $("body").removeClass("dark");
    $(".dark-mode .dark").hide();
    $(".dark-mode .light").show();
  }
});
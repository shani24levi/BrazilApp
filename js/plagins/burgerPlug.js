$.fn.burger = function(_nav){
  $(this).on("click",function(){

    if ($("#id_nav").css("display") != "block") {
      $("#nav_btn").addClass("clickMenu");
    }
    else {
      $("#nav_btn").removeClass("clickMenu");
    }

    $(_nav).slideToggle(700);
  })
}
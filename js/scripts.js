// User Interface Logic
$(function(){
  $(".compressed-section").hide();
  $(".panel-heading").on("click", function() {
    $(this).next().slideToggle();
  });
});

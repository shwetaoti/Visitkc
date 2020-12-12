

//----------------- navbar bar hide show---------------//
$(document).ready(function(){
  $("#icon a").click(function(){
    $(".search-window").addClass("active");
  });
  $(".close_seach").click(function(){
    $(".search-window").removeClass("active");
  });


//----------------- Custom tab---------------//

  $(".custm li").on("click", function(){
    $(".custm").find(".active").removeClass("active");    
    $(this).addClass("active");
  });

  
  $('#icon-bar').click(function(){
    $('#tabmenu_N').toggleClass('show');
  });

});




$(document).ready(function(){
  $("#icon-bar2 a").click(function(){
    $(".search-window").addClass("active");
  });
  $(".close_seach").click(function(){
    $(".search-window").removeClass("active");
  });
});


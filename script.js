
$(document).ready(function(){
  $("#icon .search-toggle").click(function(){
    $(".search-window").addClass("active");
  });
  $(".close_seach").click(function(){
    $(".search-window").removeClass("active");
  });



  $('#search_icon').click(function(){
    // $('body').toggleClass('overflow-hide');
    $('.search-toggle').toggleClass('active');
    $('#search_box_N').toggleClass('active');
  });


  $('#search_icon2').click(function(){
    // $('body').toggleClass('overflow-hide');
    $('.search-toggle2').toggleClass('active');
    $('#tabmenu_N').toggleClass('active');
  });



  $("#icon-bar2 a").click(function(){
    $('.search-toggle').toggleClass('active');
    $('#search_box_N').toggleClass('active');
  });

  // $(".close_seach").click(function(){
  //   $(".search-window").removeClass("active");
  // });




//----------------- Custom tab---------------//

  //  $(".custm li").on("click", function(){
  //    $(".custm").find(".active").removeClass("active");    
  //    $(this).addClass("active");
  //  });

   $(".custm li").hover( function(){
    $(".custm").find(".active").removeClass("active");    
    $(this).addClass("active");
  });




  
  $('#icon-bar').click(function(){
    $('#tabmenu_N').toggleClass('show');
  });

});


$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 300) {
      $("header").addClass("darkHeader");
      $("#search_box_N").addClass("darkHeader");      
  } else {
    $("#search_box_N").removeClass("darkHeader");
    $("header").removeClass("darkHeader");
  }
});




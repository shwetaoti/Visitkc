

//----------------- navbar bar hide show---------------//
// $(document).ready(function(){
//   $("#icon a").click(function(){
//     $(".search-window").addClass("active");
//   });
//   $(".close_seach").click(function(){
//     $(".search-window").removeClass("active");
//   });

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

  $("#icon-bar2 a").click(function(){
    $(".search-window").addClass("active");
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

  if (scroll >= 120) {
      $("header").addClass("darkHeader");
      $("#search_box_N").addClass("darkHeader");      
  } else {
    $("#search_box_N").removeClass("darkHeader");
    $("header").removeClass("darkHeader");
  }
});




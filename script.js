//----------------- navbar---------------//
function openTab(evt, openTab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openTab).style.display = "block";
    evt.currentTarget.className += " active";
  }

//----------------- search bar hide show---------------//
$(document).ready(function(){
  $("#icon a").click(function(){
    $(".search-window").addClass("active");
  });
  $(".close_seach").click(function(){
    $(".search-window").removeClass("active");
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




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


  document.getElementById("icon").addEventListener("click" , function() {
    var mybox =document.getElementById("search-window2");
    if (mybox.style.display=="none") {
        mybox.style.display="block";
    }
    else{
        mybox.style.display="none"
    }

})


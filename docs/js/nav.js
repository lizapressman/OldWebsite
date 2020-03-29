var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navContainer").style.top = "0";

  } else {
    document.getElementById("navContainer").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// $(function() {
//     $('#menu li a').click(function() {
//        $('#menu li').removeClass();
//        $($(this).attr('href')).addClass('active');
//     });
//  });

//  // Get the container element
// var navContainer = document.getElementById("navContainer");

// // Get all buttons with class="btn" inside the container
// var navelems = navContainer.getElementsByClassName("navelem");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < navelems.length; i++) {
//     navelems[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
function isElementInViewport(element) {
 var rect = element.getBoundingClientRect();
 return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
 rect.right <= (window.innerWidth || document.documentElement.clientWidth)
 );
}

var elements = document.querySelectorAll(".text");

function callbackFunc() {
 for (var i = 0; i < elements.length; i++) {
  if (isElementInViewport(elements[i])) {
 elements[i].classList.add("visible");
}
}
}
window.onresize = function(event) {
  if(document.documentElement.clientWidth < 918){
    $('#logotext').fadeOut(100);
    $('#logo').fadeIn(100);
    $('#hamburger').fadeIn(100);
    document.getElementById("left").style.minWidth = "0px";
    document.getElementById("left").style.width = "0px";
  }else{
    $('#logotext').fadeIn(100);
    $('#logo').fadeOut(100);
    if(window.scrollY < document.getElementById('top').clientHeight){
      $('#hamburger').fadeOut(100);
      document.getElementById("left").style.minWidth = "270px";
      document.getElementById("left").style.width = "22vw";
    }
  }
  $( "#twitch-embed", $( "iframe" ).height(document.documentElement.clientHeight - document.getElementById('introtext').clientHeight -57));
  $( "#twitch-embed").height(document.documentElement.clientHeight - document.getElementById('introtext').clientHeight -57);
  $( "#twitch-embed", $( "iframe" ).width(document.documentElement.clientWidth - document.getElementById('left').clientWidth));
  $( "#twitch-embed").width(document.documentElement.clientWidth - document.getElementById('left').clientWidth);
};
window.onscroll = function(event){
  if(window.scrollY >= document.getElementById('top').clientHeight || document.documentElement.clientWidth < 918){
    $('#hamburger').fadeIn(100);
  }
  else{
    $('#hamburger').fadeOut(100);
  }
}
//Smooth Scrolling when clicking a button
  $(document).ready(function(){
    $( "#twitch-embed").height(document.documentElement.clientHeight - document.getElementById('twitchbg').clientHeight);
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    // Add smooth scrolling to all links
    $("area").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
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
  $( "#twitch-embed", $( "iframe" ).height(document.documentElement.clientHeight - document.getElementById('twitchbg').clientHeight));
    $( "#twitch-embed").height(document.documentElement.clientHeight - document.getElementById('twitchbg').clientHeight);
    $( "#spotifyframe").height("80px");
};


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

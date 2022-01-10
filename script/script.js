
window.onresize = function(event) {
  if($(window).width() < 918){
    $('#logotext').fadeOut(100);
    $('#logo').fadeIn(100);
    $('#hamburger').fadeIn(100);
    document.getElementById("left").style.minWidth = "0px";
    document.getElementById("left").style.width = "0px";
    document.getElementById("left").style.borderWidth = "0px 0px 0px 0px";
  }else{
    $('#logotext').fadeIn(100);
    $('#logo').fadeOut(100);
    if(window.scrollY < document.getElementById('top').clientHeight){
      $('#hamburger').fadeOut(100);
      document.getElementById("left").style.minWidth = "270px";
      document.getElementById("left").style.width = "22vw";
      document.getElementById("left").style.borderWidth = "0px 1px 0px 0px";
    }
  }
  $( "#twitch-embed", $( "iframe" ).width($(window).width() - document.getElementById('left').clientWidth - parseFloat(window.getComputedStyle(document.getElementById('left')).borderRightWidth)));
  $( "#twitch-embed", $( "iframe" ).height($(window).height() - document.getElementById('introtext').clientHeight -57));
};
window.onscroll = function(event){
  if(window.scrollY >= document.getElementById('top').clientHeight || document.documentElement.clientWidth < 918)
    $('#hamburger').fadeIn(100);
  else
    $('#hamburger').fadeOut(100);
}  
$(document).ready(function(){
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
window.addEventListener('load', function () {
  $( "#twitch-embed", $( "iframe" ).width($(window).width() - document.getElementById('left').clientWidth - parseFloat(window.getComputedStyle(document.getElementById('left')).borderRightWidth)));
  $( "#twitch-embed", $( "iframe" ).height($(window).height() - document.getElementById('introtext').clientHeight -57));
});
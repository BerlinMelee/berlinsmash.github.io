var upcomingPage = 1;
var pastPage = 1;
upcoming(upcomingPage);
past(pastPage);
window.addEventListener('load', function () {
  $( "#twitch-embed", $( "iframe" ).width($(window).width() - document.getElementById('left').clientWidth - parseFloat(window.getComputedStyle(document.getElementById('left')).borderRightWidth)));
  $( "#twitch-embed", $( "iframe" ).height($(window).height() - document.getElementById('introtext').clientHeight -57));
});
window.onresize = function(event) {
  if($(window).width() < 918){
    $('.menu-btn').css('display', 'flex');
  }else{
    if(window.scrollY < document.getElementById('top').clientHeight){
      $('.menu-btn').css('display', 'none');
    }
  }
  $( "#twitch-embed", $( "iframe" ).width($(window).width() - document.getElementById('left').clientWidth - parseFloat(window.getComputedStyle(document.getElementById('left')).borderRightWidth)));
  $( "#twitch-embed", $( "iframe" ).height($(window).height() - document.getElementById('introtext').clientHeight -57));
};
$(document).ready(function(){
  var menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
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
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      var navigationdiv = document.createElement("div");
      var left = document.getElementById("left");
      navigationdiv.innerHTML = left.innerHTML;
      navigationdiv.id = "navigator";
      console.log(navigationdiv);
      document.body.appendChild(navigationdiv)
    } else {
      var navigationdiv = document.getElementById('navigator');
      menuBtn.classList.remove('open');
      menuOpen = false;
      navigationdiv.remove();
    }
  });
  window.onscroll = function(event){
    if(window.scrollY < document.getElementById('top').clientHeight && document.documentElement.clientWidth >= 918){
      var navigationdiv = document.getElementById('navigator');
      if(navigationdiv != null){
        menuOpen = false;
        navigationdiv.remove();
        menuBtn.classList.remove('open');
        console.log("Remove test");
      }
    }
    
  if(window.scrollY >= document.getElementById('top').clientHeight || document.documentElement.clientWidth < 918)
  $('.menu-btn').css('display', 'flex');
else
  $('.menu-btn').css('display', 'none');
  }  
});
$(document).ready(function() {
  if(window.location.hash) {
    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top - 20
    }, 500);
  }
});
function upcoming(number){
  fetch('https://cors-anywhere.herokuapp.com/https://berlinsmash.ddns.net/getSmashGG/1/' + number)
  .then(res => res.json())
  .then(res => {
      res.data.tournaments.nodes.forEach(element => {
        var image = element.images.find( imageurl => imageurl.type === 'profile');
        var div = document.createElement('div');
        div.style.backgroundImage = 'url(' + image.url + ')';
        div.setAttribute("id", element.id.toString());
        var div2 = document.createElement('div');
        div2.innerHTML = convertUnix(element.startAt) + '<br><h1>' + element.name +'</h1>';
        div.appendChild(div2);
        document.getElementById("upcomingTournaments").appendChild(div);
      });
      if(res.data.tournaments.pageInfo.page < res.data.tournaments.pageInfo.totalPages){
        upcomingPage = res.data.tournaments.pageInfo.page + 1;
      }else{
        if(res.data.tournaments.pageInfo.total == 0)
          document.getElementById("upcomingTournaments").innerHTML += '<span style="text-transform: uppercase; font-size: 2em;">No upcoming tournaments at the moment</span>'
        document.getElementById("upcomingButton").style.display = 'none';
      }
  });
}
function past(number){
  fetch('https://cors-anywhere.herokuapp.com/https://berlinsmash.ddns.net/getSmashGG/0/' + number)
  .then(res => res.json())
  .then(res => {
    res.data.tournaments.nodes.forEach(element => {
      var image = element.images.find( imageurl => imageurl.type === 'profile');
      var div = document.createElement('div');
      var img = document.createElement('img');
      var div2 = document.createElement('div');
      var div3 = document.createElement('div');
      img.src = image.url;
      div.setAttribute("id", element.id.toString());
      div2.innerHTML = convertUnixPast(element.startAt) + '<br><h1>' + element.name +'</h1>' + element.numAttendees + ' Attendees';
      div.appendChild(img);
      div.appendChild(div2);
      div3.appendChild(div);
      element.events.forEach(elementEvents => {
        var details = document.createElement('details');
        var summary = document.createElement('summary');
        var tbl = document.createElement('table');
        summary.innerHTML = elementEvents.name;
        details.appendChild(summary);
        tbl.innerHTML = '<tr><th style="width: 1%;">Placement</th><th>Player</th></tr>';
        elementEvents.standings.nodes.forEach(standingElements => {
          var tr = document.createElement('tr');
          var thPlacement = document.createElement('th');
          var thName = document.createElement('th');
          thPlacement.innerHTML = standingElements.placement;
          tr.appendChild(thPlacement);
          if(standingElements.entrant.participants.length > 1){
            thName.innerHTML = '<span class="teamName">' + standingElements.entrant.name +'</span><br>';
          }
          if (standingElements.entrant.participants.length <= 2){
            if(standingElements.entrant.participants[0].prefix){
              thName.innerHTML += '<span class="sponsorName">' + standingElements.entrant.participants[0].prefix + '</span> <span class="playerName">' + standingElements.entrant.participants[0].gamerTag + '</span>';
            }
            else{
              thName.innerHTML += '<span class="playerName">' + standingElements.entrant.participants[0].gamerTag + '</span>';
            }
          }
          if(standingElements.entrant.participants.length == 2){
            if(standingElements.entrant.participants[1].prefix){
              thName.innerHTML += ' / <span class="sponsorName">' + standingElements.entrant.participants[1].prefix + '</span> <span class="playerName">' + standingElements.entrant.participants[1].gamerTag + '</span>';
            }else{
              thName.innerHTML += ' / <span class="playerName">' + standingElements.entrant.participants[1].gamerTag + '</span>';
            }
          }
          tr.appendChild(thName);
          tbl.appendChild(tr);
        })
        details.appendChild(tbl);
        elementEvents.phases.forEach(elementPhases => {
          var hyperEvents = document.createElement('a');
          hyperEvents.target = "_blank";
          hyperEvents.rel = "noopener noreferrer";
          if(elementPhases.groupCount == 1){
            hyperEvents.href = "https://smash.gg/" + elementEvents.slug +"/brackets/" + elementPhases.id + "/" + elementPhases.phaseGroups.nodes[0].id;
          }else{
            hyperEvents.href = "https://smash.gg/" + elementEvents.slug +"/brackets/" + elementPhases.id;

          }
          details.appendChild(hyperEvents);
          hyperEvents.innerHTML = elementPhases.name;
        });
        div3.appendChild(details);
      })
      document.getElementById("pastTournaments").appendChild(div3);
    });
      
    if(res.data.tournaments.pageInfo.page < res.data.tournaments.pageInfo.totalPages){
        pastPage = res.data.tournaments.pageInfo.page + 1;
    }else{
      if(res.data.tournaments.pageInfo.total == 0)
        document.getElementById("pastTournaments").innerHTML += '<h1 style="text-transform: uppercase">No upcoming tournaments at the moment</h1>'
      document.getElementById("pastButton").style.display = 'none';
    }
  });
}
function convertUnix(unix){
  const milliseconds = unix * 1000; // 1575909015000
  const dateObject = new Date(milliseconds);
  return dateObject.toLocaleString('en-US', { timeZone: 'Europe/Berlin', timeZoneName: 'short',  weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'});
}
function convertUnixPast(unix){
  const milliseconds = unix * 1000; // 1575909015000
  const dateObject = new Date(milliseconds);
  console.log(new Date(milliseconds));
  return dateObject.toLocaleString('en-US', { timeZone: 'Europe/Berlin', weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'});
}
function navigation(menuOpen){
  console.log(menuOpen);
}
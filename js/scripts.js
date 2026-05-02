// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("cornerBtn").style.display = "block";
  } else {
    document.getElementById("cornerBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Javascript - Get Current Year for the Footer
window.onload = function () {
  let d = new Date();
  document.getElementById("copyrightyear").innerHTML = d.getFullYear();
}

// slideshow function
let intIndex = 1
function showImage(i) {
  intIndex += i;

  let theImages = document.getElementsByClassName("image");
  let theDots = document.getElementsByClassName("dot");

  for (n = 0; n < theImages.length; n++) {
    theImages[n].style.display = "none";
    theDots[n].className = theDots[n].className.replace(" active", "");
    if (intIndex > theImages.length - 1) {
      intIndex = 0;
    }
    if (intIndex < 0) {
      intIndex = theImages.length - 1
    }
  }

  theImages[intIndex].style.display = "block"
  theDots[intIndex].className += " active"
}

setInterval(() => {
  showImage(1)
}, 4000);


// Countdown Code
// Set the date we're counting down to
var countDownDate = new Date("May 8, 2026 12:15:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an html element
  document.getElementById("displaytimer").innerHTML = days + " Days, " + hours + " Hours, "
    + minutes + " Minutes, " + seconds + " Seconds, ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("displaytimer").innerHTML = "EXPIRED";
  }
}, 1000);


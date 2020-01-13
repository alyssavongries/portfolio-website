jQuery(document).ready(function() {

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += 'responsive'
  } else {
    x.className = 'navtoggle'
  }
}

// modal
var modal = document.getElementById('myModal')
var images = document.getElementsByClassName('myImg')
// the image in the modal img01 defined below
var modalImg = document.getElementById('img01')
// caption will be alt text
var captionText = document.getElementById('caption')

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i]
  // and attach our click listener for this image.
  img.onclick = function (evt) {
    modal.style.display = 'block'
    modalImg.src = this.src
    captionText.innerHTML = this.alt
  }
}

var span = document.getElementsByClassName('close')[0]

span.onclick = function () {
  modal.style.display = 'none'
}

// scrolling
/*
function scrollInk () {
  var scrollLink = document.getElementsByClassName('scroll')
  scrollLink.onclick = function (evt) {
    $('html, body').stop().animate({
      scrollTop: ((this).attr('href')).offset().top - 160
    }, 400)
    return false
  } ('.scrollTop a').scrollTop()
}
scrollInk()

$(document).ready(function(){
  $('a[href^="#"]').click(function(e) {
  e.preventDefault();

  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
      'scrollTop': $target.offset().top-100
  }, 500, function () {
      window.location.hash = target;
  });
 });
});

/*
function scrollInk() {
  $('.scroll a').click(function(){
$('html, body').stop().animate({
      scrollTop: $( $(this).attr('href') ).offset().top - 160
  }, 400);
  return false;
});
$('.scrollTop a').scrollTop();
}
scrollInk();
*/

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

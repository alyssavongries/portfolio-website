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

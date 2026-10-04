// Profile page — keeps the fixed background image in sync with the
// left column width on desktop, and handles resize events.

(function () {
  'use strict';

  var image = document.querySelector('.head .image');

  function syncImageWidth() {
    var head = document.querySelector('.head');
    if (!head || !image) return;

    if (window.innerWidth > 800) {
      // On desktop the image is position:fixed; give it the exact pixel
      // width of the .head column so it sits flush under that column.
      image.style.width = head.getBoundingClientRect().width + 'px';
    } else {
      // On mobile the image is in normal flow; clear any inline width.
      image.style.width = '';
    }
  }

  // Run on load and whenever the viewport changes.
  syncImageWidth();
  window.addEventListener('resize', syncImageWidth);
})();

/* Scales the whole book to fit any screen size. */
(function () {
  'use strict';

  var stage = document.getElementById('stage');

  function fit() {
    var scale = Math.min(innerWidth / 720, (innerHeight - 110) / 500, 1.4);
    stage.style.transform = 'scale(' + scale + ')';
    stage.style.margin = ((500 * scale - 490) / 2) + 'px 0';
  }

  addEventListener('resize', fit);
  fit();
})();

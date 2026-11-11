/* Adds the "aged paper" overlay (vignette + grain) on top of every page. */
(function () {
  'use strict';
  document.querySelectorAll('.page').forEach(function (page) {
    page.insertAdjacentHTML('beforeend', '<b class="age"></b>');
  });
})();

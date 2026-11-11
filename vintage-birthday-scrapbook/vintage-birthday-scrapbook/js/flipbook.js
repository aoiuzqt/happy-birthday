/* Page-turning logic: buttons, keyboard arrows, clickable page corners. */
(function () {
  'use strict';

  var FLIP_MS = 1100; // keep in sync with the transition time in css/book.css

  var leaves  = Array.prototype.slice.call(document.querySelectorAll('.leaf'));
  var total   = leaves.length;
  var book    = document.getElementById('book');
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');
  var counter = document.getElementById('count');
  var current = 0; // number of leaves already flipped

  // Stack leaves so the first one is on top.
  leaves.forEach(function (leaf, i) { leaf.style.zIndex = total - i; });

  function updateUI() {
    book.className = 'book' + (current === 0 ? ' start' : current === total ? ' end' : '');
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total;
    counter.textContent =
      current === 0 ? 'cover' :
      current === total ? 'the end' :
      'spread ' + current + ' of ' + (total - 1);
  }

  /** dir = 1 turns forward, dir = -1 turns back. */
  function turn(dir) {
    var leaf, index;

    if (dir > 0 && current < total) {
      leaf = leaves[current];
      index = current;
      clearTimeout(leaf.timer);
      leaf.style.zIndex = 100;                       // lift above the others while flipping
      leaf.classList.add('flipped');
      leaf.timer = setTimeout(function () { leaf.style.zIndex = index; }, FLIP_MS);
      current++;
    } else if (dir < 0 && current > 0) {
      current--;
      leaf = leaves[current];
      index = current;
      clearTimeout(leaf.timer);
      leaf.style.zIndex = 100;
      leaf.classList.remove('flipped');
      leaf.timer = setTimeout(function () { leaf.style.zIndex = total - index; }, FLIP_MS);
    } else {
      return;
    }
    updateUI();
  }

  prevBtn.onclick = function () { turn(-1); };
  nextBtn.onclick = function () { turn(1); };

  // Keyboard arrows (ignored while typing in an editable name).
  document.addEventListener('keydown', function (e) {
    if (e.target.isContentEditable) return;
    if (e.key === 'ArrowRight') turn(1);
    if (e.key === 'ArrowLeft')  turn(-1);
  });

  // Clickable page edges: right-hand pages go forward, left-hand pages go back.
  document.querySelectorAll('.hit').forEach(function (hit) {
    var dir = hit.parentElement.classList.contains('R') ? 1 : -1;
    hit.onclick = function () { turn(dir); };
    hit.onkeydown = function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); turn(dir); }
    };
  });

  updateUI();
})();

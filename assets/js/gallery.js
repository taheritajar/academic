(function () {
  'use strict';

  var viewer = document.querySelector('.gallery-viewer');
  var links = Array.prototype.slice.call(document.querySelectorAll('.gallery-image'));
  if (!viewer || typeof viewer.showModal !== 'function' || !links.length) return;

  var photo = viewer.querySelector('.gallery-viewer-photo');
  var caption = viewer.querySelector('figcaption');
  var count = viewer.querySelector('.gallery-viewer-count');
  var original = viewer.querySelector('.gallery-viewer-original');
  var stage = viewer.querySelector('.gallery-viewer-stage');
  var status = viewer.querySelector('.gallery-viewer-status');
  var previous = viewer.querySelector('.gallery-viewer-prev');
  var next = viewer.querySelector('.gallery-viewer-next');
  var current = 0;
  var opener;
  var touchStart;

  function show(index) {
    current = (index + links.length) % links.length;
    var link = links[current];
    var thumbnail = link.querySelector('img');
    stage.setAttribute('aria-busy', 'true');
    photo.hidden = true;
    status.textContent = 'Loading photo…';
    photo.alt = thumbnail.alt;
    caption.textContent = link.closest('figure').querySelector('figcaption').textContent;
    count.textContent = (current + 1) + ' / ' + links.length;
    original.href = link.href;
    photo.src = link.href;
  }

  photo.addEventListener('load', function () {
    photo.hidden = false;
    stage.setAttribute('aria-busy', 'false');
    status.textContent = '';
  });
  photo.addEventListener('error', function () {
    stage.setAttribute('aria-busy', 'false');
    status.textContent = 'Unable to load this photo. Try opening the original.';
  });

  links.forEach(function (link, index) {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', function (event) {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      show(index);
      viewer.showModal();
      document.documentElement.classList.add('gallery-viewer-open');
    });
  });

  previous.hidden = next.hidden = links.length < 2;
  previous.addEventListener('click', function () { show(current - 1); });
  next.addEventListener('click', function () { show(current + 1); });
  viewer.querySelector('.gallery-viewer-close').addEventListener('click', function () { viewer.close(); });
  viewer.addEventListener('click', function (event) {
    if (event.target !== viewer) return;
    var bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  });
  viewer.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  stage.addEventListener('touchstart', function (event) {
    touchStart = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }, { passive: true });
  stage.addEventListener('touchend', function (event) {
    if (!touchStart || !event.changedTouches.length) return;
    var dx = event.changedTouches[0].clientX - touchStart.x;
    var dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1));
    touchStart = null;
  }, { passive: true });
  stage.addEventListener('touchcancel', function () { touchStart = null; }, { passive: true });
  viewer.addEventListener('close', function () {
    document.documentElement.classList.remove('gallery-viewer-open');
    photo.removeAttribute('src');
    if (opener) opener.focus();
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  nav.addEventListener('click', function (event) {
    if (!event.target.closest('a')) return;
    nav.querySelector('.hidden-links').classList.add('hidden');
    nav.querySelector('button').classList.remove('close');
  });
});

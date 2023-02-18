window.addEventListener('load', function () {
  const mainNav = document.querySelector('nav#main')

  function mobilizeMainNav () {
    if (mainNav.offsetWidth >= window.innerWidth) {
      mainNav.classList.add('mobile', 'collapsed')
    } else {
      mainNav.classList.remove('mobile', 'collapsed')
    }
  }

  window.addEventListener('resize', mobilizeMainNav)
  mobilizeMainNav();

  const collapser = mainNav.querySelector('button.collapser')
  if (collapser) {
    collapser.addEventListener('click', (e) => {
      mainNav.classList.toggle('collapsed')
    });
  }
});

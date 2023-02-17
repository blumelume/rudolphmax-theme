window.addEventListener("load",  function () {
  let mainNav = document.querySelector('nav#main');
  let mainNavList = mainNav.querySelector('.nav-list');

  // Adding observers to all nav-items
  Array.from( mainNavList.childNodes ).forEach( (el) => {
    if (typeof el.classList != 'undefined') {

      //handles style changes on banner to check wrapping
      const observer = new MutationObserver(mutations =>
        mutations.forEach(mutationRecord => mobilizeMainNav())
      );
      observer.observe(el, { attributes : true, attributeFilter : ['style'] });
    }
  });


  function mobilizeMainNav() {
    Array.from( mainNavList.childNodes ).forEach( (el) => {
      if (typeof el.classList != 'undefined') {
        if (el.classList.contains('nav-item') && !el.classList.contains('current')) {

          const text = el.querySelector('.text');
          const lineHeight = parseInt(getComputedStyle(text).lineHeight, 10);
          const amountOfLinesTilAdjust = 2;

          if (text.offsetHeight >= (lineHeight * amountOfLinesTilAdjust)) {
            mainNav.classList.add('mobile', 'collapsed');
          } else {
            mainNav.classList.remove('mobile');
          }

        }

      }
    });
  }

  window.addEventListener("resize", mobilizeMainNav);
  mobilizeMainNav();

  const collapser = mainNav.querySelector('button.collapser');
  if (collapser) {
    collapser.addEventListener('click', (e) => {
      mainNav.classList.toggle('collapsed');
    });
  }
});
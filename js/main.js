window.addEventListener('load', function () {

  Array.from( document.getElementsByClassName('jump-stage') ).forEach( (el) => {
    el.setAttribute( 'aria-label', 'jump from stage to content' )
    
    el.addEventListener('click', (e) => {
      let targetStage = e.target.parentNode;

      if (targetStage) {
        let scrollTarget = targetStage.getBoundingClientRect().bottom;

        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: scrollTarget - 50
        });
      }
    })
  })

  let crYear = document.getElementById('cr-year');
  if (crYear) {
    crYear.innerHTML = new Date().getFullYear();
  }

})
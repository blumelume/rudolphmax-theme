export function insertYear () {
  let crYear = document.getElementById('cr-year');
  if (crYear) {
    crYear.innerHTML = new Date().getFullYear();
  }
}

export function initializeJumpStageButton (button) {
  button.setAttribute( 'aria-label', 'jump from stage to content' )
  button.addEventListener('click', (e) => {
    const targetStage = e.target.parentNode;
    if (targetStage) {
      let scrollTarget = targetStage.getBoundingClientRect().bottom;

      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: scrollTarget - 50
      });
    }
  })
}

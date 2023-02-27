/**
 * Inserts the current year into the copyright-notice in the footer
 * @param {string} crYearSelector The ID selector for the element the should be inserted into.
 */
export function insertYear (crYearSelector) {
  let crYear = document.getElementById(crYearSelector);
  if (crYear) {
    crYear.innerHTML = new Date().getFullYear();
  }
}

/**
 * Initilizes JumpStage Buttons with an aria-label and a click event-listener.
 * JumpStage Buttons scroll past their parent .stage element.
 * @param {HTMLElement} button A DOM Element reference to a JumpStage button.
 */
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

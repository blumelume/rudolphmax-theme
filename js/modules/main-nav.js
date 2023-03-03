/**
 * Initializes the main navbar with event-listeners for window-resize & -load
 * and click event-listener for the collapser button, which is used in the mobile nav.
 * The main navbar collapses into the mobile version on window-resize.
 */
export function initializeMainNav () {
  const mainNav = document.querySelector('nav#main')

  const mobilize = () => {
    if (mainNav.offsetWidth >= window.innerWidth) {
      mainNav.classList.add('mobile', 'collapsed')
    } else {
      mainNav.classList.remove('mobile', 'collapsed')
    }
  }

  ['load', 'resize'].forEach((e) => {
    window.addEventListener('resize', mobilize)
  })

  const collapser = mainNav.querySelector('button.collapser')
  if (collapser) {
    collapser.addEventListener('click', (e) => {
      mainNav.classList.toggle('collapsed')
    })
  }
}

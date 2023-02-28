import * as mainNav from "./modules/main-nav.js"
import * as components from "./modules/components.js";

mainNav.initializeMainNav();

window.addEventListener('load', function () {

  Array.from( 
    document.getElementsByClassName('jump-stage')
  ).forEach( components.initializeJumpStageButton )
  
  components.insertYear('cr-year')
})

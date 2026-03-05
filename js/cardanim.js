gsap.registerPlugin(Flip) 

// grab state
const state = Flip.getState(squares);
  
// Make DOM or styling changes
switchItUp();
  
// Animate from the initial state to the end state
Flip.from(state, {duration: 2, ease: "power1.inOut"});
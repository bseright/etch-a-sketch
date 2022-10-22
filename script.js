// Initial state
let directionX = "";
let secretDivX = document.querySelector(".secretDivX");
let scrollItemX = document.querySelector(".scrollItemX");

let initialTopX;
let currentTopX;
let previousTopX;

let xKnob = document.querySelector(".xKnob");
let xAngle = 0;

// assigning hover animation to knob when div hovered

secretDivX.addEventListener('mouseout', function() {
    xKnob.classList.toggle("largeKnobHover");
});

secretDivX.addEventListener('mouseover', function() {
    xKnob.classList.toggle("largeKnobHover");
});

// establishing y measurement of each scrollable element

function getInitialTopX(el) {
   let top = 0;
    let offsetBase = getInitialTopX.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getInitialTopX.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (el && el.ownerDocument === document && 'getBoundingClientRect' in el && offsetBase) {
        let boundingRect = el.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }
  
    initialTopX = top;
}

function getCurrentTopX(el) {
    let top = 0;
    let offsetBase = getCurrentTopX.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getCurrentTopX.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (el && el.ownerDocument === document && 'getBoundingClientRect' in el && offsetBase) {
        let boundingRect = el.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }
  
    currentTopX = top;
}

getInitialTopX(scrollItemX);

// adding scroll event
secretDivX.addEventListener('wheel', function() {
  
  getCurrentTopX(scrollItemX);
  
  if (previousTopX === undefined) {
    // leaving blank to avoid preemptive direction
  } else if (previousTopX < currentTopX || previousTopX === initialTopX && currentTopX === initialTopX) {
    console.log(previousTopX);
    console.log(currentTopX);
		direction = "UP"; 
  } else {
    console.log(previousTopX);
    console.log(currentTopX)
		directionX = "DOWN";
  }
  
	// saves the new position for iteration.
	previousTopX = currentTopX;
 
console.log(directionX);
});

// starting knob rotations

secretDivX.addEventListener('wheel', function() {

    function rotateX() {
        xAngle += 30;
        xKnob.style.transform = `rotate(${xAngle}deg)`;
    };

    rotateX();
});

let yKnob = document.querySelector(".yKnob");
let yAngle = 0;

yKnob.addEventListener('wheel', function() {

    function rotateY() {
        yAngle += 30;
        yKnob.style.transform = `rotate(${yAngle}deg)`;
    };

    rotateY();
});

let rKnob = document.querySelector(".rKnob");
let rAngle = 0;

rKnob.addEventListener('wheel', function() {

    function rotateR() {
        rAngle += 30;
        rKnob.style.transform = `rotate(${rAngle}deg)`;
    };

    rotateR();
});

let gKnob = document.querySelector(".gKnob");
let gAngle = 0;

gKnob.addEventListener('wheel', function() {

    function rotateG() {
        gAngle += 30;
        gKnob.style.transform = `rotate(${gAngle}deg)`;
    };

    rotateG();
});

let bKnob = document.querySelector(".bKnob");
let bAngle = 0;

bKnob.addEventListener('wheel', function() {

    function rotateB() {
        bAngle += 30;
        bKnob.style.transform = `rotate(${bAngle}deg)`;
    };

    rotateB();
});

// Initial state xKnob
let directionX = "";
let secretDivX = document.querySelector(".secretDivX");
let scrollItemX = document.querySelector(".scrollItemX");

let initialTopX;
let currentTopX;
let previousTopX;

let xKnob = document.querySelector(".xKnob");
let xAngle = 0;

// assigning hover animations to knobs when secretDivs are hovered
// xKnob hover animations
secretDivX.addEventListener('mouseover', function() {
    xKnob.classList.toggle("largeKnobHover");
});

secretDivX.addEventListener('mouseout', function() {
    xKnob.classList.toggle("largeKnobHover");
});

// establishing y measurement of each scrollable element
function getInitialTopX() {
    let top = 0;
    let offsetBase = getInitialTopX.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getInitialTopX.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (scrollItemX && scrollItemX.ownerDocument === document && 'getBoundingClientRect' in scrollItemX && offsetBase) {
        let boundingRect = scrollItemX.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }

    return initialTopX = top;
}

function getCurrentTopX() {
    let top = 0;
    let offsetBase = getCurrentTopX.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getCurrentTopX.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (scrollItemX && scrollItemX.ownerDocument === document && 'getBoundingClientRect' in scrollItemX && offsetBase) {
        let boundingRect = scrollItemX.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }
  
    return currentTopX = top;
}

// run functions on page load
getInitialTopX();
previousTopX = getCurrentTopX();

// adding scroll event
secretDivX.addEventListener('wheel', function() {

    setTimeout(() => { // setting timeout to allow for scroll to complete before measuring top

        getCurrentTopX();

        if (previousTopX < currentTopX || currentTopX === initialTopX) {

            console.log(previousTopX);
            console.log(currentTopX);
            directionX = "UP"; 

        } else {

            console.log(previousTopX);
            console.log(currentTopX)
            directionX = "DOWN";

        } 

        // saves the new position for iteration.
        previousTopX = currentTopX

        console.log(directionX);

        checkXRotation();

    }, 115); 

});

// xKnob rotation animatin
function checkXRotation() {

    function rotateXClock() {
        xAngle += 30;
        xKnob.style.transform = `rotate(${xAngle}deg)`;
    };

    function rotateXCounter() {
        xAngle -= 30;
        xKnob.style.transform = `rotate(${xAngle}deg)`;
    };

    if (directionX === "") {
        // leaving empty to avoid umprompted back scroll
    } else if (directionX === "DOWN") {
        rotateXClock();
    } else {
        rotateXCounter();
    }
    
};


//
//
// Initial state yKnob
//
// 
let directionY = "";
let secretDivY = document.querySelector(".secretDivY");
let scrollItemY = document.querySelector(".scrollItemY");

let initialTopY;
let currentTopY;
let previousTopY;

let yKnob = document.querySelector(".yKnob");
let yAngle = 0;

// yKnob hover animations
secretDivY.addEventListener('mouseover', function() {
    yKnob.classList.toggle("largeKnobHover");
});

secretDivY.addEventListener('mouseout', function() {
    yKnob.classList.toggle("largeKnobHover");
});

// establishing y measurement of scollItemY
function getInitialTopY() {
    let top = 0;
    let offsetBase = getInitialTopY.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getInitialTopY.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (scrollItemY && scrollItemY.ownerDocument === document && 'getBoundingClientRect' in scrollItemY && offsetBase) {
        let boundingRect = scrollItemY.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }

    return initialTopY = top;
}

function getCurrentTopY() {
    let top = 0;
    let offsetBase = getCurrentTopY.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getCurrentTopY.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (scrollItemY && scrollItemY.ownerDocument === document && 'getBoundingClientRect' in scrollItemY && offsetBase) {
        let boundingRect = scrollItemY.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }
  
    return currentTopY = top;
}

// run functions on page load
getInitialTopY();
previousTopY = getCurrentTopY();

// adding scroll event
secretDivY.addEventListener('wheel', function() {

    setTimeout(() => { // setting timeout to allow for scroll to complete before measuring top

        getCurrentTopY();

        if (previousTopY < currentTopY || currentTopY === initialTopY) {

            console.log(previousTopY);
            console.log(currentTopY);
            directionY = "UP"; 

        } else {

            console.log(previousTopY);
            console.log(currentTopY)
            directionY = "DOWN";

        } 

        // saves the new position for iteration.
        previousTopY = currentTopY

        console.log(directionY);

        checkYRotation();

    }, 115); 

});

// yKnob rotation animatin
function checkYRotation() {

    function rotateYClock() {
        yAngle += 30;
        yKnob.style.transform = `rotate(${yAngle}deg)`;
    };

    function rotateYCounter() {
        yAngle -= 30;
        yKnob.style.transform = `rotate(${yAngle}deg)`;
    };

    if (directionY === "") {
        // leaving empty to avoid umprompted back scroll
    } else if (directionY === "DOWN") {
        rotateYClock();
    } else {
        rotateYCounter();
    }
    
};
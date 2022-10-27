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

// establishing y measurement of scrollItemY
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

// run X functions on page load
getInitialTopX();
previousTopX = getCurrentTopX();

// adding X scroll event
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

        // saves the new position for iteration
        previousTopX = currentTopX;

        console.log(directionX);

        checkXRotation();

    }, 115); 

});

// xKnob rotation animation
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

// run Y functions on page load
getInitialTopY();
previousTopY = getCurrentTopY();

// adding Y wheel event
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

        // saves the new position for iteration
        previousTopY = currentTopY;

        console.log(directionY);

        checkYRotation();

    }, 115); 

});

// yKnob rotation animation
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


//
//
// Initial state rKnob
//
// 
let directionR = "";
let secretDivR = document.querySelector(".secretDivR");
let scrollItemR = document.querySelector(".scrollItemR");

let initialTopR;
let currentTopR;
let previousTopR;

let rKnob = document.querySelector(".rKnob");
let rAngle = 0;

// rKnob hover animations
secretDivR.addEventListener('mouseover', function() {
    rKnob.classList.toggle("smallKnobHover");
});

secretDivR.addEventListener('mouseout', function() {
    rKnob.classList.toggle("smallKnobHover");
});

// establishing y measurement of scollItemR
function getInitialTopR() {
    let top = 0;
    let offsetBase = getInitialTopR.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getInitialTopR.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (scrollItemR && scrollItemR.ownerDocument === document && 'getBoundingClientRect' in scrollItemR && offsetBase) {
        let boundingRect = scrollItemR.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }

    return initialTopR = top;
}

function getCurrentTopR() {
    let top = 0;
    let offsetBase = getCurrentTopR.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getCurrentTopR.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (scrollItemR && scrollItemR.ownerDocument === document && 'getBoundingClientRect' in scrollItemR && offsetBase) {
        let boundingRect = scrollItemR.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }
  
    return currentTopR = top;
}

// run R functions on page load
getInitialTopR();
previousTopR = getCurrentTopR();

// adding R wheel event
secretDivR.addEventListener('wheel', function() {

    setTimeout(() => { // setting timeout to allow for scroll to complete before measuring top

        getCurrentTopR();

        if (previousTopR < currentTopR || currentTopR === initialTopR) {

            console.log(previousTopR);
            console.log(currentTopR);
            directionR = "UP"; 

        } else {

            console.log(previousTopR);
            console.log(currentTopR)
            directionR = "DOWN";

        } 

        // saves the new position for iteration
        previousTopR = currentTopR;

        console.log(directionR);

        checkRRotation();

    }, 115); 

});

// rKnob rotation animation
function checkRRotation() {

    function rotateRClock() {
        rAngle += 30;
        rKnob.style.transform = `rotate(${rAngle}deg)`;
    };

    function rotateRCounter() {
        rAngle -= 30;
        rKnob.style.transform = `rotate(${rAngle}deg)`;
    };

    if (directionR === "") {
        // leaving empty to avoid umprompted back scroll
    } else if (directionR === "DOWN") {
        rotateRClock();
    } else {
        rotateRCounter();
    }
    
};

//
//
// Initial state gKnob
//
// 
let directionG = "";
let secretDivG = document.querySelector(".secretDivG");
let scrollItemG = document.querySelector(".scrollItemG");

let initialTopG;
let currentTopG;
let previousTopG;

let gKnob = document.querySelector(".gKnob");
let gAngle = 0;

// gKnob hover animations
secretDivG.addEventListener('mouseover', function() {
    gKnob.classList.toggle("smallKnobHover");
});

secretDivG.addEventListener('mouseout', function() {
    gKnob.classList.toggle("smallKnobHover");
});

// establishing y measurement of scollItemG
function getInitialTopG() {
    let top = 0;
    let offsetBase = getInitialTopG.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getInitialTopG.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (scrollItemG && scrollItemG.ownerDocument === document && 'getBoundingClientRect' in scrollItemG && offsetBase) {
        let boundingRect = scrollItemG.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }

    return initialTopG = top;
}

function getCurrentTopG() {
    let top = 0;
    let offsetBase = getCurrentTopG.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getCurrentTopG.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (scrollItemG && scrollItemG.ownerDocument === document && 'getBoundingClientRect' in scrollItemG && offsetBase) {
        let boundingRect = scrollItemG.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }
  
    return currentTopG = top;
}

// run G functions on page load
getInitialTopG();
previousTopR = getCurrentTopG();

// adding G wheel event
secretDivG.addEventListener('wheel', function() {

    setTimeout(() => { // setting timeout to allow for scroll to complete before measuring top

        getCurrentTopG();

        if (previousTopG < currentTopG || currentTopG === initialTopG) {

            console.log(previousTopG);
            console.log(currentTopG);
            directionG = "UP"; 

        } else {

            console.log(previousTopG);
            console.log(currentTopG)
            directionG = "DOWN";

        } 

        // saves the new position for iteration
        previousTopG = currentTopG;

        console.log(directionG);

        checkGRotation();

    }, 115); 

});

// gKnob rotation animation
function checkGRotation() {

    function rotateGClock() {
        gAngle += 30;
        gKnob.style.transform = `rotate(${gAngle}deg)`;
    };

    function rotateGCounter() {
        gAngle -= 30;
        gKnob.style.transform = `rotate(${gAngle}deg)`;
    };

    if (directionG === "") {
        // leaving empty to avoid umprompted back scroll
    } else if (directionG === "DOWN") {
        rotateGClock();
    } else {
        rotateGCounter();
    }
    
};

//
//
// Initial state gKnob
//
// 
let directionB = "";
let secretDivB = document.querySelector(".secretDivB");
let scrollItemB = document.querySelector(".scrollItemB");

let initialTopB;
let currentTopB;
let previousTopB;

let bKnob = document.querySelector(".bKnob");
let bAngle = 0;

// gKnob hover animations
secretDivB.addEventListener('mouseover', function() {
    bKnob.classList.toggle("smallKnobHover");
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
secretDivB.addEventListener('mouseout', function() {
    bKnob.classList.toggle("smallKnobHover");
});

// establishing y measurement of scollItemG
function getInitialTopB() {
    let top = 0;
    let offsetBase = getInitialTopB.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getInitialTopB.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (scrollItemB && scrollItemB.ownerDocument === document && 'getBoundingClientRect' in scrollItemB && offsetBase) {
        let boundingRect = scrollItemB.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }

    return initialTopB = top;
}

function getCurrentTopB() {
    let top = 0;
    let offsetBase = getCurrentTopB.offsetBase;
  
    if (!offsetBase && document.body) {
        offsetBase = getCurrentTopG.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
  
    if (scrollItemB && scrollItemB.ownerDocument === document && 'getBoundingClientRect' in scrollItemB && offsetBase) {
        let boundingRect = scrollItemB.getBoundingClientRect();
        let baseRect = offsetBase.getBoundingClientRect();
        top = boundingRect.top - baseRect.top;
    }
  
    return currentTopB = top;
}

// run B functions on page load
getInitialTopB();
previousTopB = getCurrentTopB();

// adding B wheel event
secretDivB.addEventListener('wheel', function() {

    setTimeout(() => { // setting timeout to allow for scroll to complete before measuring top

        getCurrentTopB();

        if (previousTopB < currentTopB || currentTopB === initialTopB) {

            console.log(previousTopB);
            console.log(currentTopB);
            directionB = "UP"; 

        } else {

            console.log(previousTopB);
            console.log(currentTopB)
            directionB = "DOWN";

        } 

        // saves the new position for iteration
        previousTopB = currentTopB;

        console.log(directionB);

        checkBRotation();

    }, 115); 

});

// gKnob rotation animation
function checkBRotation() {

    function rotateBClock() {
        bAngle += 30;
        bKnob.style.transform = `rotate(${bAngle}deg)`;
    };

    function rotateBCounter() {
        bAngle -= 30;
        bKnob.style.transform = `rotate(${bAngle}deg)`;
    };

    if (directionB === "") {
        // leaving empty to avoid umprompted back scroll
    } else if (directionB === "DOWN") {
        rotateBClock();
    } else {
        rotateBCounter();
    }
    
};
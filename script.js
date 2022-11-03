// creating grid
//
//
const canvas = document.querySelector(".canvas");

function makeDivs(numDivs) {
    let x = 1;
    let y = 25;

    for (let d = 0; d < numDivs; d++) {
        let gridItem = document.createElement("div");

        gridItem.classList.add(`gridColumn${x}`);
        gridItem.classList.add(`gridRow${y}`);

        if (x === 40) {
            x = 1;
            y--;
        } else {
            x++;
        }

        canvas.appendChild(gridItem);
    }
}

makeDivs(1000);

// creating function to obtain active row and column with knob interaction
//
//
let activeColumn = 1;
let activeRow = 1;
let activeCell = document.getElementsByClassName(`gridColumn${activeColumn} gridRow${activeRow}`);

activeCell.item(0).classList.toggle("blinking");

// generating color selection
//
//
let r = 21.24;
let g = 159.3;
let b = 99.12;
let currentColor = `rgb(${r},${g},${b})`;

let colorSelection = document.querySelector(".colorSelection");

// adding function to clear button
//
//
const clear = document.querySelector(".clearButton");

clear.addEventListener('click', function() {
    for (const cell of canvas.children) {
        cell.style.backgroundColor = "rgb(252,252,252)"
    }
});

// adding function to random button
//
//
const random = document.querySelector(".randomButton");

random.addEventListener('click', function() {
    function randomNumber() { 
        console.log(Math.random());
    } 
    randomNumber();
})

// Initial state xKnob
//
//
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
//
//
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

            directionX = "UP";

        } else {

            directionX = "DOWN";

        } 

        // saves the new position for iteration
        previousTopX = currentTopX;

        checkXRotation();

    }, 115); 

});

// xKnob rotation animation
function checkXRotation() {

    function rotateXClock() {
        xAngle += 27.6923;
        xAngle = Math.round(xAngle * 10000)/10000;

        if (xAngle >= 1079 && 1081 >= xAngle) {
            xAngle = 1080;
        }

        xKnob.style.transform = `rotate(${xAngle}deg)`;

        // preventing the active column from being set to beyond the canvas max
        if (activeColumn === 40) {

        } else {
            activeColumn++;
            activeCell.item(0).classList.remove("blinking"); // removing blinking class from current activeCell
            activeCell.item(0).style.backgroundColor = `${currentColor}`;
        }

        // selecting new activeCell and assigning blinking class
        activeCell = document.getElementsByClassName(`gridColumn${activeColumn} gridRow${activeRow}`);
        activeCell.item(0).classList.add("blinking");
    };

    function rotateXCounter() {
        xAngle -= 27.6923;
        xAngle = Math.round(xAngle * 10000)/10000;

        if (xAngle >= -1 && 1 >= xAngle) {
            xAngle = 0;
        }

        xKnob.style.transform = `rotate(${xAngle}deg)`;

        // preventing the active column from being set to beyond the canvas min
        if (activeColumn === 1) {

        } else {
            activeColumn--;
            activeCell.item(0).classList.remove("blinking"); // removing blinking class from current activeCell
            activeCell.item(0).style.backgroundColor = `${currentColor}`;
        }

        // selecting new activeCell and assigning blinking class
        activeCell = document.getElementsByClassName(`gridColumn${activeColumn} gridRow${activeRow}`);
        activeCell.item(0).classList.add("blinking");
    };

    if (directionX === "") {
        // leaving empty to avoid umprompted back scroll
    } else if (xAngle === 1080 && directionX === "DOWN" || xAngle === 0 && directionX === "UP") {
        xKnob.classList.add("jiggle");
        setTimeout(() => {
            xKnob.classList.remove("jiggle"); 
        }, 500); // be sure animation has time to run before class is removed
    } else if (directionX === "DOWN") {
        rotateXClock();
    } else {
        rotateXCounter();
    }
    
};


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

            directionY = "UP"; 

        } else {

            directionY = "DOWN";

        } 

        // saves the new position for iteration
        previousTopY = currentTopY;

        checkYRotation();

    }, 115); 

});

// yKnob rotation animation
function checkYRotation() {

    function rotateYClock() {
        yAngle += 30;
        yAngle = Math.round(yAngle * 10)/10;
        yKnob.style.transform = `rotate(${yAngle}deg)`;

        if (activeRow === 25) {

        } else {
            activeRow++;
            activeCell.item(0).classList.remove("blinking"); // removing blinking class from current activeCell
            activeCell.item(0).style.backgroundColor = `${currentColor}`;
        }

        // selecting new activeCell and assigning blinking class
        activeCell = document.getElementsByClassName(`gridColumn${activeColumn} gridRow${activeRow}`);
        activeCell.item(0).classList.add("blinking");
    };

    function rotateYCounter() {
        yAngle -= 30;
        yAngle = Math.round(yAngle * 10)/10;
        yKnob.style.transform = `rotate(${yAngle}deg)`;

        // preventing the active column from being set to beyond the canvas min
        if (activeRow === 1) {

        } else {
            activeRow--;
            activeCell.item(0).classList.remove("blinking"); // removing blinking class from current activeCell
            activeCell.item(0).style.backgroundColor = `${currentColor}`;
        }

        // selecting new activeCell and assigning blinking class
        activeCell = document.getElementsByClassName(`gridColumn${activeColumn} gridRow${activeRow}`);
        activeCell.item(0).classList.add("blinking");
    };

    if (directionY === "") {
        // leaving empty to avoid umprompted back scroll
    } else if (yAngle === 720 && directionY === "DOWN" || yAngle === 0 && directionY === "UP") {
        yKnob.classList.add("jiggle");
        setTimeout(() => {
            yKnob.classList.remove("jiggle"); 
        }, 500); // be sure animation has time to run before class is removed
    } else if (directionY === "DOWN") {
        rotateYClock();
    } else {
        rotateYCounter();
    }
    
};


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
let rAngle = 120;

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

            directionR = "UP"; 

        } else {

            directionR = "DOWN";

        } 

        // saves the new position for iteration
        previousTopR = currentTopR;

        checkRRotation();

    }, 115); 

});

// rKnob rotation animation
function checkRRotation() {

    function rotateRClock() {

        if (rAngle === 1440) {

            rKnob.classList.add("jiggle");
            setTimeout(() => {
                rKnob.classList.remove("jiggle"); 
            }, 500);

        } else {

        rAngle += 20;
        r += 3.54;
        r = Math.round(r * 100)/100

        rKnob.style.transform = `rotate(${rAngle}deg)`;
        currentColor = `rgb(${r},${g},${b})`;
        colorSelection.style.backgroundColor = currentColor;

        }
    };

    function rotateRCounter() {

        if (rAngle === 0) {

            rKnob.classList.add("jiggle");
            setTimeout(() => {
                rKnob.classList.remove("jiggle"); 
            }, 500);

        } else {

        rAngle -= 20;
        r -= 3.54;
        r = Math.round(r * 100)/100;

        rKnob.style.transform = `rotate(${rAngle}deg)`;
        currentColor = `rgb(${r},${g},${b})`;
        colorSelection.style.backgroundColor = currentColor;
        }
    };

    if (directionR === "") {
        // leaving empty to avoid umprompted back scroll
    } else if (directionR === "DOWN") {
        rotateRClock();
    } else {
        rotateRCounter();
    }
    
};

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
let gAngle = 900;

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

            directionG = "UP"; 

        } else {

            directionG = "DOWN";

        } 

        // saves the new position for iteration
        previousTopG = currentTopG;

        checkGRotation();

    }, 115); 

});

// gKnob rotation animation
function checkGRotation() {

    function rotateGClock() {

        if (gAngle === 1440) {

            gKnob.classList.add("jiggle");
            setTimeout(() => {
                gKnob.classList.remove("jiggle"); 
            }, 500);

        } else {

        gAngle += 20;
        g += 3.54;
        g = Math.round(g * 100)/100

        gKnob.style.transform = `rotate(${gAngle}deg)`;
        currentColor = `rgb(${r},${g},${b})`;
        colorSelection.style.backgroundColor = currentColor;

        }
    };

    function rotateGCounter() {

        if (gAngle === 0) {

            gKnob.classList.add("jiggle");
            setTimeout(() => {
                gKnob.classList.remove("jiggle"); 
            }, 500);

        } else {

        gAngle -= 20;
        g -= 3.54;
        g = Math.round(g * 100)/100;

        gKnob.style.transform = `rotate(${gAngle}deg)`;
        currentColor = `rgb(${r},${g},${b})`;
        colorSelection.style.backgroundColor = currentColor;

        }
    };

    if (directionG === "") {
        // leaving empty to avoid umprompted back scroll
    } else if (directionG === "DOWN") {
        rotateGClock();
    } else {
        rotateGCounter();
    }
    
};

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
let bAngle = 560;

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

            directionB = "UP"; 

        } else {

            directionB = "DOWN";

        } 

        // saves the new position for iteration
        previousTopB = currentTopB;

        checkBRotation();

    }, 115); 

});

// bKnob rotation animation
function checkBRotation() {

    function rotateBClock() {

        if (bAngle === 1440) {

            bKnob.classList.add("jiggle");
            setTimeout(() => {
                bKnob.classList.remove("jiggle"); 
            }, 500);

        } else {

        bAngle += 20;
        b += 3.54;
        b = Math.round(b * 100)/100

        bKnob.style.transform = `rotate(${bAngle}deg)`;
        currentColor = `rgb(${r},${g},${b})`;
        colorSelection.style.backgroundColor = currentColor;

        }
    };

    function rotateBCounter() {

        if (bAngle === 0) {

            bKnob.classList.add("jiggle");
            setTimeout(() => {
                bKnob.classList.remove("jiggle"); 
            }, 500);

        } else {

        bAngle -= 20;
        b -= 3.54;
        b = Math.round(b * 100)/100;

        bKnob.style.transform = `rotate(${bAngle}deg)`;
        currentColor = `rgb(${r},${g},${b})`;
        colorSelection.style.backgroundColor = currentColor;

        }
    };

    if (directionB === "") {
        // leaving empty to avoid umprompted back scroll
    } else if (directionB === "DOWN") {
        rotateBClock();
    } else {
        rotateBCounter();
    }
    
};
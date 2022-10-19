let xKnob = document.querySelector(".xKnob");
let xAngle = 0;

xKnob.addEventListener('click', function() {

    function rotateX() {
        xAngle += 30;
        xKnob.style.transform = `rotate(${xAngle}deg)`;
    };

    rotateX();
});

let yKnob = document.querySelector(".yKnob");
let yAngle = 0;

yKnob.addEventListener('click', function() {

    function rotateY() {
        yAngle += 30;
        yKnob.style.transform = `rotate(${yAngle}deg)`;
    };

    rotateY();
});

let rKnob = document.querySelector(".rKnob");
let rAngle = 0;

rKnob.addEventListener('click', function() {

    function rotateR() {
        rAngle += 30;
        rKnob.style.transform = `rotate(${rAngle}deg)`;
    };

    rotateR();
});

let gKnob = document.querySelector(".gKnob");
let gAngle = 0;

gKnob.addEventListener('click', function() {

    function rotateG() {
        gAngle += 30;
        gKnob.style.transform = `rotate(${gAngle}deg)`;
    };

    rotateG();
});

let bKnob = document.querySelector(".bKnob");
let bAngle = 0;

bKnob.addEventListener('click', function() {

    function rotateB() {
        bAngle += 30;
        bKnob.style.transform = `rotate(${bAngle}deg)`;
    };

    rotateB();
});
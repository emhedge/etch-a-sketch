// const divRow = document.createElement('div');
const container = document.querySelector('#container');
const rowItems = document.querySelectorAll('.rowItem');
const colItems = document.querySelectorAll('.colItem');

// top container selection, div creation, and id config
const topCtr = document.querySelector('#top');
const topLeft = document.createElement('div');
const topMid = document.createElement('div');
const topRight = document.createElement('div');
topLeft.setAttribute('id', 'topLeft');
topMid.setAttribute('id', 'topMid');
topRight.setAttribute('id', 'topRight');

// top title text
const toyTitle1 = document.createElement('p');
const toyTitle2 = document.createElement('p');
const toyTitle3 = document.createElement('p');
toyTitle1.setAttribute('class', 'toyTitle');
toyTitle1.setAttribute('id', 'toyTitle1');
toyTitle2.setAttribute('class', 'toyTitle');
toyTitle2.setAttribute('id', 'toyTitle2');
toyTitle3.setAttribute('class', 'toyTitle');
toyTitle3.setAttribute('id', 'toyTitle3');
toyTitle1.textContent = 'MAGIC';
toyTitle2.textContent = 'Etch a Sketch';
toyTitle3.textContent = 'SCREEN';

// bottom container selection, div creation, and id config
const bottomCtr = document.querySelector('#bottom');
const bottomLeft = document.createElement('div');
const bottomMid = document.createElement('div');
const bottomRight = document.createElement('div');
bottomLeft.setAttribute('id', 'bottomLeft');
bottomMid.setAttribute('id', 'bottomMid');
bottomRight.setAttribute('id', 'bottomRight');

// bottom container knob img creation, src specification
const knob1 = document.createElement('img');
const knob2 = document.createElement('img');
knob1.src = './images/knob.svg'
knob2.src = './images/knob.svg'

// append top and bottom ctr and child elements
topCtr.appendChild(topLeft);
topCtr.appendChild(topMid);
topCtr.appendChild(topRight);
topMid.appendChild(toyTitle1);
topMid.appendChild(toyTitle2);
topMid.appendChild(toyTitle3);
bottomLeft.appendChild(knob1);
bottomRight.appendChild(knob2);
bottomCtr.appendChild(bottomLeft);
bottomCtr.appendChild(bottomMid);
bottomCtr.appendChild(bottomRight);


// init declaration of selectedColor and args
let selectedColor = 'black';
let args = 32;

// init default color functionality on page load
document.addEventListener('DOMContentLoaded',() => {
    addColor();
});

const buttonDiv = document.querySelector('#buttonDiv');
const eraser = document.querySelector('button#eraser.specialButton');


// button event handlers for various colors
buttonDiv.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {

        case 'changeGrid':
            changeGrid();
            addColor();
            break;
        case 'eraser':
            reset();
            makeGrid();
            break;
        case 'white':
            addColor();
            selectedColor = 'white';
            break;
        case 'black':
            addColor();
            selectedColor = 'black';
            break
        case 'blue':
            addColor();
            selectedColor = 'blue';
            break;
        case 'green':
            addColor();
            selectedColor = 'green';
            break;
        case 'yellow':
            addColor();
            selectedColor = 'yellow';
            break;
        case 'orange':
            addColor();
            selectedColor = 'orange';
            break;
        case 'red':
            addColor();
            selectedColor = 'rgb(197, 5, 5)';
            break;
        case 'purple':
            addColor();
            selectedColor = 'purple';
            break;
        case 'rainbow':
            paintRainbow();
            selectedColor = getRainbow();
            break;
    };
});

// reusable function for obtaining random RGB
function getRainbow() {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    let rainbowRGB = 'rgb(' + r + ',' + g + ',' + b + ')';

    return rainbowRGB;
};

// function for painting with rainbow color
// init declaration of all colItems
// uses a for-loop to run through all colItems and add event listener
// when mouse enters each rainbowTarget, the getRainbow() function is 
// called and that value is applied as the event target background
function paintRainbow() {
    const rainbowTarget = document.querySelectorAll('.colItem');
    selectedColor = 'black';

    if (isMobile() == false) {
        for (let i = 0; i < rainbowTarget.length; i++) {
            
            rainbowTarget[i].addEventListener('mouseenter', function (e) {
                e.target.style.background = getRainbow();
            });
                    
            console.log('something was painted rainbow');
            
        }
    }
    if (isMobile()) {
        for (let i = 0; i < rainbowTarget.length; i++) {
        
            rainbowTarget[i].addEventListener('mousedown', function (e) {
                e.target.style.background = getRainbow();
            }); 
            console.log('something was painted rainbow on mobile');};
    }
}

// adds color to colItem background based upon value of selectedColor
// adds event listener to each colItem, when mouseover occurs,
// background color is changed to selectedColor;

function addColor() {
    const paintTarget = document.querySelectorAll('.colItem');


    if (isMobile() == false) {
        if (selectedColor !== rainbow) {
            for (let i = 0; i < paintTarget.length; i++) {
            
                paintTarget[i].addEventListener('mouseenter', function (e) {
                    e.target.style.background = selectedColor;
                    console.log('something was painted');
                }); 
            } 
        }
    }

    if (isMobile()) {
        for (let i = 0; i < paintTarget.length; i++) {
        
            paintTarget[i].addEventListener('mousedown', function (e) {
                e.target.style.background = selectedColor;
                console.log('something was painted on mobile');
            }); 
        };
    }
};




// function for creating 16x16 divs
// for loop with i up to 16
// each iteration creates a new div and appends it
// might need distinct functions for row and column
function makeGrid() {
    // args = 16;

    for (let i = 0; i < args; i++) {
        
        // creates a row
        // each row has a for loop creating args divs
        let newRowItem = document.createElement('div');
        newRowItem.setAttribute('class', 'rowItem');

        // in each row, creates args columns
        for (let i= 0; i < args; i++) {
            let newColItem = document.createElement('div');
            newColItem.setAttribute('class', 'colItem');
            newRowItem.appendChild(newColItem);
        }
         // appends the row
        container.appendChild(newRowItem);        
    };
};

makeGrid();

// wipes the original colItems and rowItems
function reset() {
    const resetColItems = container.querySelectorAll(".colItem");
    resetColItems.forEach((e) => e.parentNode.removeChild(e));

    const resetRowItems = container.querySelectorAll(".rowItem");
    resetRowItems.forEach((e) => e.parentNode.removeChild(e));
};

// calls reset() to wipe prev grid, then prompts user for new amt
// builds new grid based on new args value
function changeGrid() {

    function confirmRange(args) {
        return args >= 2 && args <=100
    };

    args = prompt("How many squares should we use? \n\nEnter a number between 2 and 100 to create a x-by-x square. \n\nKeep in mind, a lower number means a larger brush and vice versa.", '');
    
    confirmRange();

    if (confirmRange(args) == true) {
        reset();
        makeGrid(args);
    } else if (args == "null" || args == null || args == "" ) {
        return;
    } else if ((confirmRange(args) <2) | (confirmRange(args) > 100)) {
        alert('Sorry, you must select a number between 2 and 100.');
        changeGrid();
    // } else if (args == NaN) {
    //     alert('Sorry about that - you can only put in integers between 2 and 100.');
    };
        // prompt to reload page
};


// function resetGrid() {

// }

// function changeGrid() {
//     resetGrid();
//     args = getNewGridDimensions();
//     container.removeChild()

// }




// tracks mouseenter and mouseleave to confirm each box handles events
// function enterBox() {
//     let box = document.querySelector('#container');
//     // for (let i = 0; i < box.length; i++) {
//         box.addEventListener('mouseenter', function() {
//             console.log('mouse entered the grid');
//             trackMouse();
//         });

//         box.addEventListener('mouseleave', function() {
//             console.log('mouse left the grid');
//             ignoreMouse();
//         });
//     };

// adds event listener for mouse tracking
// function trackMouse() {
//     let track = document.querySelectorAll('.colItem');
//     for (let i = 0; i < track.length; i++) {
//         track[i].addEventListener('mousemove', (e) => {
            
//             let log = document.querySelector('#log');
//             log.innerText = `
//             Screen X/Y: (${e.screenX}, ${e.screenY})
//             Client X/Y: (${e.clientX}, ${e.clientY})`
//         });
//     };
// };

// removes event listener for mouse tracking to save memory
// function ignoreMouse() {
//     let ignoreMouse = document.querySelector('#container');
//     ignoreMouse.removeEventListener('mousemove', (e) => {
//         let log = document.querySelector('#log');
//         log.innerText = `
//         Screen X/Y: (${e.screenX}, ${e.screenY})
//         Client X/Y: (${e.clientX}, ${e.clientY})`
//     });
//     console.log('no longer tracking mouse');
// };


// addColor();
// enterBox();


// mobile
function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/;
    console.log('mobile detected')
    return regex.test(navigator.userAgent);
}

isMobile();

// if (isMobile()) {
    
//     const canvas = document.createElement('canvas')
//     canvas.setAttribute('id', 'canvas');
//     game.replaceChild(canvas, container);

//     function startup() {
//         const el = document.getElementById("canvas");
//         el.addEventListener("touchstart", handleStart);
//         // el.addEventListener("touchend", handleEnd);
//         // el.addEventListener("touchcancel", handleCancel);
//         // el.addEventListener("touchmove", handleMove);
//         console.log("Initialized.");
//         // log("Initialized");
//       }
      
//       document.addEventListener("DOMContentLoaded", startup);
//       const ongoingTouches = [];

//       function handleStart(evt) {
//         evt.preventDefault();
//         console.log("touchstart.");
//         // log("touchstart.");
//         const el = document.getElementById("canvas");
//         const ctx = el.getContext("2d");
//         const touches = evt.changedTouches;
      
//         for (let i = 0; i < touches.length; i++) {
//           console.log(`touchstart: ${i}.`);
//           ongoingTouches.push(copyTouch(touches[i]));
//           const color = colorForTouch(touches[i]);
//           console.log(`color of touch with id ${touches[i].identifier} = ${color}`);
//           ctx.beginPath();
//           ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false); // a circle at the start
//           ctx.fillStyle = color;
//           ctx.fill();
//         }
//       }

//       function handleMove(evt) {
//         evt.preventDefault();
//         const el = document.getElementById("canvas");
//         const ctx = el.getContext("2d");
//         const touches = evt.changedTouches;
      
//         for (let i = 0; i < touches.length; i++) {
//           const color = colorForTouch(touches[i]);
//           const idx = ongoingTouchIndexById(touches[i].identifier);
      
//           if (idx >= 0) {
//             console.log(`continuing touch ${idx}`);
//             ctx.beginPath();
//             console.log(
//               `ctx.moveTo( ${ongoingTouches[idx].pageX}, ${ongoingTouches[idx].pageY} );`,
//             );
//             ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
//             console.log(`ctx.lineTo( ${touches[i].pageX}, ${touches[i].pageY} );`);
//             ctx.lineTo(touches[i].pageX, touches[i].pageY);
//             ctx.lineWidth = 4;
//             ctx.strokeStyle = color;
//             ctx.stroke();
      
//             ongoingTouches.splice(idx, 1, copyTouch(touches[i])); // swap in the new touch record
//           } else {
//             console.log("can't figure out which touch to continue");
//           }
//         }
//       }
      
//       function handleEnd(evt) {
//         evt.preventDefault();
//         console.log("touchend");
//         const el = document.getElementById("canvas");
//         const ctx = el.getContext("2d");
//         const touches = evt.changedTouches;
      
//         for (let i = 0; i < touches.length; i++) {
//           const color = colorForTouch(touches[i]);
//           let idx = ongoingTouchIndexById(touches[i].identifier);
      
//           if (idx >= 0) {
//             ctx.lineWidth = 4;
//             ctx.fillStyle = color;
//             ctx.beginPath();
//             ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
//             ctx.lineTo(touches[i].pageX, touches[i].pageY);
//             ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8); // and a square at the end
//             ongoingTouches.splice(idx, 1); // remove it; we're done
//           } else {
//             console.log("can't figure out which touch to end");
//           }
//         }
//       }

//       function handleCancel(evt) {
//         evt.preventDefault();
//         console.log("touchcancel.");
//         const touches = evt.changedTouches;
      
//         for (let i = 0; i < touches.length; i++) {
//           let idx = ongoingTouchIndexById(touches[i].identifier);
//           ongoingTouches.splice(idx, 1); // remove it; we're done
//         }
//       }

//       function copyTouch({ identifier, pageX, pageY }) {
//         return { identifier, pageX, pageY };
//       }

//       function colorForTouch() {
//         // let r = touch.identifier % 16;
//         // let g = Math.floor(touch.identifier / 3) % 16;
//         // let b = Math.floor(touch.identifier / 7) % 16;
//         // r = r.toString(16); // make it a hex digit
//         // g = g.toString(16); // make it a hex digit
//         // b = b.toString(16); // make it a hex digit
//         // const color = `#${r}${g}${b}`;
//         const color = selectedColor;
//         return color;
//       }


    // wrong stuff  
    // for (let i = 0; i < paintTarget.length; i++) {
    
    //     paintTarget[i].addEventListener('touchstart', function (e) {
    //         e.target.style.background = selectedColor;
    //         console.log('something was painted on mobile');
    //     }); 
    // }
// }
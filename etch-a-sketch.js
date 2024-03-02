const divRow = document.createElement('div');
const divColumn = document.createElement('div');

// init declaration of selectedColor and args
let selectedColor = '';
let args = 16;

divRow.setAttribute('class', 'row');
divColumn.setAttribute('class', 'column');

// add a button to the top of the screen that will send the user 
// a popup asking for the number of squares per side for the new grid. Once 
// entered, the existing grid should be removed and a new grid should be 
// generated in the same total space as before (e.g. 960px wide) so that 
// you’ve got a new sketch pad. 
const buttonDiv = document.querySelector('#buttonDiv');

// button event handlers for various colors
buttonDiv.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
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
            selectedColor = 'red';
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
        
    for (let i = 0; i < rainbowTarget.length; i++) {
        
        rainbowTarget[i].addEventListener('mouseenter', function (e) {
            e.target.style.background = getRainbow();
        });
                
        console.log('something was painted rainbow');
        
    };
};

// adds color to colItem background based upon value of selectedColor
// adds event listener to each colItem, when mouseover occurs,
// background color is changed to selectedColor;
function addColor() {
    const paintTarget = document.querySelectorAll('.colItem');

    if (selectedColor !== rainbow) {
        for (let i = 0; i < paintTarget.length; i++) {
        
            paintTarget[i].addEventListener('mouseenter', function (e) {
                e.target.style.background = selectedColor;
                console.log('something was painted ');
            }); 
        };
    }; 
};

// function for creating 16x16 divs
// for loop with i up to 16
// each iteration creates a new div and appends it
// might need distinct functions for row and column
function makeGrid() {
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
        divRow.appendChild(newRowItem);        
    };
};

makeGrid();
container.appendChild(divRow); 

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

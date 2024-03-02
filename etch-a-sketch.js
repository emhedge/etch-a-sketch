const divRow = document.createElement('div');
const divColumn = document.createElement('div');

divRow.setAttribute('class', 'row');
divColumn.setAttribute('class', 'column');

// function for creating 16x16 divs
// for loop with i up to 16
// each iteration creates a new div and appends it
// might need distinct functions for row and column
let args = 16

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
function enterBox() {
    let box = document.querySelector('#container');
    // for (let i = 0; i < box.length; i++) {
        box.addEventListener('mouseenter', function() {
            console.log('mouse entered the grid');
            trackMouse();
        });

        box.addEventListener('mouseleave', function() {
            console.log('mouse left the grid');
            ignoreMouse();
        });
    };

// adds event listener for mouse tracking
function trackMouse() {
    let track = document.querySelectorAll('.colItem');
    for (let i = 0; i < track.length; i++) {
        track[i].addEventListener('mousemove', (e) => {
            let log = document.querySelector('#log');
            log.innerText = `
            Screen X/Y: (${e.screenX}, ${e.screenY})
            Client X/Y: (${e.clientX}, ${e.clientY})`
        });
    };
};

// removes event listener for mouse tracking to save memory
function ignoreMouse() {
    let ignoreMouse = document.querySelector('#container');
    ignoreMouse.removeEventListener('mousemove', (e) => {
        let log = document.querySelector('#log');
        log.innerText = `
        Screen X/Y: (${e.screenX}, ${e.screenY})
        Client X/Y: (${e.clientX}, ${e.clientY})`
    });
    console.log('no longer tracking mouse');
};



enterBox();

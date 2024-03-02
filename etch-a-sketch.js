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
        // appends the row
        let newRowItem = document.createElement('div');
        newRowItem.setAttribute('class', 'rowItem');
        for (let i= 0; i < args; i++) {
            let newColItem = document.createElement('div');
            newColItem.setAttribute('class', 'colItem');
            newRowItem.appendChild(newColItem);
        }
        divRow.appendChild(newRowItem);        
        


    };
};

makeGrid();

// let newRow = document.createElement('div');
// newRow = document.setAttribute('class', 'row');


// divColumn.appendChild(newRow);

// divColumn.appendChild(divRow);
container.appendChild(divRow); 

let colorOne = document.getElementById('color1');
let colorTwo = document.getElementById('color2');
let currentDirection = 'to right';
let outputCode = document.getElementById('css');

function setDirection(value, _this) {
    let directions = document.querySelectorAll(".buttons button");
    for (let i of directions) {
        i.classList.remove('active');
    }
    _this.classList.add('active');
    currentDirection = value;
    generateCode(); // Call generateCode() immediately after setting the direction
}

function generateCode() {
    outputCode.value = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`;
    document.body.style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`;
}

// Initial code generation
generateCode();
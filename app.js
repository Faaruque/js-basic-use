let inputFirst = document.querySelector('#input');
let inputLast = document.querySelector('#input2');
let successBtn = document.querySelector('.btn-success');
let resetBtn = document.querySelector('.btn-reset');
let result = document.getElementById("dynamic__bmi");


function jogkoro(){
var fNumber = Number(inputFirst.value);
var lNumber = Number(inputLast.value);
var fullNumber = fNumber + lNumber;
result.textContent = fullNumber;
}

function reset(){
    inputFirst.value = "";
    inputLast.value = "";
    result.textContent = "_________";
    message.textContent = ""
}
function eventHandler(){
    if(Number(inputFirst.value) && Number(inputLast.value)){
        jogkoro();
    } else {
        alert("Please provide valid inputs");
        reset();
    }
}

successBtn.addEventListener('click', eventHandler);
resetBtn.addEventListener('click', reset);
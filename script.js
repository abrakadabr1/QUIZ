let inputData = document.querySelector(".input-data");
let submitButton = document.querySelector('.submit');
let nextButtonOne = document.querySelector(".next-one");
let body = document.querySelector('body');
let firstCon = document.querySelector(".first");
let secondCon = document.querySelector('.second');
let thirdCon = document.querySelector('.third');
let fourCon = document.querySelector('.four');
let fiveCon = document.querySelector('.five');

nextButtonOne.onclick = function(){
    let x = inputData.value;
    alert(x);
};
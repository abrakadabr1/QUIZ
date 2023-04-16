let con1 = document.querySelector('.con1');
let con2 = document.querySelector('.con2');
let con3 = document.querySelector('.con3');
let con4 = document.querySelector('.con4');
let con5 = document.querySelector('.con5');

let submit1 = document.querySelector('.submit1');
let submit2 = document.querySelector('.submit2');
let submit3 = document.querySelector('.submit3');
let submit4 = document.querySelector('.submit4');


let data1;
let data2;
let data3;
let data4;
let data5;

submit1.onclick = () => {
	con1.style.display = 'none';
    con2.style.display = 'block';
};
submit2.onclick = () => {
	con2.style.display = 'none';
    con3.style.display = 'block';
    
};
submit3.onclick = () => {
	con3.style.display = 'none';
    con4.style.display = 'block';
    
};
submit4.onclick = () => {
	con4.style.display = 'none';
    con5.style.display = 'block';
    
};

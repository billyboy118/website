let screenVal = "";
let screenVal1 = "";
let sign;

let count;

const screen = document.querySelector('#screen');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const div = document.querySelector('#div');
const c = document.querySelector('#c');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const x = document.querySelector('#x');
const blank = document.querySelector('#blank');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const take = document.querySelector('#take');
const del = document.querySelector('#del');
const zero = document.querySelector('#zero');
const fullStop = document.querySelector('#fullStop');
const plus = document.querySelector('#plus');
const equals = document.querySelector('#equals');

screen.textContent = 0;

let minus = (a, b) => a - b;
let add = (a, b) => a + b;
let multiply = (a, b) => a * b;
function divide (a, b) {
   if (b === 0) {
      return "No No No"
   } else { 
      return a / b;
   }
}
let operate = (operator, a, b) => operator(a, b);
let sign1 = operate;

one.addEventListener("click", function (v) {
   screenVal = screenVal + "1";
   screen.textContent = screenVal;
 });

two.addEventListener("click", function (v) {
   screenVal = screenVal + "2";
   screen.textContent = screenVal;
});

three.addEventListener("click", function (v) {
   screenVal = screenVal + "3";
   screen.textContent = screenVal;
});

four.addEventListener("click", function (v) {
   screenVal = screenVal + "4";
   screen.textContent = screenVal;
});

five.addEventListener("click", function (v) {
   screenVal = screenVal + "5";
   screen.textContent = screenVal;
});

six.addEventListener("click", function (v) {
   screenVal = screenVal + "6";
   screen.textContent = screenVal;
});

seven.addEventListener("click", function (v) {
   screenVal = screenVal + "7";
   screen.textContent = screenVal;
});

eight.addEventListener("click", function (v) {
   screenVal = screenVal + "8";
   screen.textContent = screenVal;
});

nine.addEventListener("click", function (v) {
   screenVal = screenVal + "9";
   screen.textContent = screenVal;
});

zero.addEventListener("click", function (v) {
   screenVal = screenVal + "0";
   screen.textContent = screenVal;
   
});

fullStop.addEventListener("click", function (v) {
   if (screenVal.includes(".")) {
      } else {   ;
   screenVal = screenVal + ".";
   screen.textContent = screenVal;
   }
});


plus.addEventListener("click", function (v) {

if (screenVal === "") return;

   if ((sign1 === minus || sign1 === divide || sign1 === multiply) && (sign1 === sign)) {
      screenVal1 = parseFloat(screenVal1);
      screenVal = parseFloat(screenVal);
      screenVal = operate(sign1, screenVal1, screenVal)
      screenVal1 = screenVal;
      screen.textContent = screenVal1;
      screenVal = "";
      sign1 = add;
      sign = add;
   } else if (sign === sign1 || (sign === add && sign1 !== operate)) {
      screenVal1 = parseFloat(screenVal1);
      screenVal = parseFloat(screenVal);
      screenVal = operate(sign, screenVal1, screenVal)
      screenVal1 = screenVal;
      screen.textContent = screenVal1;
      screenVal = "";
      sign1 = add;
   } else {
      sign = add;
      screenVal1 = screenVal;
      screenVal = "";
      screen.textContent = screenVal1;
      sign1 = add;
   }  
 });
 
take.addEventListener("click", function (v) {
   if (screenVal === "") return;

   if ((sign1 === add ||sign1 === divide || sign1 === multiply) && ( sign === sign1)) {
      screenVal1 = parseInt(screenVal1);
      screenVal = parseInt(screenVal);
      screenVal = operate(sign1, screenVal1, screenVal);
      screenVal1 = screenVal;
      screen.textContent = screenVal1;
      screenVal = "";
      sign = minus;
      sign1 = minus;
   } else if (sign === sign1 || (sign === minus && sign1 !== operate)) {
      screenVal1 = parseInt(screenVal1);
      screenVal = parseInt(screenVal);
      screenVal = operate(sign, screenVal1, screenVal);
      screenVal1 = screenVal;
      screen.textContent = screenVal1;
      screenVal = "";
      sign1 = minus;
   } else {
      sign = minus;
      screenVal1 = screenVal;
      screenVal = "";
      screen.textContent = screenVal1;
      sign1 = minus;
   }  
});

div.addEventListener("click", function (v) {
   if (screenVal === "") return;

   if ((sign1 === add ||sign1 === minus || sign1 === multiply) && ( sign === sign1)) {
      screenVal1 = parseInt(screenVal1);
      screenVal = parseInt(screenVal);
      screenVal = operate(sign1, screenVal1, screenVal);
      screenVal1 = screenVal;
      screen.textContent = screenVal1;
      screenVal = "";
      sign = divide;
      sign1 = divide;
   } else if (sign === sign1 || (sign === divide && sign1 !== operate)) {
      screenVal1 = parseInt(screenVal1);
      screenVal = parseInt(screenVal);
      screenVal = operate(sign, screenVal1, screenVal);
      screenVal1 = screenVal;
      screen.textContent = screenVal1;
      screenVal = "";
      sign1 = divide;
   } else {
      sign = divide;
      screenVal1 = screenVal;
      screenVal = "";
      screen.textContent = screenVal1;
      sign1 = divide;
   } 
});

x.addEventListener("click", function (v) {
   if (screenVal === "") return;

   if ((sign1 === add ||sign1 === divide || sign1 === minus) && ( sign === sign1)) {
      screenVal1 = parseInt(screenVal1);
      screenVal = parseInt(screenVal);
      screenVal = operate(sign1, screenVal1, screenVal);
      screenVal1 = screenVal;
      screen.textContent = screenVal1;
      screenVal = "";
      sign = multiply;
      sign1 = multiply;
   } else if (sign === sign1 || (sign === multiply && sign1 !== operate)) {
      screenVal1 = parseInt(screenVal1);
      screenVal = parseInt(screenVal);
      screenVal = operate(sign, screenVal1, screenVal);
      screenVal1 = screenVal;
      screen.textContent = screenVal1;
      screenVal = "";
      sign1 = multiply;
   } else {
      sign = multiply;
      screenVal1 = screenVal;
      screenVal = "";
      screen.textContent = screenVal1;
      sign1 = multiply;
   } 
});

equals.addEventListener("click", function (v) {
   if (screenVal === "") return;

   screenVal1 = parseFloat(screenVal1);
   screenVal = parseFloat(screenVal);
   screenVal = operate(sign, screenVal1, screenVal)
   screen.textContent = screenVal.toFixed(2);
   sign = "WW";
   sign1 = "tt";
 });

c.addEventListener("click", function (v) {
   screenVal1 = ""
   screenVal = ""
   screen.textContent = 0;
   sign = "";  
});

del.addEventListener("click", function (v) {
   if ((screenVal.length > 0) && (screenVal != null)) {
      screenVal = screenVal.substring(0, screenVal.length - 1);
      screen.textContent = screenVal;
   }
   
});

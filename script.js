
const bill = document.getElementById("bill");
const person = document.getElementById("person");
const tipAmount = document.getElementById("tip_amount");
const totalWrite = document.getElementById("total");
const five = document.getElementById("five");

// YUZDE 5 


document.getElementById("five").onclick = function () {
  yuzde5 = (bill.value * 0.05) / person.value;
  total = bill.value * 0.05;
  tipAmount.innerHTML = yuzde5.toFixed(2);
  totalWrite.innerHTML = total.toFixed(2);
  console.log(yuzde5);
};

// YUZDE 10 
document.getElementById("ten").onclick = function () {
  yuzde10 = (bill.value * 0.1) / person.value;
  total = bill.value * 0.1;
  tipAmount.innerHTML = yuzde10.toFixed(2);
  totalWrite.innerHTML = total.toFixed(2);
  console.log(yuzde10);
};

// YUZDE 15 
document.getElementById("fifteen").onclick = function () {
  yuzde15 = (bill.value * 0.15) / person.value;
  total = bill.value * 0.15;
  tipAmount.innerHTML = yuzde15.toFixed(2);
  totalWrite.innerHTML = total.toFixed(2);
  console.log(yuzde15);
};

// YUZDE 25 ;
document.getElementById("twenty_five").onclick = function () {
  yuzde25 = (bill.value * 0.25) / person.value;
  total = bill.value * 0.25;
  tipAmount.innerHTML = yuzde25.toFixed(2);
  totalWrite.innerHTML = total.toFixed(2);
  console.log(yuzde25);
};

// YUZDE 50 ;
document.getElementById("fifty").onclick = function () {
  yuzde50 = (bill.value * 0.5) / person.value;
  total = bill.value * 0.5;
  tipAmount.innerHTML = yuzde50.toFixed(2);
  totalWrite.innerHTML = total.toFixed(2);
  console.log(yuzde50);
};

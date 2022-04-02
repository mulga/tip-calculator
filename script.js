// YUZDE 5

document.getElementById("five").onclick = function () {
  const bill = document.getElementById("bill").value;
  const person = document.getElementById("person").value;
  yuzde5 = (bill * 0.05) / person;
  total = bill * 0.05;
  document.getElementById("tip_amount").innerHTML = yuzde5.toFixed(2);
  document.getElementById("total").innerHTML = total.toFixed(2);
  console.log(yuzde5);
};

// YUZDE 10 
document.getElementById("ten").onclick = function () {
  const bill = document.getElementById("bill").value;
  const person = document.getElementById("person").value;
  yuzde5 = (bill * 0.1) / person;
  total = bill * 0.1;
  document.getElementById("tip_amount").innerHTML = yuzde5.toFixed(2);
  document.getElementById("total").innerHTML = total.toFixed(2);
  console.log(yuzde5);
};

// YUZDE 15 
document.getElementById("fifteen").onclick = function () {
  const bill = document.getElementById("bill").value;
  const person = document.getElementById("person").value;
  yuzde5 = (bill * 0.15) / person;
  total = bill * 0.15;
  document.getElementById("tip_amount").innerHTML = yuzde5.toFixed(2);
  document.getElementById("total").innerHTML = total.toFixed(2);
  console.log(yuzde5);
};

// YUZDE 25 
document.getElementById("twenty_five").onclick = function () {
  const bill = document.getElementById("bill").value;
  const person = document.getElementById("person").value;
  yuzde5 = (bill * 0.25) / person;
  total = bill * 0.25;
  document.getElementById("tip_amount").innerHTML = yuzde5.toFixed(2);
  document.getElementById("total").innerHTML = total.toFixed(2);
  console.log(yuzde5);
};

// YUZDE 50 
document.getElementById("fifty").onclick = function () {
  const bill = document.getElementById("bill").value;
  const person = document.getElementById("person").value;
  yuzde5 = (bill * 0.5) / person;
  total = bill * 0.5;
  document.getElementById("tip_amount").innerHTML = yuzde5.toFixed(2);
  document.getElementById("total").innerHTML = total.toFixed(2);
  console.log(yuzde5);
};

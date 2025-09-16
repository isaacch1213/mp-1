let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let output = document.getElementById("output");

function doAdd() {
  output.style.color = "#f5e9dc";
  output.innerHTML = String(Number(input1.value) + Number(input2.value));
}

function doSubtract() {
  output.innerHTML = String(Number(input1.value) - Number(input2.value));
  if (Number(output.innerHTML) < 0) {
    output.style.color = "red";
  }
}

function doMultiply() {
  output.style.color = "#f5e9dc";
  output.innerHTML = String(Number(input1.value) * Number(input2.value));
}

function doDivide() {
  output.style.color = "#f5e9dc";
  output.innerHTML = String(Number(input1.value) / Number(input2.value));
}

function doPower() {
  output.style.color = "#f5e9dc";
  output.innerHTML = String(Number(input1.value) ** Number(input2.value));
}

function doClear() {
  output.style.color = "#f5e9dc";
  input1.value = "";
  input2.value = "";
  output.innerHTML = "0";
}

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2")
let output = document.getElementById("output")

function doAdd() {
    output.innerHTML = String(Number(input1.value) + Number(input2.value));
}
let result;

function addition() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1);
    num2 = Number(num2);
    result = num1 + num2;
    document.getElementById("output").innerHTML = String(result);

}

function minus() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1);
    num2 = Number(num2);
    result = num1 - num2;
    document.getElementById("output").innerHTML = String(result);
}

function multiply() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1);
    num2 = Number(num2);
    result = num1 * num2;
    document.getElementById("output").innerHTML = String(result);
}

function divide() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1);
    num2 = Number(num2);
    if (num2 === 0) {
        result = "error - can't divide by 0"
    }
    else {
        result = num1/num2;
    }
    document.getElementById("output").innerHTML = String(result);
}

function power() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1);
    num2 = Number(num2);
    for (let i=0; i<n; i++) {
        result*=num1;
    }
    document.getElementById("output").innerHTML = String(result);
}

function clear() {

}


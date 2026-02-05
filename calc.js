let result;
let output;

function addition() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1);
    num2 = Number(num2);

    result = num1 + num2;
    printResult(result);
}

function minus() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1);
    num2 = Number(num2);

    result = num1 - num2;
    printResult(result);
}

function multiply() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1);
    num2 = Number(num2);

    result = num1 * num2;
    printResult(result);
}


function divide() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1);
    num2 = Number(num2);

    if (num2 === 0) {
        result = "ERROR - can't divide by 0. Try again"
    }
    else {
        result = num1/num2;
    }
    printResult(result);
}

function power() {
    result = 1;
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    num1 = Number(num1);
    num2 = Number(num2);

    for (let i=0; i<num2; i++) {
        result*=num1;
    }
    printResult(result);
}

function printResult(r) {
    output = document.getElementById("output");
    /*negative results in red, positive results reset to default color*/
    if (r < 0) {
        output.style.color = "red";
    }
    else {
        output.style.color = "#113f67";
    }
    output.innerHTML = String(r);
}

function reset() {
    result = "";
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}


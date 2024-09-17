function addNumber() { 
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = parseInt(firstNumber) + parseInt(secondNumber);
}

function subNumber() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = parseInt(firstNumber) - parseInt(secondNumber);
}

function inmNumber() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = parseInt(firstNumber) * parseInt(secondNumber);
}

function impNumber() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = parseInt(firstNumber) / parseInt(secondNumber);
}

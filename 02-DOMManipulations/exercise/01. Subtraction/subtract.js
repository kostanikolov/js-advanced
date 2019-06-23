function subtract() {

    let n1 = Number(document.getElementById('firstNumber').value);
    let n2 = Number(document.getElementById('secondNumber').value);
    let subtraction = document.getElementById('result');
    
    subtraction.textContent = n1 - n2;
}

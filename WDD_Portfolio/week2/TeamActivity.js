/*Attempting to write out the first step*/

function firstNumber(){
    const num1 = document.getElementById("value1").value;
    document.getElementById("results1").innerHTML = 'You entered the number: ' + num1;
}

/*Attempting to complete the second step*/
function secondNumber() {
    const num2 = document.getElementById("value2").value;

    /*This should set in value to a number*/
    const num2Int = parseInt(num2);

    /*This should only work if there is a number entered in here*/
    if (!isNaN(num2Int)) {
        document.getElementById("results2").innerHTML = 'The total sum of your numbers is: ' + total(num2Int);
    }

}

/*The should get the sum of all numbers and be able to be pulled into the secondNumber function*/
function total(input) {
    let sum = 0;

    for (let i = 1; i <= input; i++) {
        sum += i;
    }

    return sum;
}

/*Attempting to complete the third step*/
function addition3() {
    const num3 = document.getElementById("value3").value;
    const num4 = document.getElementById("value4").value;

    /*This should set in value to each number*/
    const num3Int = parseInt(num3);
    const num4Int = parseInt(num4);

    if (!isNaN(num3Int) && !isNaN(num4Int)) {
        document.getElementById("results3").innerHTML = 'If you add ' + num3Int + ' and ' + num4Int + ' your total is: ' + add(num3Int, num4Int);
    }
}

/*this should add the two values together*/
function add(num1, num2) {
    return num1 + num2;
}

/*these should be the functions that should work for the stretch goals*/
function updateOutput(opPerf, value) {
    document.getElementById('finalResults').innerHTML = `${opPerf} ${value}`;
}

/* return value entered as a number (float) */
function getFloat(number) {
    const num = document.getElementById(number).value;
    const floatNum = parseFloat(num);
    if (!isNaN(floatNum)) {
        return floatNum;
    } else {
        return 0;
    }
}

/*adding function*/
const stretchAdd = function(num1, num2) {
    return num1 + num2;
};

/*times function*/
const stretchMultiply = function(num1, num2) {
    return num1 * num2;
};

/* declared function subtraction and division */
function stretchSubtract(num1, num2) {
    return num1 - num2;
}

function stretchDivide(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 0;
    } else {
        return num1 / num2;
    }
}

function finalCall(operation, opPerf) {
    const finalValue = operation(getFloat('lastNum1'), getFloat('lasthNum2'));
    updateOutput(opPerf, finalValue);
}
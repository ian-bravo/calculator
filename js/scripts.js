function add(number1, number2) {
    return number1 + number2;
}
const number1 = prompt("Enter a number: ");
const number2 = prompt("Enter a 2nd number: ");

const integeredNumber1 = parseFloat(number1);
const integeredNumber2 = parseFloat(number2);


window.alert(add(integeredNumber1, integeredNumber2));
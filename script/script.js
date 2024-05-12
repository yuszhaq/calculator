let calculation = 0;

displayOutput();

function displayOutput() {
	document.querySelector('.display-output').innerHTML = calculation;
}

function updateCalculation(number) {
	calculation += number;
	displayOutput();
	console.log(calculation);
}

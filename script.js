const calculatorForm = document.getElementById('calculator');

const categoryInp = document.getElementById('category');
const firstNumberInp = document.getElementById('inp-1');
const secondNumberInp = document.getElementById('inp-2');
const operandInp = document.getElementById('operand');

const resultDiv = document.querySelector('.result-div');
const resultContainer = document.querySelector('.result-container');

function calculate(e) {
	e.preventDefault();

	const num1 = firstNumberInp.valueAsNumber;
	const num2 = secondNumberInp.valueAsNumber;
	const operand = operandInp.value;

	let result;
	switch (categoryInp.value) {
		case 'simple':
			result = calculateSimpleOperation(num1, num2, operand);
			break;

		case 'aoc_circumference':
			result = calculateAreaOfCircle(num1, 'circumference');
			break;
		case 'aoc_radius':
			result = calculateAreaOfCircle(num1, 'radius');
			break;
		case 'aoc_diameter':
			result = calculateAreaOfCircle(num1, 'diameter');
			break;

		case 'aor':
			result = calculateAreaOfRectangle(num1, num2);
			break;

		default:
			result = 0;
			break;
	}

	showResults(result);
}

function calculateSimpleOperation(num1, num2, operand) {
	let result;

	switch (operand) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;

		default:
			result = 0;
			break;
	}

	return result;
}

function calculateAreaOfCircle(value, partOfCircle) {
	let result;

	switch (partOfCircle) {
		case 'circumference':
			result = Math.PI * (value / (Math.PI * 2)) ** 2;
			break;
		case 'diameter':
			result = Math.PI * (value / 2) ** 2;
			break;
		case 'radius':
			result = Math.PI * value ** 2;
			break;

		default:
			result = 0;
			break;
	}

	return result;
}
function calculateAreaOfRectangle(num1, num2) {
	return num1 * num2;
}

function showResults(result) {
	resultContainer.innerText = result;
	resultDiv.classList.remove('hidden');
}

function showFields() {
	if (categoryInp.value === 'simple') {
		operandInp.disabled = false;
		secondNumberInp.disabled = false;
	} else if (categoryInp.value === 'aor') {
		operandInp.disabled = true;
		secondNumberInp.disabled = false;
	} else {
		operandInp.disabled = true;
		secondNumberInp.disabled = true;
	}
}

calculatorForm.addEventListener('submit', calculate);
categoryInp.addEventListener('change', showFields);

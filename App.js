import { Add, Subtract, Multiply, Divide} from './modules/Calculation.js';

// Get the form by class and input elements by id
const form = document.getElementById('form');
const first_number = document.getElementById('first-number');
const second_number = document.getElementById('second-number');

// get the 'result' display element by class
const result = document.getElementById('result');

// Listen to 'submit' event and trigger addition
form.addEventListener('submit', (event) => {
   event.preventDefault();
   let a = first_number.valueAsNumber;
   let b = second_number.valueAsNumber;
  
  // Calculating sum
   let sum = Add(a, b);
   let difference = Subtract(a, b);
   let division = Divide(a, b);
   let product = Multiply(a, b);
   
  
  // Printing result
   result.textContent = `Hey 👋, the sum is : ${sum}, the difference is : ${difference}, the division is : ${division}, the product is : ${product}`;
   
  
} )
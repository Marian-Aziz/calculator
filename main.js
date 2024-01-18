
function clearScreen() {
    document.getElementById("result").value = " ";
  }
  function display(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

// var operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// var number1 = parseFloat(prompt('Enter first number: '));
// var number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//          document.getElementById("result").value= result;
        
//         break;

//     case '-':
//          result = number1 - number2;
//          document.getElementById("result").value= result;;
//         break;

//     case '*':
//          result = number1 * number2;
//          document.getElementById("result").value= result;;
//         break;

//     case '/':
//          result = number1 / number2;
//          document.getElementById("result").value= result;;
//         break;

//     default:
//       document.getElementById("result").value= result;;
//         break;
// }

// result();

  
   
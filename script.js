console.log("Calculator");

function calculate(){// beginning of function
// body of function
var number1= Number(prompt("Enter the first number")); // Number() convert into number
var number2= Number(prompt("Enter the second number"));
var number3= Number(prompt("Enter the third number"));
var number4= Number(prompt("Enter the fourth number"));

var option= prompt("Enter the1 option: 1) Sum, 2) Sub, 3) Multi, 4) Div")

if(option == 1){
    console.log(number1+number2); // math operation
    console.log("Addition Results");
}

if(option == 2){
    console.log(number1-number2); // math operation
    console.log("Subtraction Results");
}

if(option == 3){
    console.log(number1*number2); // math operation
    console.log("Multiplication Results");
}

if(option == 4){
    console.log(number1/number2); // math operation
    console.log("Division Results");
}
}// end of calculation function
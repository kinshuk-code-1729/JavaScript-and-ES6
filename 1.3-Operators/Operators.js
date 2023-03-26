alert("Hello From JS");
// Operators and Operands
var x = 24;
console.log(x);
x = -x;
console.log(x);
var y = 25;
var z = 5 + y;//+ is the binary operator and num2 and 2 is operand, becz the + is working on only 2 operands its called binary operator
// *, /, -
console.log(z);

var a = 63;
var b = 14;

//Arithmetic operations
console.log("Result of addition is " + (a + b));
console.log("Result of subtraction is " + (a - b));
console.log('Result of multiplication is ' + (a * b));
console.log("Result of division is " + (a / b));
console.log("Result of exponent is " + (a ** b));
console.log("Result of x++ is " + (a++));
console.log("Result of ++x is " + (++a));

y = y++; // y+1
y += 1; // y+1
y -= 1; // = y-1
y *= y;// = y*y

console.log("Hello " + " - " + " World");

var firstName = "Kinshuk";
var lastName = "Banerjee";

console.log(y);
console.log("Your 1st name is " + firstName + " and last name is " + lastName + " hence your full name is " + firstName + " " + lastName);
console.log(`Your 1st name is ${firstName} and last name is ${lastName} hence your full name is ${firstName} ${lastName}`);
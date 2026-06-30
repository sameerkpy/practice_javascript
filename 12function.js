// FUNCTION DECLARATION

function functionName() {
    console.log("welcome sameer")
}
functionName();

function greet() {
    console.log("sameerforge")
}
greet();

function coding() {
    console.log("codingwithsameer")

}
coding();

function youtube() {
    console.log("subscribe")
}
youtube();
youtube();

function loginSuccess() {
    console.log("login successfull");
}
loginSuccess();

function startGame() {
    console.log("game started")
}
startGame();

function placeOrder() {
    console.log("order placed");
}

placeOrder();

//problem 
function welcome() {
    console.log("welcome sameeer");
}
welcome();

function aboutMe() {
    console.log("my name is sameer");
}
aboutMe();

function city() {
    console.log("jaipur");
}
city();

function goal() {
    console.log("i wil become full stack developer ")
}

goal();
function motivation() {
    console.log("practice makes perfect ")
}

motivation();

// PARAMETER AND ARGUMENT 

function add() {
    console.log(10 + 20);
}
add();

function add(a, b) {
    console.log(a + b)
}
add(40, 50)

function add(a, b) {
    console.log(a + b);
}
add(50, 90);
add(1000, 50,)

function calculateGst(amount, gst) {
    console.log((amount * gst) / 100);
}
calculateGst(1000, 18)

function calculateGst(amount, gst) {
    console.log((amount * gst) / 100);
}
calculateGst(5000, 12);
calculateGst(9000, 28);

function area(length, width) {
    console.log(length * width);
}
area(10, 5)
area(100, 50)
area(10, 20)

function greet(name) {
    console.log("hello" + name);
}
greet("sameer");
greet("aman");
greet("ayan");

function student(name, age, city) {
    console.log(name)
    console.log(age)
    console.log(city)
}
student("sameer", 20, "jaipur");

// problem
function multiply(a, b) {
    console.log(a * b);
}
multiply(10, 20);

function square(a) {
    console.log(a * a);
}
square(5);

function greet(name) {
    console.log("hello " + name);
}
greet("sameer");

function salary(tax, salary) {
    console.log((salary * tax) / 100)
    console.log(salary - ((salary * tax) / 100))
}
salary(10, 50000)

// RETURN KEYWORD
function multiply(a, b) {
    return a * b;
}

let answer = multiply(5, 4)
console.log(answer);


function square(num) {
    return num * num;
}
console.log(square(5));


function calculateGst(amount, gst) {
    return (amount * gst) / 100;
}
let gstAmount = calculateGst(1000, 18)
console.log(gstAmount);


function salaryAfterTax(salary, tax) {
    let taxAmount = (salary * tax) / 100;
    return salary - taxAmount;
}

let finalSalary = salaryAfterTax(50000, 10)
console.log(finalSalary);

// function add(a,b){
//       let sum = a+b;
//       console.log(sum);
//       return sum ; 
// }

// let result = add (10,20);
// console.log(result);

// problem
 
function add(a,b){
    return a+b  
}
let sum = add (30,20)
console.log(sum)

function square(a){
    return a*a
}
let sq = square(6)
console.log(sq)

function area (length,width){
    return length * width
}
let rectangler = area(10,5)
console.log (rectangler)

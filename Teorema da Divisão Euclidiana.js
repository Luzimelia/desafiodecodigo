let numbers = gets('-7 -3').split(" ");
let a = parseInt(numbers[0]);
let b = parseInt(numbers[1]);

let r = a % b < 0 ? Math.abs(b) + a % b : a % b;
let q = (a - r) / b

console.log(q, r);
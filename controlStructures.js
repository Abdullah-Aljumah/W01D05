let num1 = 1;
let num2 = 2;
let num3 = 3;

console.log(num1 == num2);
console.log(num1 % 2 == 0);

let ar = [num1, num2, num3];
ar = ar.sort(function (a, b) {
  return b - a;
});
console.log(ar);

for (let i = 0; i < 21; i++) {
  console.log(i);
}
let a = 0;
while (a > -21) {
  console.log(a);
  a--;
}
//*************************************
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < i; j++) {
    console.log("*");
  }
  console.log("/n");
}

let num1 = 1;
let num2 = 2;
let num3 = 3;

console.log(num1 == num2);
console.log(num1 % 2 == 0);

if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
} else if (num2 > num1 && num2 > num3) {
  if (num1 > num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
} else if (num3 > num1 && num3 > num2) {
  if (num1 > num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}

let amount = "ABC";
if (amount < 0) {
  console.log("Please enter a positive number");
} else if (isNaN(amount)) {
  console.log("Please enter a number");
} else {
  console.log(amount);
}

let username = "Abdullah";
let password = "123456789";

if (username.length > 6 && password.length >= 8) {
  console.log("login successful");
} else {
  console.log("login failed.");
}

let a = 0;
while (a <=20 ) {
  console.log(a);
  a++;
}

for (let i = 0; i < 21; i++) {
  console.log(i);
}

for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let startRange =5;
let endRange =8;
for (let i=startRange; i<=endRange; i++){
  console.log(i);
}


let star=''
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < i; j++) {
    star= star + '*'
    }
  console.log(star);
  star =''
}

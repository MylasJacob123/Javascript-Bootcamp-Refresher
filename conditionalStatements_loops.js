//EXERCISE 1 Temperature check //

//1.Write  a  code  using  if  else  statements  to  check  the temperature//

function checkTemperature(temperature) {
    if (temperature < 0) {
        console.log("It's freezing!");
    } else if (temperature >= 0 && temperature <= 15) {
        console.log("It's cold.");
    } else if (temperature >= 16 && temperature <= 25) {
        console.log("It's mild.");
    } else {
        console.log("It's warm.");
    }
}

///////////////  ALTERNATIVE  ////////////////

// temperature < 0 ? console.log("It's freezing") : console.log("It's toasty")

///////////////  ALTERNATIVE  ////////////////

//Test
checkTemperature(-2)
checkTemperature(6)
checkTemperature(23)
checkTemperature(29)


//2.Switch Statements//
function checkTemperatureSwitch(temperature) {
    switch (true) {
        case (temperature < 0):
            console.log("It's freezing!");
            break;
        case (temperature >= 0 && temperature <= 15):
            console.log("It's cold.");
            break;
        case (temperature >= 16 && temperature <= 25):
            console.log("It's mild.");
            break;
        case (temperature > 25):
            console.log("It's warm.");
            break;
    }
}

//Test
checkTemperatureSwitch(-2)
checkTemperatureSwitch(6)
checkTemperatureSwitch(23)
checkTemperatureSwitch(29)





//EXERCISE 2 Divisibility Check//

//1.Write a code using if else statements to check if a number is divisible//

function checkDivisibility(number) {
    if(number % 2 === 0 && number % 3 === 0){
        console.log("Divisible by both");
    }
    else if(number % 2 === 0){
        console.log("Divisible by 2");
    }
    else if(number % 3 === 0){
        console.log("Divisible by 3");
    }
    else{
        console.log("Not divisible by both");
    }
}

//Test
checkDivisibility(30)
checkDivisibility(4)
checkDivisibility(21)
checkDivisibility(19)


//2.Switch Statements//

function checkDivisibilitySwitch(number) {
    switch (true) {
        case (number % 2 === 0 && number % 3 === 0):
            console.log("Divisible by both");
            break;
        case (number % 2 === 0):
            console.log("Divisible by 2");
            break;
        case (number % 3 === 0):
            console.log("Divisible by 3");
            break;
        default:
            console.log("Not divisible by both");
    }
}

//Test
checkDivisibility(30)
checkDivisibility(4)
checkDivisibility(21)
checkDivisibility(19)





//EXERCISE 3 For loops//

//1.Printed numbers from 1 to 10//

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//2.All printed even numbers between 1 and 20//

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


//3.The sum of all numbers from 1 to 100//

let sumTotal = 0;
for (let i = 1; i <= 100; i++) {
    sumTotal += i;
}
console.log(sumTotal);


//4.An array of numbers, printed elements in the console//

const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i])
}


//5.Given the array of numbers, find and print the largest number//

const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];

for(let i = 1; i< numbers2.length; i++){
    if(numbers2[i]> largest){
        largest = numbers2[i]
    }
}
console.log(largest)

///////////////  ALTERNATIVE  ////////////////

// let numbers = [3, 7, 2, 5, 10, 6];
// let max = Math.max(...numbers);

// console.log(max); // Outputs: 10

// let numbers = [3, 7, 2, 5, 10, 6];
// let max = numbers.reduce((accumulator, currentValue) => {
//     return Math.max(accumulator, currentValue);
// }, numbers[0]);

// console.log(max); // Outputs: 10

///////////////  ALTERNATIVE  ////////////////





//EXERCISE 4 While loops //

//1.Print numbers from 1 to 10//

let i1 = 1;
while (i1 <= 10) {
    console.log(i1);
    i1++;
}


//2.Print all even numbers between 1 and 20//

let i2 = 2;
while (i2 <=20) {
    console.log(i2);
    i2 +=2;
}


//3.The sum of all numbers from 1 to 100//

let i3 = 1;
let total = 0;
while (i3 <= 100) {
    total += i3;
    i3++;
}
console.log(total)


//4.Printed multiples of 5 less than 50//

let i4 = 5;
while (i4 < 50){
    console.log(i4);
    i4 += 5;
}





//EXERCISE 5 Do While loops//

//Print numbers from 1 to 10//

let prints = '';
let l1 = 0;
do {
    l1 = l1 + 1;
    prints = prints + l1;
}  while (l1 < 10);

console.log(prints);


//2.The sum of all numbers from 1 to 100//

let l2 = 1;
let print2 = 0;
do {
    print2 += l2;
    l2++;
}  while (l2 <= 100);

console.log(print2);


//3.Prompt the user to enter a number greater than 10 and keep asking until they enter a valid number//

let userNumber;
do {
    userNumber = parseInt(prompt("enter a number greater than 10",10));
} while (userNumber <= 10)
console.log(userNumber);


//4.Guessing game//
                 //Guess a number between 1 and 10//

const theNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
    if (guess < theNumber) {
        console.log("try again it's low");
    } else if (guess > theNumber) {
        console.log("It's quite high TRY AGAIN");
    } else if (!isNaN(guess)) {
        console.log("It's Correct GOOD JOB", theNumber);
    }
} while (guess !== theNumber);
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';
console.log(firstName);

let age = 25;
age = 26;

const birthYear = 1996;
// birthYear = 1997;

var job = 'programmer';
job = 'teacher';

const now = 2037;
const ageKevin = now - 1997;
const ageYuli = now - 1999;
console.log(ageKevin, ageYuli);

console.log(ageKevin * 2, ageKevin / 10, 2 ** 3);

const firstName = 'Kevin';
const lastName = 'Torres';
console.log(firstName+' '+lastName);

//Assingment operators
let x = 10 + 5;
x += 10; //is x = x + 10
x *= 4; // x = x * 4
x++; //x = x + 1
x--; //x = x -1
console.log(x);

//Comparison operators
console.log(ageKevin > ageYuli);
console.log(ageYuli >= 18);

const isFullAge = ageYuli >= 18;

console.log(now -  1997 > now - 2018);


const now = 2037;
const ageKevin = now - 1997;
const ageYuli = now - 1999;

console.log(now -  1997 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

let avgAge = (ageKevin + ageYuli) / 2;
console.log(ageKevin, ageYuli, avgAge);


const firstName = 'Kevin';
const job = 'QA Engineer';
const birthYear = 1997;
const year = 2037;

const kevin = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(kevin);

const kevinNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(kevinNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/
const age = 15;

if (age >= 18) {
    console.log('Yuli can start driving license');
} else {
    const yearLeft = 18 - age;
    console.log(`Yuli is too young to start license, wait another ${yearLeft} to try again`);
}

const birthYear = 2012;

let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);
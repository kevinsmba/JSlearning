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

//Type conversion
const inputYear = '1997';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Kevin'));
console.log(typeof NaN);

console.log(String(26), 26);
//Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3);
console.log('23'/'2');

let n = '1' + 1; //'11'
n = n - 1;
console.log(n);

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Kevin'));
console.log(Boolean({}));

const money = 0;
if(money){
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

let height;
if(height){
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}


const age = '18';
if(age === 18) console.log('You just became an adult(Strict)');

if(age == 18) console.log('You just became an adult(Loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof(favourite));

if (favourite === 26){
    console.log('Cool, 26 is an amazing number!')
} else if(favourite === 9){
    console.log('9 is also a great number!');
} else if(favourite === 7){
    console.log('7 is also a great number!');
} else {
    console.log('the number is neither 26, 9 or 7')
}

switch (favourite){
    case 26:
        console.log('Cool, 26 is an amazing number!');
        break;
    case 9:
        console.log('9 is also a great number!');
        break;
    case 7:
        console.log('7 is also a great number!');
        break;
    default:
        console.log('the number is neither 26, 9 or 7');
}

if(favourite !== 26) console.log('Why not 26?');
*/

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if(shouldDrive){
    console.log('Yuli is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = true;
console.log(hasDriverLicense || hasGoodVision || isTired);
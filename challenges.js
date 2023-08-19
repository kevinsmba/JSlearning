const massMark = 78;
const heighMark = 1.69;
const massJohn = 92;
const heighJohn = 1.95;

const BMIMark = massMark / heighMark ** 2;
const BMIJohn = massJohn / (heighJohn * heighJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if(markHigherBMI){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's${BMIMark}!`)
}
//A constant variable storing age as an integer 
const myAge = 22;

//A variable storing an initial value of two 
let earlyYears = 2;

//Using the multiplication assignment operator to multiply early years by 10.5
earlyYears *= 10.5;

//Subtracting two years from the myAge variable and storing the value in the laterYears variable
let laterYears = myAge - 2;

/*Using the multiplication assignment operator to calculate the number of dog years accounted for by the later years, hence the multiplication by 4.*/ 
laterYears *= 4;

//Displaying earlyYears and laterYears variable on the console 
console.log(`Early years : ${earlyYears} and Later years : ${laterYears}`);

//Adding the value of earlyYears and laterYears variable 
let myAgeInDogYears = earlyYears + laterYears;

//Applying the builtin function to return a string of all lowercase letter of name provided 
let myName = 'Manasseh'.toLowerCase();

//Using string interpolation to display the name string and the age in dog years and age in human years
console.log(`My name is ${myName}. I am ${myAge} old in human years which is ${myAgeInDogYears} years old in dog years.`)

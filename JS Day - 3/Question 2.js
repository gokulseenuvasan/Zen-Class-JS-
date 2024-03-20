// .Do the below programs in arrow function

//a.Print odd numbers 
let Numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let odds = Numb.filter((n) => n % 2);
console.log(odds);
//Output : [1, 3, 5, 7, 9, 11]


// b. Convert all the strings to title caps in a string array
const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  const inputArra = ["hello world", "good morning", "javascript is fun"];
  const titleCasedArra = inputArra.map(toTitleCase);
  console.log(titleCasedArra);
//Output : ['Hello World', 'Good Morning', 'Javascript Is Fun' ]


//C .Sum of all numbers in an array
const numbers = [1, 2, 3, 4];
const sumIt = numbers.reduce((partialSum, currentNumber) => partialSum + currentNumber, 0);
console.log(`Sum using reduce method: ${sumIt}`);
//Output : Sum using reduce method: 10



// D. Return all the prime numbers in an array
const myArray = [1, 3, 2, 5, 10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = myArray.filter(element => isPrime(element));
console.log(myPrimeArray);
//Output :  [3, 2, 5]



// E.  Return all the palindromes in an array
const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);
console.log(getAllPalindromes(["hello","madam" , "noon"]));
//Output : ['madam', 'noon']
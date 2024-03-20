//Question 1
//a.Print odd numbers in an array

//Anonymous Function
let arr=[0,1,2,3,4,5,6,7,8,9];
let odd = function () {
  let odd= arr.filter(num => num %2 ==1)
  console.log(odd)
}
odd()
// Output (5) [1,3,5,7,9]

//IIFE Function
let abc =[10,12,13,14,15,16,17,18,19,20];
(function ()  {

  let oddNum = abc.filter(num => num %2 ==1);
console.log(oddNum);

  })();
// Output (5) [13,15,17,19]






//b.Convert all the strings to title caps in a string array

//Anonymous :
const titleCase = function (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const inputArray = ["hello world", "this is a test", "another example"];
const titleCasedArray = inputArray.map(titleCase);
console.log(titleCasedArray);

  //OUTPUT: What Are You Studying
  
  //IIFE : 
  (function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
})("MUDRA IS MY NAME");
  //OUTPUT: What Are You Studying


//c.Sum of all numbers in an array

//Anonymous :
let given = [1, 2, 3, 4, 5,6]
let func = function () {
    let sum = given.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
  }
  func()
//OUTPUT: 21
  
  
//IIFE :
const sum = (function() {
    return function sum(x, y, z) {
      const args = [x, y, z];
      return args.reduce((a, b) => a + b, 0);
    };
  }())
  console.log(sum(1, 2, 3))
  //OUTPUT: 15


// d.Return all the prime numbers in an array
//Anonymous :
let prime = function (arr) {
    return arr.filter(function(n){
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(prime([7, 16, 9, 3, 11]));
//OUTPUT : 7, 3, 11

//IIFE 
      (  
      function(numArray){
         numArray = numArray.filter((number) => {
           for (var i = 2; i <= Math.sqrt(number); i++) {
             if (number % i === 0) return false;
           }
           return true;
         });
         console.log(numArray);
     })([1,2,3,4])
//OUTPUT : 1, 2, 3


//e. Return all the palindromes in an array
//Anonymous Function :
let palin = function () {
    var myArray = ['dolphin', 'madam', 'deva', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  palin()
//OUTPUT: madam malayalam
  
//IIFE :
let palind = ( function () {
    var myArray = ['guvi', 'madam', 'gokul', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  })()
  //OUTPUT: madam malayalam


// f. Return median of two sorted arrays of same size.
//Anonymous :
let median = function(a, b) {

    let c = [...a, ...b].sort((a, b) => a - b);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
    return c[half];
  } else {
    
    return (c[half] + c[half - 1]) / 2;
  }
  }
  let arr1 = [11, 12, 15, 6, 34,10];
  let arr2 = [3, 13, 4, 10, 45, 17];
  console.log(median(arr1, arr2));
  
  //OUTPUT: 11.5
  
  
//IIFE :
  let med = ( function() {
    let arr1 = [11, 12, 15, 6, 34,10];
    let arr2 = [3, 13, 4, 10, 45, 17];
  
    let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
  console.log(c[half]);
  } else {
    
  console.log((c[half] + c[half - 1]) / 2);
  }
  
  })()
  //OUTPUT: 11.5

//g. Remove duplicates from an 

//Anonymous :
let findDuplicates = function () {

    const yourArray = [1, 1, 2, 3, 4, 5, 5]
    let duplicates = []
    const tempArray = [...yourArray].sort() 
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    console.log(duplicates) 
  }
  findDuplicates()
//OUTPUT: (2) [1, 5]
  
  
  
//IIFE :
let adc = (function () {
    
    let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
    
    let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
    
    console.log(duplicates);
  })()
  
//OUTPUT: (2) [1, 5]
  
//h.Remove duplicates from an array

//Anonymous :
let rotateArray =function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  }
  rotateArray([1,2,3,4,5],2)
//OUTPUT: (5) [4, 5, 1, 2, 3]
  
  
//IIFE :
  
let dev = (function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  })([1,2,3,4,5],2)
  //OUTPUT: (5) [4, 5, 1, 2, 3]
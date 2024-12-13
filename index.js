//1. Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.


function calculateDifference(a, b) { 
	return a - b; 
} 

let a = 60; // First variable 
let b = 20; // Second variable 
calculateDifference(a, b) //Calling the Function
console.log("Difference between First and Second Number is : " + calculateDifference(a, b)); // For printing the result 


//2. Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.


function isOdd(){
    if(num % 2 == 0){
       console.log(num, "False");
    } else{
        console.log(num, "True");

    }
}
let num = 31;  // Variable
isOdd()        // Calling the function


//3. Write a function named findMin that takes an array of numbers and returns the smallest number from the array.


function findMin(numarray) { 

    numarray.sort((a,b)=> a-b);         //Sorting Ascending
    let  smallestNum = numarray[0];
    return smallestNum;                 //the first number in the array is minimum number
}

var numberArray=[97, 41, 42, 32, 18, 42, 13, 92, 9, 11, 108];
console.log("Given set of numbers: " + numberArray);               //print values of Array
console.log(`Smallest Number of the Array is: ${findMin(numberArray)}`); //print smallest number of the Array





//4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.


function filterEvenNumbers(){

    const even = []; // Declaring empty Even array
    
    numbers.forEach(element => {
        if( element%2 == 0 )
        even.push(element);
    });
    // console.log(`Even numbers in an array are: ${even}`); // Printing output
    console.log("Array containing Even Numbers: ", even);
}
const numbers = [86, 41, 55, 85, 90, 1021, 3052, 24]; // Initializing numbers array
filterEvenNumbers()



// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(){
    arr.sort((a,b) => b - a)                        // Pass the comparator to to sort in reverse order
    
    console.log("New Array in reverse order: ",arr) // Returns a new array in reverse order
}

const arr = [ 10, 20, 25, 100 , 40];                // Declare an array
sortArrayDescending();                              // Calling the function




// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.


function lowercaseFirstLetter() {
    let result = str[0].toLowerCase() + str.slice(1); // Lowercase the first letter + creates a new string starting from the index specified by Slice() until the end of the word.
    console.log(result); 
}

const str = "Coding journey with OSTAD";
lowercaseFirstLetter();




// 7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    let average = sum / array.length;
    return average;
  }
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(`Average is: ${getAverage(array)}`);
  
  
  
  // 8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.


function isLeapYear(year) {

    //three conditions to find out the leap year
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

const year = 1723;
isLeapYear(year);

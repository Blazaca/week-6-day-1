// Basics of Javascript
/*
-- Variable Declaration --
Prinmitive Types: integer, floats, booleans, arrays, objects(looks like a dictionary)
functions in Javascript
looping in javascript
*/

// var, let, const
var first_name = 'Bobby';

// Display our value inside of JS console
console.log(first_name)

// Integer Variable
var some_number = 5;

// display Integer
console.log(some_number)

// Float Variable
var some_float = 3.14;
console.log(some_float)

// Array Variable
var some_array = [2,4,6,8,10];
console.log(some_array)

// Object Variable
var some_object = {
    'test': 'Please Test me!',
    'num': 17
}
console.log(some_object)

// Difference between variable delcaration keywords
// var - Global Scope
// let - Block level scope
// const = same as let but it has a constant value

let something = 5;
const jeebers = 2;


// Javascript Hoisting Example
console.log(some_random_variable)
var some_random_variable = 'Hello'
console.log(some_random_variable)

// A better way of declaring a variable is by using let or const
// Example
console.log(full_name)
let full_name = first_name + ' Temple'
console.log(full_name)

// By using let when we get errors instead of JS giving us an undefined variable error
// we can force JS to give errors with let. Var will give the function a hint that
// it exists. Not good. Use Let.

// Example of Const
const car = 'Lambo';
console.log(car) // Expected output 'Lambo'
// car = 'Suburu'; Expect a typeError since we can't reassign a const

// Reassign 'let' variable
full_name = 'Joel Carter';
console.log(full_name)

/*
        Basic Math Operations in JS
*/

// Addition
let sum = 5 + 5;
console.log(sum)
// Incrementation
sum += 5;
console.log(sum)

// Subtraction
let diff = 5 - 5;
console.log(diff)
// Decrementation
diff -= 5;
console.log(diff)

// Multiplication
let product = 5 * 5;
console.log(product)
// Multiplicational Increment
product *= 5;
console.log(product)

// Division
let divide = 5 / 5;
console.log(divide)
// Divisional Decrement
divide /= 5;
console.log(divide)

// Exponential
let square = 5 ** 5;
console.log(sqaure)
// Exponential Increment
square **= 5;
console.log(sqaure)

// Modulo -- Remainder Operator
let remainder = 12%5
console.log(remainder)

//   More math operations

// Finding the Floor of a decimal
let find_floor = Math.floor(35.9);
console.log(find_floor)

// Finding the ceiling of a decimal
let find_ceil = Math.ceil(35.9);
console.log(find_ceil)

// Mind Bender
let crazy_stuff = some_float + '4'; // some_float is 3.14
console.log(crazy_stuff) // This will output 3.144
// JS is going to force the function to work by making the float a string

// Mind Bender 2
let more_crazy = some_float + parseFloat('4');
console.log(more_crazy)
// Because of how JS is trying to assign the float 4 will become 4.000000000001 or
// whatever its trying to assume too. 
// See https://floating-point-gui.de/


/*
    ==== JS Functions ====
*/

// Regular named function
function addNums(){
    let x = 5;
    let y = 10;
    
    return x + y
}
console.log(addNums())

// Regular named function with parameters
function addNum2(x,y){
    return x + y
};

console.log(addNum2(10, 5))

//ES6+ Arrow Function Syntaz (no params)
let multiplyNums = () => {
    let num = 4;
    let num2 = 5;

    return num * num2
};
console.log(multiplyNums())

// ES6 Syntax with parameters
// Single Parameter - doesnt need parenthases around it, multiple parameters do...

let cubed = (num) => {
    return num ** 3
};

let cubed2 = num => {
    return num ** 3
};

console.log(cubed(2))
console.log(cubed(3))

const doubleNum = (num1, num2) => {
    return (num1 * 2) + (num2 * 2)
};

console.log(doubleNum(2,2))

// JS Closure
//  Self-Invoking Function
console.log((function(name){
    let hello = 'Hello World' + name;
    return hello
})('JD'));


// JavaScript Control Flow
// If (conditional) Statements
let determineAge = (age) => {
    if (age < 18){
        return 'Minor'
    } else if (age <= 65){
        return 'Adult'
    } else if (age > 65){
        return 'Senior'
    }
};
console.log(determineAge(7))
console.log(determineAge(40))
console.log(determineAge(65))

// JavaScript Ternary Operator

let determineAgeGroup = (age) => {
    return (age < 18) ? 'Minor': (age <= 65) ? 'Adult': 'Senior'
}
console.log(determineAgeGroup(45))

// and + or in conditions

let first = 'Coding';
let last = 'Temple';

// and (&&)

if (first == 'Coding' && last == 'Temple'){
    console.log('Thats my school')
};

// or (||)
if (first == 'Coding' || last == 'Coding'){
    console.log('1 or both of these variables is "Coding"')
}


// For Loop in JS
// For Loop Syntax -- for (counter; condition; incrementer/decrementer)
// ++ shorthand for +=1
let countByOne = () =>{
    //For Loop
    for(let i = 0; i < 20; i++){
        console.log(i)    
    }
    return 'The counter has stopped!'
};

console.log(countByOne())

let decreaseByOne = () =>{
    //For Loop
    for(let i = 20; i > 0; i--){
        console.log(i)    
    }
    return 'The counter has stopped!'
};

console.log(decreasetByOne())


// While Loop - JavaScript
// formatted string uses backticks `` and ${} for javascript variables

let countWithWhile = () =>{
    let i = 0; // counter
    let text = '';

    while(i > 10){
        text += `This number is... ${i} \n`
    }
    return text
};

console.log(countWithWhile())

// Do-While loop in JS
// Main difference is that condition (while) in do-while is checked AFTER the do block
let countWithDoWhile = () => {
    let i = 8; // counter
    let text = '';

    //Do
    do{
        text += `This new number is... ${i} \n`
        i++
    }while(i < 10)
    return text
};
console.log(countWithDoWhile())

/*
    JS Arrays: Looping, methods, Array String methods
*/

// Creating a new array

let group_of_names = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty']

// Grabbing a value by an index

console.log(group_of_names[0])

// Array Deconstruction
[name1, name2, name3] = group_of_names
// name1 = group_of_names[0]
// name1 = group_of_names[1]
// name1 = group_of_names[2]
console.log(name1, name2, name3)


// Looping over an Array
// Method #1 - most common for looping
let showNames = (a_list) =>{
    for(let i = 0; i < a_list.length; i++){
        console.log(a_list[i])
    }
    return 'Done'
}

console.log(showNames(group_of_names))

// Method #2 for looping with forEach()
group_of_names.forEach(name => console.log(name))

// JS Array Method Array.toString()
console.log(typeof(group_of_names.toString()))

// JS Array Methods: .map(), .filter(), .reduce()
group_of_names = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty'];

// .map()
let b_names = group_of_names.map(name => {
    if (name[0] == 'B'){
        return name
    }else{
        return 'Not a B name'
    }
});
console.log(b_names)

//.reduce()
// Reduces all numbers in list into a single index in the list
const nums = [2,4,6,8,10]
let nums_reduce = nums.reduce((accumulator, current_num) => {
    return accumulator + current_num
});
console.log(nums_reduce)

// .filter()
let b_names_3 = group_of_names.filter(name => {
    name[0] == 'B'
})
console.log(b_names_3)


// Array methods with string values: .join(), .slice, .splice(), .search()
// .join()
// Joins names together into 1 string
console.log(group_of_names.join())

// .slice()
console.log(group_of_names.slice(0,3)) // Python -> group_of_names[0:3]

// .splice()
let captured_value = group_of_names.splice(0,1, 'Freddie')
// This will take the first index (0) and 'capture' it into a value but replace Freddie into the list
// If the second value was any higher it would remove more based on number
console.log(`This value was removed from the array: ${captured_value}`)
console.log(group_of_names)


// using .search along with .join for list items that are strings
console.log(group_of_names[0].search('G'))
// returns index value if true
// returns -1 if false

// String.slice
console.log(group_of_names[0].slice(0,3))


function getMiddle(s){
    const length = s.length
    let half = (s/2)
    if (length%2 == 0){
      return s[half-1,half+1]
    }else{
      return s[half+1]
    }
  }

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let findWords = (a_list, b_list) =>{
    var punctuation = ',!';
    let rawLetters = a_list.split('')
    let cleanLetters = rawLetters.filter(function(letter) {
        return punctuation.indexOf(letter) === -1;
    });
    let cleanString = cleanLetters.join('')
    const a1list = cleanString.split(" ")
    b_list.forEach(word1 => {
        console.log(word1)
        let searchList = (word1, a1list) => {
            for(let i = 0; i < a1list.length; i++){
                if (word1 == a1list[i]){
                    return true
                }
            }
            return false
        }
        if (searchList(word1, a1list) == true){
            console.log(`Matched: ${word1} in string`)
        }else{
            console.log('No Matches..')
        }
        })
    };
findWords(dog_string, dog_names);

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every value that's double is over 50.
*/
// given_arr == [13, 22, 26, 40, 1, 10]
// let replaceEvens = (arr) =>{
//     //code goes here
// }
//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...

let doubleGate = (a_list) => {
    const new_list = a_list.filter(number => number * 2 <= 50 )
    console.log(new_list)
};
const arr_list = [13, 22, 26, 40, 27, 21, 22, 33, 24.999999999, 100]
doubleGate(arr_list);



// Code Wars Bits and Pieces
// https://www.codewars.com/kata/50654ddff44f800200000004/javascript
function multiply(a, b){
    return (a * b)
  };


// https://www.codewars.com/kata/54edbc7200b811e956000556
  function countSheeps(arrayOfSheep) {
    let counter = 0
    arrayOfSheep.forEach(sheep => {
      if (sheep == true){
        counter += 1
        }
    })
    return counter
  };
  
// https://www.codewars.com/kata/56747fd5cb988479af000028/javascript
  function getMiddle(s){
    const length = s.length
    let half = Math.floor(s.length/2)
    if (length%2 == 0){
      return `${s[half-1]}${s[half]}`
    }else{
      return `${s[half]}`
    }
  };


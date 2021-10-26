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
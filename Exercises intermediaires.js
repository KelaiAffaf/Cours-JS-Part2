/*---------------------------------- Exo 1 ---------------------------------

- We ask to read a sentence, which ends with a point, character by character and to determine:
  The length of the sentence (the number of characters).
  The number of words in the sentence (assuming that the words are separated by a single space).
  The number of vowels in the sentence.

--------------------------------------------------------------------------*/
function lengthSentence(sentence){
  return sentence.length;
}
console.log(lengthSentence("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));

function WordsNumber(sentence){
  return sentence.split(' ').length;
}

function vowelsNumber(sentence){
  const count = sentence.match(/[aeiou]/gi).length;

    return count;
}
let str="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
console.log(lengthSentence(str));

// Methode using loop 
// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);
/*---------------------------------- Exo 2 ---------------------------------

- A car rental organization offers two rental formulas:
   Rental by the kilometer:
    - for the first 100 kilometers: rate r1 per km,
    - for the kilometers from 101 to 1000: rate r2 per km,
    - beyond 1000 kilometers: rate r3 per km.
   Daily rate: Unlimited mileage at the price per day p_d.

  In both cases, it is necessary to add an insurance (whose cost per day is ins) and the value-added tax (VAT) .
  The quantities r1, r2, r3, p_d, ins as well as the rate of VAT are considered as constants.
  Take, for example: r1 = 0.7 r2 = 0.4 r3 = 0.2 p_d = 100 ins= 0.3 (expressed in dinars) and rate VAT = 0.18.
  Write a function which, given the total number of kilometers and the number of days of location, 
  calculates the total costs of the two tariffs and indicates by a label the most suitable 
  solution advantageous for the client.

--------------------------------------------------------------------------*/
const totalCost = (nbkilometers,nbDaysLocation)=>{
    let r1 = 0.7 ,r2 = 0.4, r3 = 0.2 ,p_d = 100 ,ins= 0.3,VAT = 0.18;
    let prix=0;

      switch (true) {
        case nbkilometers<=100:
          prix=r1*nbDaysLocation;
          break;
        case nbkilometers > 100 && nbkilometers<=1000:
          prix=r2*nbDaysLocation;
          break;
        case nbkilometers>1000:
          prix=r3*nbDaysLocation;
          break;
        default:
          console.log('Error');
     
    }
    prix+=VAT+ins;
    console.log(prix);

    let prixM2=p_d*nbDaysLocation+ins+VAT;
    console.log(prixM2);

    return Math.max(prix,prixM2);

}
  console.log(totalCost(2000,50));     
/*---------------------------------- Exo 3 ---------------------------------

- Interval is defined as [start, end]- the start of an interval to the end of the interval. 
Given a list of Intervals.
 Your task is to check if any two intervals overlap.
  Example:
   Given Interval: [[1,5], [6,10], [12,15], [3,7]]
   Intervals are overlapping

   Given Interval: [[1,5], [6,10], [12,15]]
   No intervals overlap

--------------------------------------------------------------------------*/
overlapping = arr => {
	let first = arr.map(x => x[0]).sort((a,b) => b-a)[0],
			second = arr.map(x => x[1]).sort((a,b) => a-b)[0];
	return first <= second? [first, second]: 'No overlapping';
}
arr=[[1,5], [6,10], [12,15], [3,7]]
console.log(overlapping(arr))
// Solution2 
function overlapping(arr) {
  const range = arr.reduce(([amin,amax],[cmin,cmax]) => [Math.max(amin,cmin), Math.min(amax,cmax)], [-Infinity,Infinity]);
  return (range[1] >= range[0] && range) || "No overlapping";
}
arr=[[1,5], [3,7]] // [3,5]
console.log(overlapping(arr))
/*---------------------------------- Exo 4 ---------------------------------

- Given a string, write a function to find the longest substring with at most K characters.
  Example:
   Input: aabbaacdeeeeddded, K = 3
   Output: Longest substring with 3 most unique characters is: cdeeeeddded with length 11
   Input: abcddefabc, K = 4
   Output: Longest substring with 4 most unique characters is: abcdd with length 5
   Input: aaaabbbb, K = 4
   Output: Not enough unique character is present in the input string

--------------------------------------------------------------------------*/

/*---------------------------------- Exo 5 ---------------------------------

- Given an array of positive and negative integers, write a function to find the two elements such their sum is closest to zero.
   a = {1, 4, -5, 3, -2, 10, -6, 20}; Output: Sum close to zero in the given array is : 1
   a = {-5, 5}; Output: Sum close to zero in the given array is : 0
   a = {5, 8}; Output: Sum close to zero in the given array is : 13
   a = {-5,-5}; Sum close to zero in the given array is : -10

--------------------------------------------------------------------------*/
function posNeg(arr) {
  let sum = Math.abs(arr[0] + arr[1]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] + arr[j]) < sum) {
        sum = Math.abs(arr[i] + arr[j]);
      }
    }
  }
  return sum;
}
let a = [1, 4, -5, 3, -2, 10, -6, 20]; 
console.log(posNeg(a));

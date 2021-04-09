/*---------------------------------- Exo 1 ---------------------------------

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes(), which must take in input array, containing the names of people who 
like an item. It must return the display text as shown in the examples:

likes([]) -- must be "no one likes this"
likes(["Peter"]) -- must be "Peter likes this"
likes(["Jacob", "Alex"]) -- must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"]) -- must be "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) -- must be "Alex, Jacob and 2 others like this"

---------------------------------- Exo 2 -----------------------------------

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.Finish the solution so that it returns the sum of all the 
multiples of 3 or 5 below the number passed in.

---------------------------------- Exo 3 -----------------------------------

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing 
in this way until a single-digit number is produced. The input will be a non-negative integer.

Exemples : 

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

---------------------------------- Exo 4 -----------------------------------

You are given an array (which will have a length of at least 3, but could be very large) containing 
integers. The array is either entirely comprised of odd integers or entirely comprised of even integers 
except for a single integer N. Write a method that takes the array as an argument and returns this 
"outlier" N.

Examples :

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

---------------------------------- Exo 5 -----------------------------------

Write a function that takes in a string of one or more words, and returns the same string, but with 
all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist 
of only letters and spaces. Spaces will be included only when more than one word is present.

Examples :

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

spinWords( "This is a test") => returns "This is a test"

spinWords( "This is another test" )=> returns "This is rehtona test"

*/

function spinWords(str) {
  let strWords = str.split(" ");
  for (let i = 0; i < strWords.length; i++) {
    if (strWords[i].length >= 5) {
      // let word = strWords[i].split("")
      // word.reverse()
      // strWords[i] = word.join('')
      let word = strWords[i].split("");
      let v;
      for (let j = 0; j < word.length / 2; j++) {
        // v = word[j];
        // word[j] = word[(word.length-1)-j]
        // word[(word.length-1)-j] = v
        [word[j], word[word.length - 1 - j]] = [
          word[word.length - 1 - j],
          word[j],
        ];
      }
      strWords[i] = word.join("");
    }
  }
  return strWords.join(" ");
}

function digitalRoot(num) {
  let numStr = num;
  do {
    numStr = numStr.toString();
    numStr = numStr.split("");
    numStr = numStr.join("+");
    numStr = eval(numStr);
  } while (numStr > 9);
  return numStr;
}

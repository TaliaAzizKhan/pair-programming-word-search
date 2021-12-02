// /*

// 1: should return false if the array is empty
// 2: should return false if the word is not present
// 3: should return false if word is an empty string
// 4: should return true if the word is present horizontally
// 5: should return true if the word is present vertically

// */


const wordSearch = (letters, word) => {
  let result = false;

  if (letters.length < 1 || word.length < 1) {
    result = false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));

  let vertical = [];

  for (let row = 0; row < letters.length; row++) {
    for (let column = 0; column < letters[row].length; column++) {
      if (row === 0) {
        vertical.push([letters[row][column]]);
      } else {
        vertical[column].push(letters[row][column]);
      }
    }
  }

  const verticalJoin = vertical.map(ls => ls.join(''));
    
  for (let l of verticalJoin) {
      
    if (l.includes(word)) {
      result = true;
      break;
    }
  }

  for (let l of horizontalJoin) {
      
    if (l.includes(word)) {
      result = true;
      break;
    }
  }
  return result;
};

module.exports = wordSearch;






// ANOTHER SOLUTION:

// const wordSearch = (letters, word) => {

//   if (letters.length < 1 || word.length < 1) return false;  // conditions 1 and 2

//   const horizontalJoin = letters.map((ls) => ls.join(""));

//   const verticalJoin = letters[0].map((column, index) =>

//     letters.map((row) => row[index])
//   );

//   const verticalFlip = verticalJoin.map((ls) => ls.join(""));

//   for (let l of horizontalJoin) {

//     if (l.includes(word)) return true;
//     else {

//       for (let l of verticalFlip) {

//         if (l.includes(word)) return true;
//       }
//     }
//   }
//   return false;
// };

// module.exports = wordSearch;
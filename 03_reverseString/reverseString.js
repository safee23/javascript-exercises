const reverseString = function(word) {
   let output =  '';
//    let i = 0;
   while (word) {
    letter = word.slice(word.length - 1);
    output += letter;
    word = word.slice(0, -1)
   }
   return output;
};

// Do not edit below this line
module.exports = reverseString;

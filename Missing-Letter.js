// Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

function fearNotLetter(str) {
let numbers = str.split('').map(function(letter) {
return letter.charCodeAt(0);
});

for(let i=0; i<numbers.length; i++) {
if(numbers[i+1] - numbers[i] >1) {
return String.fromCharCode(numbers[i] + 1;
}
}
}

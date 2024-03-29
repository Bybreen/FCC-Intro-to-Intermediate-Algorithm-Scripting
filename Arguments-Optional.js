// Create a function that sums two arguments together. If only one argument is provided, 
// then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3)should return 5, and addTogether(2)should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3)returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether() {
let findNum = function(num) {
if(typeof num !== 'number') {
return undefined;
} else
return num;
};

if(arguments.length > 1){
let a = findNum(arguments[0];
let b = findNum(arguments[1];
if(a === undefined || b === undefined) {
return undefined;

}else{
return a + b;
}
}else{

let c = arguments[0];

if{findNum(c)) {
return function(arg2) {

if(c === undefined || findNum(arg2) === undefined) {
return undefined;
}else{
return c + arg2;
}
};
}
}
}
allTogether(2,3);

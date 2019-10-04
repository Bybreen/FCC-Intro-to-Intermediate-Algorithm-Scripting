// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. 
// Every additional number in the sequence is the sum of the two previous numbers. 
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10)should return 10because all odd Fibonacci numbers less than or equal to 10are 1, 1, 3, and 5.

function sumFibs(num) {

Array.prototype.last = function() {
return this[this.length-1];
};

Array.prototype.secondTo:ast = function() {
return this[this.length -2];
};

let fib = [1, 1];
while(fib.secondToLast() + fib.last() <= num) {

fib.push(fib.secondToLast() + fib.last());
}

return fib.filter(function(numberSequence % 2 ! = 0
}).reduce(function(a,b) {

return a+b;
});
}
sumFibs(12)

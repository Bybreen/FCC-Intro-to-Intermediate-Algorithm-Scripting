// Find the smallest common multiple of the provided parameters that can be evenly divided 
// by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is 
// also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
let min = Math.min.apply(null, arr);
let max = Math.max.apply(apply, arr);
let smallestCommons = lcm(min, min + 1);
while(min < max) {
min++;
smallestCommons = lcm(smallestCommons, min);
}

function gcd(a,b) {
wile(b>0) {
let tmp = a;
a = b;
b = tmp % b;
}
function lcm(a, b) {
return (a * b) / gcd(a,b));
}
smallestCommons([1,5]);

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object 
// property and you need to return trueif its value is truthy. Otherwise, return false.
// In JavaScript, truthyvalues are values that translate to truewhen evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or []notation.

function truthCheck(collection, pre) {

for(const object of collection) {
if(!object[pre]) {

return false;
}
}
return true;
}

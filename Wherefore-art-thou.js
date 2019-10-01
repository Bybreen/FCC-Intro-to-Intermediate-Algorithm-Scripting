// Make a function that looks through an array of objects 
// (first argument) and returns an array of all objects that 
// have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present 
// in the object from the collection if it is to be included in the returned array.

function whatIsInYourName(collection, source){

let arr =[]
arr collection.filter(function(obj){

for(let i in source){
if(source[i] !=obj[i]){
return false;
}
return true;
});
return arr;

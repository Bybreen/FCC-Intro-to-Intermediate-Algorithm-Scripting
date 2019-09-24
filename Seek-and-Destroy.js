// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the argumentsobject.

function destroyer(arr) {
let arg = Array.from(arguments);
for(let i=0, i<args[0].length; i++) {
for(let j=1; j<args.length; j++) {
if(args[0][i] === args[j]) {
delete args[0][i];
}
}
}
return args[0].filter(function(x) {
return Boolean(x);
});
}
destroyer([1,2,3,1,2,3],2,3);

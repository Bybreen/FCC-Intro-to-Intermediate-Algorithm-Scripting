// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
let array = [];

flatten(arr);

function flatten(arr) {
arr.forEach(function(listedItem) {

if(!Array.isArray(listedItem)) {
array.push(listedItem);

}
else {

flatten(listedItem);
}
});
}
return array;
}
steamrollArray([1, [2], [3, [[4]]]]);


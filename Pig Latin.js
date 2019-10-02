// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, 
// moves it to the end of the word and suffixes an "ay".
//  If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
let regex = /[aeiou]/gi;
if(regex.test([str[0]])) {
str += 'way';

} else if (str.match(regex)) {
str = str.slice(str.search(regex)) +
str.slice(0, str.search(regex) + 'ay';
}
if(!regex.test(str)) str += 'ay';
return str;
}
translatePigLatin('consonant');

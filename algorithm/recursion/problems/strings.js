
const stringReverse2 = (str) => {
    let revStr = "";
    for(i=str.length-1; i>=0; i--){
        revStr += str[i];
    }
    return revStr;
}

const stringReverse = (str) => str.split("").reverse().join(""); // string -> to array -> reversing -> to string

const palindrome = (str) => str === stringReverse(str);

const anagram = (str1, str2) => ((str1.length == str2.length) && (str1.split("").sort().join("") == str2.split("").sort().join("")));

str1 = "full stack"
str2 = stringReverse(str1)
console.log(`string: ${str1}, reverse: ${str2}, palindrome: ${palindrome(str1)}, anagram: ${anagram(str1, str2)}`)

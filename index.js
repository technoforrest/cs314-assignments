function wordList(){
    return prompt("Enter a list of words separated by commas.");
}
function numList(){
    return prompt("Enter a list of numbers separated by commas.");
}
function oneWord(){
    return prompt("Please enter a word three characters or longer.");
}
/* create a new string from an input string from
the user swapping the position of first and last characters. The string length entered by
the user must be greater than or equal to 1.*/
function charSwap(){
    let first, last, newWord;
    let word = oneWord();
    first = word.charAt(0);
    last = word.charAt(word.length - 1);
    newWord = last + word.substring(1, word.length-1) + first;
    document.getElementById("demo1").innerHTML = newWord;
 
    
}/* asks for a string from the user and returns a
new string adding "Hi" in front of the input string*/
function hiStr(){
    let hi = "Hi "; 
    let name = oneWord();
   let hiString = hi.concat(" ", name);
    document.getElementById("demo2").innerHTML = hiString;
    
}
/*o create a new string from an input
string taking the last 3 characters and adding them to the front of the string.*/
function threeCharsToFront(){
    let newWord, newStr;
    let word = oneWord();
    newWord = word.slice(-3);
    newStr =  newWord + word;
    document.getElementById("demo3").innerHTML = newStr;
}
/*Asks for a list of items from the
user separated by commas. Converts this list to an array without the commas or extra
spaces. */
function stringsToSentence(){
    let str;
    let list = wordList();
    str = list.split(',');
    alert(`My Bonnie lies over the ${str[0]}, my Bonnie lies over the ${str[1]}, so bring back my Bonnie to ${str[2]}.`)
   
}
/*asks for a string from the user and
creates a new string from that string where the first 3 characters are lowercase. If the
string length entered by the user is less than 3 convert all the characters in upper case.*/
function upperOrLower(){
    let newStr;
    let string = prompt("Please enter a word.");
    if(string.length < 3){
        newStr = string.toUpperCase();
    }else {
        let newStr1, newStr2, newStr;
        let sub = string.substring(0, 2);
        let str = string.substring(3, string.length -1);
        newStr1 = sub.toLowerCase();
        newStr2 = str.toLowerCase();
        newStr = newStr1.concat("", newStr2);
    }
    document.getElementById("demo5").innerHTML = newStr;
}
/*asks for a comma separated list of
numbers from the user and swap the first and last elements of a given array of integers.*/
function integerSwap(){
    let first, last, newArr;
    let num = numList();
    first = num[0];
    last =num[num.length - 1];
    newArr = last + num.splice(1, word.length-1) + first;
    document.getElementById("demo6").innerHTML = newArr;
   
}
/*asks for a comma separated list of
strings from the user and alerts the longest string from the given array of strings.
*/
function longestString(){
    let list = wordList();
    let strArr = list.split(',');
    let sameLgth = "";
    let longest = 0;
    let lgth = 0;
    for(let i=0; i < strArr.length; i++){
        if(strArr[i].length > lgth){
            lgth = strArr[i].length;
            longest = strArr[i];
        }
        
    }
   document.getElementById("demo7").innerHTML = longest;
}
/*asks for a comma separated list
of numbers from the user. Convert this list to an array of numbers and alert the largest
even number from the array of integers.
*/
function largestEvenNum(){
    let list = numList();
    let newList = list.split(',');
    let numArr;
    for(let i = 0; i < newList.length; i++) {
        if(newList[i] % 2 == 0){
            numArr.push(newList[i]);
        }
    }
    numArr.sort(function(a, b){return b - a});
    alert(numArr[0]);
}
/*alerts the current day and time in the
following format:
Example:
Today is Friday.
It is 4:00PM.
*/
function currDayTime(){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let now = new Date();
    let hr = now.getHours();
    let ampm = "am";
if( hr > 12 ) {
    hr -= 12;
    ampm = "pm";
}
    let dateStr = "Today is " + days[now.getDay()] + ". It is " + hr + ":" + now.getMinutes() + ampm + ".";
    document.getElementById("demo9").innerHTML = dateStr;
}
//let list = wordList();
//unlimited(list);
/*Accepts an unlimited number of
arguments and prints them out in a single string in a single alert.*/
function unlimited(...args){
    alert(args);
    
}
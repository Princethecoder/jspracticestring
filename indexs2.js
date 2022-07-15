/*
let str="hello";
console.log(str.charAt('3'));
console.log(str.substring(5,3));
*/

/*
function to check if the given value is string or not
function checkOrNot(stringvalue){
    if(typeof stringvalue === "string"){
        return true
    }
    return false
}
console.log(checkOrNot("prince"));
*/

/*
//function to check if the following string contains the blank space or not
function blank_ornot(str){
     const strArr = str.split("");

     for(let i=0 ; i < strArr.length+1 ; i++){

        if ( strArr[i] ==' ' ){
            return "empty"
        }
       
     }
     return "not empty"
    }
console.log(blank_ornot("prince"));
*/

/*
function to convert string in to array
function stringToArr(str){
    const strArr = str.split("");
    return strArr;
}
console.log(stringToArr("princepatel"));

*/

/*

Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/
/*
function extractString(str, end) {
  let string = str.substring(0, end);
  return string;
}
console.log(extractString("robinsingh", 4));
*/

/* Write a JavaScript function to convert a string in abbreviated form. Go to the editor
Test Data :
console.log(abbrev_name("Robin Singh"));  / "Robin S." */

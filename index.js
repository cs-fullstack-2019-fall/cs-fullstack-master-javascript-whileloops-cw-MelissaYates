// // Classwork: JavaScript While/Do While Loops
//
// CW1
//Print -10 through 5 using a counter and while loop.
var counter = -10;
while(counter<=5){
    console.log(counter);
    counter++;
}
//
//     CW2
//     Write a While loop that counts backwards from 10 to 0 Log the current count at the end of each iteration EXCEPT if the current count is 5
var x = 10;
while(x>= 0) {
 if(x>5 || x<5){
     console.log(x);
 }
    x--;
}

// HINT: Use continue
//
// CW3
// Asks the user Enter a word. Enter 'q' to quit. Create a while loop that will not quit until they enter 'q'.

//
while(userEntry !=="q"){
    var userEntry = prompt("Please enter a word");
    if (userEntry =="abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ"){
        prompt("Please enter a word");
    }
}


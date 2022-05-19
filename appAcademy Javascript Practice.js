/////////////////////////////////DATA TYPES///////////////////////////////////////////////////

console.log("Hello, World!");




// Example:
console.log(4 + 2.5)   // 6.5

// Write 5 more expressions below:
console.log(3+4)
console.log(3-4)
console.log(3*4)
console.log(3/4)
console.log(3%4)

// Example:
console.log(false || false)   // false

// Write 3 more expressions below:
console.log(!true && !!false)
console.log(true && !false)
console.log(false || !true)




// 1. Declare a variable called `firstName` and assign it your first name as a string:
let firstName = "Travis"

// 2. Declare a variable called `lastName` and assign it your last name as a string:
let lastName = "Stephenson"

// 3. Declare a variable called `age`:
let age 

// 4. Print out the `firstName`, `lastName`, and `age` variables. What do you
//    expect them to be when they get printed?
console.log(firstName,lastName);

// 5. Assign the `age` variable to a number:
age = 5

// 6. Print out the `firstName`, `lastName`, and `age` variables. What do you
//    expect them to be when they get printed?
console.log(firstName,lastName,age);
console.log(age,lastName,firstName);
console.log(firstName[5],lastName[1],age);




////////////////////////////////INTRO TO FUNCTIONS//////////////////////////////////////////////////

function goodbye(name) {
    // your code here...
    return "bye",
  }
  
  console.log(goodbye("Daniel")); // => "Bye Daniel."
  console.log(goodbye("Mark")); // => "Bye Mark."
  console.log(goodbye("Beyonce")); // => "Bye Beyonce."




function sayBye(name) {
    let msg = "Bye, " + name + "!";
    return msg;
  }
  
  
  
  function sayScrewYou(name){
      let judgement = name.length;
      if ((judgement % 2) === (0)) {
          let reply = "Screw you " + name + "!";
          return reply;
      }
      else {
           reply = "Hey, " + name + ". I guess you are ok.";
           return reply;
      }
  }
  
  function sayWeatherThoughts(weather){
      let mood = "I love all types of weather even when its " + weather + " out.";
      return mood
  }
  
  
  let likedColors = ['blue', 'green', 'white']
  let unlikedColors = ['red', 'black','yellow']
  
  function favoriteColor(color){
  
      if (likedColors.includes(color) == true )  {
          let saying = "Oh " + color + " that is also one of my favorites! Great Choice!";
          return saying;
      }
      else if (unlikedColors.includes(color) == true) {
          saying = "Uh....EWWWWWWWW, I hate hate hate " + color + ". We can no longer be friends. Sorry.";
          return saying;
      }
      else {
          saying = color + "...Never heard of it! Please choose a real color.";
          return saying;
      }
    
      }
      
      
  console.log(sayScrewYou("Hazel"));
  console.log(sayScrewYou("Cirianna"));
  console.log(sayScrewYou("Travis"));
  console.log(sayWeatherThoughts("Rainy"));
  console.log(favoriteColor('blue'));
  console.log(favoriteColor('red'));
  console.log(favoriteColor('white'));
  console.log(favoriteColor('black'));
  console.log(favoriteColor('green'));
  console.log(favoriteColor('yellow'));
  console.log(favoriteColor('aqua'));
  console.log(favoriteColor('maroon'));
  console.log(sayBye("Felicia"));
  




function plusFive(num) {
 
    return num + 5;
  }
  
  console.log(plusFive(10));  // => 15
  console.log(plusFive(2));   // => 7
  console.log(plusFive(-8));  // => -3




function isCool(string) {
    let coolSentence = string + " is cool!"
    console.log(coolSentence)
    return coolSentence
  }
  
  // Call the above function passing in the below arguments:
  isCool("Music")
  isCool("Javascript")
  isCool("This world")




function averageOfTwo(num1, num2) {
    let sum = num1 + num2;
    let average = sum/2; 
    return average // your code here...
  }
  
  console.log(averageOfTwo(3, 7)); // => 5.0
  console.log(averageOfTwo(16, 5)); // => 10.5
  console.log(averageOfTwo(2, 7.5)); // => 4.75




function hello(str) {
    console.log("Hello, " + str);// your code here...
  }
  
  hello("cat"); // prints "Hello, cat"
  hello("Helen"); // prints "Hello, Helen"
  hello("Sting"); // prints "Hello, Sting"




function divideByThree(num) {
    return num / 3;  // your code here...
   }
   
   console.log(divideByThree(9)); // => 3.0
   console.log(divideByThree(15)); // => 5.0
   console.log(divideByThree(98)); // => 32.666666666666664




function whisper(str) {
    let whisperStr = "..." + str.toLowerCase() + "...";
return whisperStr;  // your code here...
}

console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."




function averageOfFour(num1, num2, num3, num4){
    let sum = num1 + num2 + num3 + num4;
    let avg = sum / 4;
    return avg;
}

console.log(averageOfFour(1,2,3,4));
console.log(averageOfFour(100,87,67,71));
console.log(averageOfFour(40,30,20,10));
console.log(averageOfFour(.1,.5,.8,.9));




function yell(str) {
    let yellStr = str.toUpperCase() + "!!!";
    return yellStr;// your code here...  
}

console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"




function echo(string) {
    let echoStr = string.toUpperCase() + "..." + string + "..." + string.toLowerCase();
    return echoStr;// your code here...
  }
  
  console.log(echo("Mom!")); // => prints "MOM! ... Mom! ... mom!"
  console.log(echo("hey")); // => prints "HEY ... hey ... hey"
  console.log(echo("JUMp")); // => prints "JUMP ... JUMp ... jump"




///////////////////////////////////CONTROL FLOW///////////////////////////////////////////////////////

// CONDITIONALS

function isFive(num) {
    if (num % 5 === 0) {
        return true
    } else {
        return false
    };
    
    }
    
    console.log(isFive(5)); // => true
    console.log(isFive(13)); // => false




function isSubstring(searchString, subString) {
    let newString = searchString.toLowerCase(); 
    let newsubString = subString.toLowerCase();
    
    return newString.indexOf(newsubString) != -1;
    
   }
   
   console.log(isSubstring("The cat went to the store", "he cat went")); // => true
   console.log(isSubstring("Time to program", "time")); // => true
   console.log(isSubstring("Jump for joy", "joys")); // => false



function isSubstring(searchString, subString) {
    let newString = searchString.toLowerCase(); 
    let newsubString = subString.toLowerCase();
    
    return newString.indexOf(newsubString) != -1;
    
   }
   
   console.log(isSubstring("The cat went to the store", "he cat went")); // => true
   console.log(isSubstring("Time to program", "time")); // => true
   console.log(isSubstring("Jump for joy", "joys")); // => false


// LOOPS PRACTICE

function logBetween(lowNum, highNum) {
    i = lowNum;
    while(i <= highNum) {
        console.log(i);
        i++;
    };
};


function forLogBetween (lowNum, highNum) {
    for(i = lowNum; i<=highNum; i++) {
        console.log(i);
    };
};

// Examples:
logBetween(-1, 2); // prints out:
forLogBetween(-1, 2);
// -1
// 0
// 1
// 2

logBetween(14, 6); // => prints nothing
forLogBetween(14, 6);


forLogBetween(4, 6);
logBetween(4, 6); // prints out:
// 4
// 5
// 6





function printFives(max) {
    i = 0;
    while(i <= max) {
        console.log(i);
        i+=5;
    }
};

function forPrintFives(max) {
    for(i=0; i<=max; i+=5) {
        console.log(i);
    };
};

function ifPrintFives(max) {
    
    if (i <= max) {
        i = 0;
        console.log(i);
        i+=5;
    };
};


// Example:

printFives(20) 
forPrintFives(20)
ifPrintFives(20)// prints out:
// 0
// 5
// 10
// 15




function logBetweenStepper(min, max, step) {
    i = min;
    while(i <= max){
        console.log(i);
        i+=step;
    };
    
};

function forLogBetweenStepper(min, max, step){
    for(i=min; i<=max; i+=step) {
        console.log(i);
    };
};

function forLogBetweenStepper(min, max, step) {
    let i = min;
    while () {
        if(i <) {
            
        };
    };
};

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
forLogBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9


logBetweenStepper(-10, 15, 5)  // prints out:
forLogBetweenStepper(-10, 15, 5)  // prints out:
// -10
// -10
// -5
// 0
// 5
// 10
// 15





function fizzBuzz(max) {
    i = 0;

    while( i < max) {
        if(i % 3 === 0 || i %5 === 0) {
            console.log(i);
        };
        i+=1;  
    };
};


// Examples:

fizzBuzz(20);



// ARRAYS PRACTICE


function combineArray(array1, array2) {
    let newArray = array1.concat(array2);
    return newArray;
  }
  
  console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
  console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]





function doubler(numbers) {
    let doubledNums = [];
    
    let i = 0
    while (i < numbers.length){
        let oldNums = numbers[i];
        let newNums = oldNums * 2;
        doubledNums = doubledNums.concat(newNums);
        
        i += 1;
    }
    return doubledNums;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]





//VOWEL COUNTER//
const vowels = ["a","e","i","o","u"]

function countVowels(word) {
    let count = 0;
    
      // loop through string to test if each character is a vowel
    for (let letter of word.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    
    //returns vowel count
    return count

   
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2





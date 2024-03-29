/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let vName = 6;
// 2.) Change the value of this variable
vName = 9;
// 3.) Change the data type of this variable
vName = " tests";
// 4.) Create another variable and the one from above to concatenate
let vName2 = 17;
const concat = vName2 + vName; // Logs "17 tests"
// 5.) Use any of the variables above or create new ones and print using string interpolation
console.log(`I have to take ${vName2} differnt${vName}.`);
// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
console.log("Sabrina".charAt(4));
// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

// A code used where each seperate charcter has a different code to refer to it
const letter = "Teddy".charCodeAt(2);
// Using fromCharCode() - make it readable for us :). You'll see!
console.log(letter);
// Take your first and last name and concat()
"Wade".concat(" Coats");
// Create a string and make it return true using startsWith()
"Check".startsWith("Ch");
// Now use any variable with endsWith() and return false
"Not true!".endsWith("false!");
// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, and wept.'
ozgur.includes("time");
// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
joshHadALittleLambOopsCow.indexOf("cow"); // Cow's index = 149
// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.
const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
vanessa.lastIndexOf("Vanessa");
// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
noWeCantTeo.length //Yes we can, returns 30
// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
replaceGokuWithVegeta.replace("Goku", "Vegeta");
// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
joshIsLookingForWifey.search("wifey");
// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
pizzaSentence.slice(7);
// Now using the pizza sentence, return only pizza (before the comma)
pizzaSentence.slice(0, 5);
// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
splitTheBill.split(", ");
// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
splitTheBill.split("");
// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
const tuan = "WHERE IS MY SUPERSUIT?"
tuan.toLowerCase();
// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
jahlunSaidToPutSomeRespectToHisName.toUpperCase()
// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
basicGreeting.substring(1, 4);
// Returns "JavaScript"
const ohReally = "JavaScript Substring"
ohReally.substring(0, 11);
// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
aslDays.substring(15);
// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
const extra = "       Testing out the trim       ";
extra.trim();
// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d == d)
console.log(d != a)
console.log(a < 15)
console.log(a < b < c)
console.log(c > b > a != d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
const ken = "I need to lay down.";
for (let i = 0; i < 10; i++) {
  console.log(ken);
}
// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
const teo = "Can't see straight";
for (let i = 0; i < 20; i++) {
  console.log(teo);
}
// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
const apology = "I'm sorry";
let apologyNum = 0;
while (apologyNum < 20) {
  console.log(apology);
  apologyNum ++;
}
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}
for (const thing in whateverQueenBeySaid) {
  console.log(thing);
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for (const letter in lana) {
  console.log(lana.indexOf(letter))
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
for (const letter of tia) {
  console.log(tia.indexOf(letter));
}
// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
function addPS(student) {
  const string = "PS";
  const newString = student.concat(" ", string);
  console.log(newString);
}

perscholas.forEach(addPS);
// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push() Adds an element to the end of the array and returns the new array's length
// pop() Removes the last element from the array and returns said element
// unshift() Same as push but adds to the beginning instead of the end
// shift() Same as pop but removes the first element instead
// concat() Merges 2 arrays together into a new array
// splice() Changes the elements of an array by removing, replacing, or adding elements | splice(The index you want to change, how many elements you want to replace, the element that will be added)
// slice() Returns a shallow copy of a part of the array depenging on the indexes you start and end from
// sort() Sorts the elements in the array based on their UTF-16 unit values
// includes() Returns true or false depending if the array contains the given element
// indexOf() Returns the first index where the given element can be found 
// length: Returns the number of elements in the array

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1]);
// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
console.log(fruits.join(" "));
// Remove orange
fruits.pop();
// Add strawberry, kiwi, and grapes at the end
fruits.push("strawberry", "kiwi", "grapes");
// Remove apple
fruits.shift();
// Add mango at the beginning of the array
fruits.unshift("mango")
// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, "lemon", "grapefruit");
// Remove banana and strawberry
fruits.splice(3, 2);
console.log(fruits);
// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const exoticFruits = ["Jackfruit", "Lychee", "Kiwano"];
// Print the last two exotic fruits without altering the newly concatenated array.
console.log(exoticFruits[1], exoticFruits[2]);
// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
console.log(monalissaIsMessy.sort());
// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
console.log(mirrorMirrorOnTheWall.reverse());
// ===== HIGHER ORDER METHODS =====
// Rafael said he's trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
const rArray = RafaelNoBadWords.split(" ");
const result = rArray.filter((word) => word != "badword");
console.log((result.toString()).replaceAll(",", " "));
// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]

const initialValue = 0;
const sum = numbersToAddUp.reduce(
  (currentSum, currentValue) => currentSum + currentValue,
  initialValue,
);
console.log(sum);
// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const copy = [...numbersToAddUp];
// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const nickCartoons = ["Spongebob Squarepants", "Ren and Stimpy", "Invader Zim"];
const CNCartoons = ["Adventure Time", "The Amazing World of Gumball", "The Grim Adventures of Billy and Mandy"];
const cartoons = [...nickCartoons, ...CNCartoons];
// Using the variable with the newly connected arrays, use spread operator to add something at the end.
const moreCartoons = [...cartoons, "Rick and Morty"];
// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
const evenMoreCartoons = ["Bojack Horseman", ...moreCartoons];
// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
// Tosi wants ihatethis. :) Print!
const Anthony = donutShop[1][0][1];
console.log(Anthony);
// const Tosi = donutShop[2][0][0][0][1][0];
// console.log(Tosi)
// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
const Teo = ["person", "male", "hungry"];

if (Teo.includes("person")) {
  console.log("Teo is a person!");
  if (Teo.includes("male")) {
    console.log("You got it right!");
    if (Teo.includes("hungry")) {
      console.log("Let's buy Teo some tacos!");
    } else if (Teo.includes("not hungry")) {
      console.log("He doesn't need to eat.");
    } else {
      console.log("If Teo is not hungry, am I hungry?");
    }
  } else if (Teo.includes("female")) {
    console.log("Wrong. Teo is going to remove you from the class.");
  }
} else {
  console.log("Teo is not a person!")
}
// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
const Gustavo = "coolest";

if (Gustavo == "coolest") {
  console.log("You got that right!");
} else {
  console.log("James wants to argue. He says he's the best!");
}
// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting() {
  console.log("Hello, ma'am sir!");
}
sayGreeting();
// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
function showOff(item) {
  console.log("This is my " + item);
}
showOff("car");
// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
function add(firstNumber, secondNumber, thirdNumber) {
  let sum = 0;
  sum = sum + firstNumber + secondNumber + thirdNumber;
  console.log(sum);
}
const var1 = 1;
const var2 = 2;
const var3 = 3;
add(var1, var2, var3);
// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
function fightClub(name) {
  if (name == "Teo") {
    console.log("1st rule: You do not talk about Fight Club.");
  } else if (name == "Manara") {
    console.log("2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.")
  } else if (name == "Liv") {
    console.log("3rd rule: If someone yells 'Stop!', goes limp, taps out, the fight is over.");
  } else if (name == "Devin") {
    console.log("4th rule: Only two guys to a fight.");
  } else {
    console.log("No shirts");
  }
}
fightClub("Devin");
// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello() {
  console.log("Hello!");
  const bye = function() {
    console.log("Goodbye!")
  }
  bye();
}
hello();
// Create a function expression with your first name as the variable and then print your first and last name
const fullName = function(firstName) {
  const lastName = "Coats";
  console.log(firstName + " " + lastName);
}
fullName("Wade");
// Create an arrow function that accepts a number and have it return that number doubled
const double = n => n * 2;
const answer = double(5);
console.log(answer);
// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
const human = {
  name: "Kevin",
  age: 26,
  location: "Seattle, Washington"
}
// Access the name using dot notation
const humanName = human.name;
// Access the age using square brackets
const humanAge = human["age"];
// Use object destructuring to access location
function getLocation ({name, age, location}) {
  console.log(location);
}
getLocation(human);
// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
const ability = bulbasaur.abilities[0].ability;
console.log(ability)
// Print cut
const move = bulbasaur.moves[2];
console.log(move);
// Print Bulbahhhh!!!!!
const sound = bulbasaur.sound;
sound();
// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7;
// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur["order"] = 1;
// Print an array that contains every single properties in bulbasaur
const bulbProps = [];
Object.entries(bulbasaur).forEach(([key, value]) => {
  bulbProps.push(key);
})
console.log(bulbProps);
// Print every single properties one by one in the console

// Print an array that contains every single values in bulbasaur
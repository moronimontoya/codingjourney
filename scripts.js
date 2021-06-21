/*
// Initialize the variable named count and assign it the value of 10.    
var count = 10;
    
    // Declare a function that will print "Hello Moroni" and the value of the variable i 
    function sayMyName() {
        document.writeln(" Hello Moroni! " + i + "<br>");
 //       document.write("<br>");
    }
    
    // Loop that will call the sayMyName function 10 times
    for (var i = 0; i<count; i++) {
        sayMyName();
    }  

    
    function showAlert(){
        alert("Boo!");
    }
    
    
    // Declare an array with three string values
    var myArray = ["Moroni", "Diego", "Arturo"];
    
    
    // Loop that will print out the values in the array
    for (var i = 0; i < myArray.length; i++) {
        document.writeln(myArray[i]);
        document.write("<br>");
    }
*/

//Loop through a string variable and display its content one character at a time
var vowels = "aeiou"; 

for (var i = 0; i < vowels.length; i++) {
    document.writeln(vowels[i] + "<br>");
}

// Declara la variable texto  
var phrase = "Tal como el fuego se ve ya ardiendo"; 

// Obtain the legnth of the phrase 
var length = phrase.length; 
document.writeln(length) + "<br>";

// Ciclo que imprima la letras de atras hacia adelante 
for (var i = length-1; i >= 0 ; i--) { 
    document.writeln(phrase[i]);
}

var person = {
    getName: function(){
        return "The Name is: " + this.firstName + " " + this.lastName;
    }
}

var firstSon = Object.create(person);
firstSon.firstName = "Moroni";
firstSon.lastName = "Montoya"; 

var secondSon = Object.create(person); 
secondSon.firstName = "Diego"; 
secondSon.lastName = "Montoya"; 

alert(firstSon.getName()); 
alert(secondSon.getName()); 

   
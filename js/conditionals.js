"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var didEnterNumber = confirm("Whould you like to enter a number?");

if (didEnterNumber) {
    var userNumber = prompt("What is your number?");
    var userOdd = userNumber % 2 === 1 ? alert("Number is Odd") : alert("Not odd");
    alert(parseFloat(userNumber) +100);
    var userNegative = userNumber > 0 ? alert("Number is Positive") : alert("Number is Negative");

} else {
    alert("Didnt want your number anyway!");
}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/*
function analyzeColor(colorName) {
    if (colorName === 'blue') {
        alert(colorName + ' is the color of the sky');
    } else if (colorName === 'red'){
        alert('Strawberries are ' + colorName);
    }else {
        alert("I dont know anything about " + colorName);
    }
}*/

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results. (ALERTING THE RESULTS INSTEAD!!)
 * You should see a different message everytime you refresh the page
 */

analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(colorName) {
    switch (colorName) {
        case "blue" :
            alert(colorName + ' is the color of the sky');
        break;
        case "red" :
            alert('Strawberries are ' + colorName);
        break;
        default :
            alert("I dont know anything about " + colorName);
    }
}



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("What is your favorite color?");
analyzeColor(userColor);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var discountPrice;
var discountPerc;

function calculateTotal(luckyNumber, totalAmount) {
    
    switch (luckyNumber) {
        case 1:
            discountPerc = .1;
            break;
        case 2:
            discountPerc = .25;
            break;
        case 3:
            discountPerc = .35;
            break;
        case 4:
            discountPerc = .50;
            break;
        case 5:
            discountPerc = 1;
            break;
        default:
            discountPerc = 0;
            break;
    }

    return discountPrice = totalAmount - (discountPerc * totalAmount);
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalAmount = parseFloat(prompt("Whats your total Bill?"));
calculateTotal(luckyNumber, totalAmount);
alert("Your lucky Number was " + luckyNumber + ", Your price before discount was " + totalAmount + " Your price after discount is " + discountPrice);
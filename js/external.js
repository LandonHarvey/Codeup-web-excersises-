
console.log("Hello from external Javascript")

alert("Welcome to my Website");

var favoriteColor = prompt("whats your favorite color?");

alert("Your favorite color is: " + favoriteColor);

//#1
var littleMermaid = prompt("How long have you rented the little mermaid?");
var brotherBear = prompt("How long have you rented the Brother Bear?");
var hercules = prompt ("How long have you rented the Hercules?");
var rentalCost = prompt("How much was the daily rate?");
var totalRentalPay = (parseFloat(littleMermaid)+parseFloat(brotherBear) + parseFloat(hercules))*rentalCost;
alert("You have to pay: $" + totalRentalPay);

//#2
var google = prompt("How much is google paying you per hour?");
var amazon = prompt("How much is amazon paying you per hour?");
var facebook = prompt ("How much is facebook paying you per hour?");
var hoursWorkedAtGoogle = prompt ("How many hours did you work at google?");
var hoursWorkedAtAmazon = prompt ("How many hours did you work at amazon?");
var hoursWorkedAtFacebook = prompt ("How many hours did you work at facebook?");
var totalWeeklyEarning = ((parseFloat(google)*parseFloat(hoursWorkedAtGoogle))+(parseFloat(amazon)*parseFloat(hoursWorkedAtAmazon))+(parseFloat(facebook)*parseFloat(hoursWorkedAtFacebook)));
alert("You will get payed: $" + totalWeeklyEarning + " this week.");


// #3
var classCurrentTotal = 18;
var classTotalRoomAvailable = 20;

    if(classCurrentTotal < classTotalRoomAvailable) {
        var classHasRoom = true;
    }
    else {
        var classHasRoom = false;
    }

var isclassScheduleGood = prompt("Does you class schedule have room for this coming class?");

    if (isclassScheduleGood = 'Yes' || 'yes') {
        var classScheduleIsDefGood = true;
    }

    else {
        var classScheduleIsDefGood = false;
    }

var canBeEnrolled = classHasRoom && classScheduleIsDefGood;

console.log(canBeEnrolled);

//#4
var numberOfItemsPurchased = prompt("How many items were purchased?");
var areYouPremium = prompt("Are you a premium member? Yes or No");
var offerIsStillValid = true;
    if (areYouPremium = 'Yes') {
        var isItPremium = true;
    }

    else {
        var isItPremium = false;
    }

var discountCanBeApplied = offerIsStillValid && (numberOfItemsPurchased > 2 || areYouPremium);

console.log("Discount was applied? " + discountCanBeApplied);


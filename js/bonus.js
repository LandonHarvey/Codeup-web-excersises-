// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units
// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2
//
// var reportContents = "Monthly Sales Report\n" +
//     "Date: 03-17-2015\n" +
//     "Office: Codeup\n " +
//     "===================================================\n" +
//     "Employee Number, First Name, Last Name, Sales Units\n" +
//     "***************************************************\n" +
//     "\n" +
//     "1, Jane, Janeway, 3\n" +
//     "3, Tricia, Triciason, 5\n" +
//     "4, Jeannette, Jeanson, 4\n" +
//     "5, Charles Emmerson III, Winchester, 2\n" +
//     "6, Chet, Chedderson, 8\n" +
//     "7, Chaiam, Chaiamson, 12\n" +
//     "8, Dale, Dalesinger, 1\n" +
//     "9, Zig, Ziglar, 50\n" +
//     "10, Henry, Kissinger, 1\n" +
//     "11, Arthur Herbert, Fonzarelli, 23\n" +
//     "12, Betty, Boop, 67";
//
//
// var reportArray = reportContents.split(/\n/);
//
// console.log(reportArray);
//
// document.body.innerText = reportArray;
//
// var employeeArray = reportArray.slice(7);

// console.log(employeeArray);

High = [5,4,2, -100, Infinity];
var largest = 0;

function getHighest() {
    for (var i = 0; i < High.length; i++) {
        if (High[i] > largest) {
            largest = High[i];
        }
    }
    console.log(largest);
}

getHighest();

Low = [11,12,14,15,16,18,-100];
lowest = 0;

function getLowest() {
    for (var i = 0; i < Low.length; i++) {
        if (Low[i] < lowest) {
            lowest = Low[i];
        }
    }
    console.log(lowest)
}

getLowest();


var arrayOfNumbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

var sum = 0;


function sumAllNumbers() {
    for (var i = 0; i <arrayOfNumbers.length; i++) {
        for (var j = 0; arrayOfNumbers[i].length; j++) {
            sum += arrayOfNumbers[i][j];
        }
    }
}

sumAllNumbers();











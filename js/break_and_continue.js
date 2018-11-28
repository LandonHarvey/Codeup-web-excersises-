
//#6
for (input = prompt("Input a number between 1 and 50");;) {
    if (input > 50 || input < 1) {
        input = prompt("Input a number between 1 and 50");
    } else {
        alert("Thanks Fool");
        break;
    }
}

//#7
for (not = prompt("Input a number between 1 and 50"), i = 1; i < 50; i++) {
    if (i % 2 === 0) {
        continue;
    }else if (i == not) {
        console.log("YIKES NAH BRO " + i);
       i= i + 2;
    } else if (i<50) {
        console.log("Your number is odd and " + i);
        i= i + 2;
    } else {
        break;
    }
}
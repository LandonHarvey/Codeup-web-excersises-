

//#2
function showMulitplicationTable(number) {

    for (var multiplicative = 1; multiplicative < 11; multiplicative++) {
        var totalNumber = number * multiplicative;
        console.log(number + "*" + multiplicative + "=" + totalNumber);
    }
}

//#3

var i= Math.floor((Math.random() * 200) +20);

for (var i= Math.floor((Math.random() * 200) +20), j=0; j < 5; j++) {
    if (i  % 2 === 1) {
        console.log(i + " is Odd")
        i = Math.floor((Math.random() * 200) +20)
    }else {
        console.log(i + " is Even")
        i = Math.floor((Math.random() * 200) +20)
    }
}


//#4

for(i = 1, output= ""; i <= 9; i++) {
    output = String(i).repeat(i)
    console.log (output);
}

//#5
for (i = 100; i > 4; i -5) {
    console.log(i);
    i = i - 5
}



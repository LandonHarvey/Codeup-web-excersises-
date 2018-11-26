

//While Exercise
var i = 1;

while (i < 65536 ) {

    i = i *2;
    console.log(i);

}


var allCones = Math.floor(Math.random() * 50) + 50;


//Ice Cream Exercise
do {
    var purchasedCones = Math.floor(Math.random() * 5) + 1;

    if (purchasedCones > allCones) {
        console.log("Cannot sell you " + purchasedCones + " I only have " + allCones);
    } else {
        allCones = allCones - purchasedCones;
        console.log(purchasedCones + " cones sold");
    }

} while (allCones > 0);

console.log("YAY! Sold all these fools!");


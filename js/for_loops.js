
function showMulitplicationTable(number) {

    for (var multiplicative = 1; multiplicative < 11; multiplicative++) {
        var totalNumber = number * multiplicative;
        console.log(number + "*" + multiplicative + "=" + totalNumber);
    }
}

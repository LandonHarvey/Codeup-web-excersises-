(function() {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");


    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    planetsString = planetsArray.join("<br>");
    console.log(planetsString);

    // var htmlString = "<ul></ul>";
    // htmlString += planetsArray.join("<li></li>");
    // htmlString += "<li></li>";
    //
    // document.body.innerHTML += htmlString;

    function makeUl(array) {

        var list = document.createElement("ul");

        for (var i = 0; i < array.length; i++) {

            var LI = document.createElement("li");

            LI.appendChild(document.createTextNode(array[i]));

            list.appendChild(LI);
        }
        return list;
    }

    console.log(makeUl(planetsArray));

})();


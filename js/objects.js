(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstname: "Rick",
        lastname: "Sanchez"
    };

    console.log(person.lastname);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function () {
        console.log( "Hello fom " + this.firstname + " " + this.lastname + "!");
    };
    person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // Better WAY!!!
    // function checkout(clients){
    //     clients.forEach(function (client) {
    //         var discount = (client.amount >= 200) ? client.amount * 0.12: 0;
    //         var total = client.amount - discount;
    //         console.log(client.name + " " + client.amount + " " + discount + " " + total);
    //     })
    // }

    shoppers.discount = function () {
        for (var i = 0; i < shoppers.length; i++) {
            if (shoppers[i].amount > 200) {
                var total = shoppers[i].amount * .88;
                console.log(shoppers[i].name + " " + total);
            }else {
                total = shoppers[i].amount;
                console.log(shoppers[i].name + " " + total);
            }
        }
    };

    shoppers.discount();

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title:'Disturbing sunset', auther: {firstName: 'Doug', lastName: 'Dudeman'}},
        {title:'Darkest moonset', auther: {firstName: 'Ding', lastName: 'Dudegirl'}},
        {title:'Dimmest marspass', auther: {firstName: 'Dong', lastName: 'Dudebro'}},
        {title:'Darkened venuslift', auther: {firstName: 'Dan', lastName: 'Dudesteve'}},
        {title:'Dingy albatross', auther: {firstName: 'Donald', lastName: 'Dudeyup'}}
    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title,author) {
        var name = author.split('');

        return {
            title: title,
            author: {
                firstName: name[0],
                lastName: name[1]
            }
        }
    }

    books.push(createBook('bobs man', 'dude'));

    books.forEach(function(book, index) {
        console.log('Book #' + (index + 1));
        showBookInfo(book);
    });

    function showBookInfo (book) {
        console.log("Title: " + book.title + "\n" + book.auther.firstName + " " + book.auther.lastName + "\n" + "---" + "\n");
    }


    // var createBook = function () {
    //    var bookC = {};
    //    bookC.title = prompt("Name THE BOOK!!!");
    //    bookC.author = prompt("Name THE AUTHOR");
    //    console.log(bookC);
    // };
    //
    // createBook();

})();
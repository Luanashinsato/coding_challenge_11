// Task 1: Creating a Book Class
class Book {
    constructor (title, author, isbn, copies) { 
        this.title = title; // Assigning book title 
        this.author = author; // Assigning book author 
        this.isbn = isbn; // Assigning unique book isbn
        this.copies = copies; // Assigning book copies 
    }
    // Adding a method that returns a formatted string of book details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    // Adding a method that modifies the available copies when a book is borrowed or returned
    updateCopies(quantity) {
        if (this.copies + quantity >=0) {
            this.copies += quantity;
        } else {
            console.log("Not enough copies available.");
        }
    }
}

// Test Cases
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Task 2: Creating a Borrower Class
class Borrower {
    constructor (name, borrowerId){
        this.name = name; // Assigning borrower name 
        this.borrowerId = borrowerId; // Assigning borrower id 
        this.borrowedBooks = []; // Assigning borrowed book titles
    }
    // Adding a method that adds a book title to borrowedBooks
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
    // Adding a method that removes the book from borrowedBooks
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log("Error: Book not found in borrowed list.");
        }
    }
}

// Test Cases
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: []


// Task 3: Creating a Library Class
class Library {
    constructor () {
        this.books = []; // Array of Book instances
        this.borrowers = []; // Array of Borrower instances
    }
    // Adding a method that adds a new book to the library
    addBook(book) {
        this.books.push(book);
    }
    // Adding a method that logs all books' details 
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

    // Task 4: Adding a method to lend a book to borrower 
    lendBook(borrowerId, isbn) {
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        const book = this.books.find(b => b.isbn === isbn); 

        // Checking if borrower and book exist and if copies are available
        if (borrower && book && book.copies > 0) {
            book.updateCopies(-1); // Reducing the book's copies by 1 
            borrower.borrowBook(book.title); // Updating the borrower's list
        }
    }
    // Task 5: Adding a method to return a borrowed book to the library 
    returnBook(borrowerId, isbn) {
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        const book = this.books.find(b => b.isbn === isbn);  

        // Checking if borrower has the book before returning it 
        if (borrower && book && borrower.borrowedBooks.includes(book.title)) {
            book.updateCopies(1); // Increasing the book’s available copies
            borrower.returnBook(book.title); // Removing the book from the borrower’s borrowed list
        }
    }
}

// Test Cases
const library = new Library();
library.addBook(book1);
library.borrowers.push(borrower1); // I added this to register borrower to the library because if not, borrower1 is not found. 
library.listBooks(); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Task 4: Implementing Book Borrowing
// Adding a method in the Library class
// Test Cases 
library.lendBook(201, 123456);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]


// Task 5: Implementing Book Returns 
// Adding a method in the Library class 
// Test Cases 
library.returnBook(201, 123456);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks); // Expected output: []

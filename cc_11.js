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
    constructor (name, borrowerId, borrowedBooks){
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

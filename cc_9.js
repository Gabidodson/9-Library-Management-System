//Creating a Book Class
class Book{
    constructor (title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }
getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
}
get isAvailable() {
    return this._isAvailable;
}
set isAvailable(status){
    this._isAvailable = status;
}
}
//Create a Section Class
class Section {
    constructor(name){
        this.name = name;
        this.books =[];
    }
addBook(book) {
    if (book instanceof Book) {
        this.books.push(book);
    } else{
        console.error("Not a Valid Book");
    }
}
getAvailableBooks(){
    return this.calculateTotalBooksAvailable();
}
       listBooks() {
        return this.books.map(book => {
            return `${book.title} - ${book.isAvailable ? 'Available': 'Not Available'}`;

        }).join('\n');
       } 
       calculateTotalBooksAvailable(){
        return this.books.reduce((total, book) =>{
            return total + (book.isAvailable ? 1 : 0);
        },0);
       }    
        }
    

//Create a Patron Class
class Patron {
    constructor(name){
        this.name = name;
        this.borrowedBooks= [];
    }
    borrowBook(book) {
        if (book instanceof Book && book.isAvailable){
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} Succesfully Borrowed "${book.title}"`);
        }else if (!(Book instanceof book)) {
            console.error("Not a vaild book");
        }else {
            console.log(`Unfortunately, "${book.title}" is not available`);
        }
    }
returnBook(book) {
    const index = this.borrowedbooks.findIndex(b=> b.ISBN === book.ISBN);
    if (index !== -1){
        book.isAvailable = true;
        this.borrowedbooks.splice(index, 1);
        console.log(`${this.name} succesfully returned "${book.title}"`);
    } else {
        console.log(`${this.name} did not borrow "${book.title}"from here`);
    }
}
}

//Create a VIPPatron class that inherits from Patron
class VIPPatron extends Patron {
    constructor(name) {
        super(name);
            this.priority = true;
        }
        borrowBook(book) {
            if(book instanceof Book) {
                if (book.isAvailable) {
                    super.borrowBook(book);
                }else{
                    const currentBorrower = this.findCurrentBorrower(book);
                    if (currentBorrower && !(currentBorrower instanceof VIPPatron)){
                        currentBorrower.returnBook (book);
                        super.borrowBook(book);
                        console.log(`VIP ${this.name} has priority and borrowed "${book.title}" from other Patron`);
                    }else{
                        console.log(`Sorry, "${book.title}" is not available, under any circumstances`);
                    }
                }
            }else{
                console.error("Not a valid Book");
            }
        }
        findCurrentBorrower(book) {
console.log("findCurrentBorrower should be implemented");
return null;
        }
    }

//Handle Books Borrowing and Returning
//added to class section

//Create and Manage Sections and Patrons

const Romance = new Section("Romance");
const Science = new Section("Science");

// Create books
const book1 = new Book("It Starts With Us", "Colleen Hoover", "9781668001226");
const book2 = new Book("The Cure", "K.A. Riley", "978513473794");
const book3 = new Book("Letters to a Young Scientist", "Edward O. Wilson", "9780871403858");
const book4 = new Book("Believing Is Seeing","Michael Guillen","9781496455581");
// Add books to sections
Romance.addBook(book1);
Romance.addBook(book2);
Science.addBook(book3);
Science.addBook(book4);
// Create patrons
const regularPatron = new Patron("Ophelia Pane");
const vipPatron = new VIPPatron("Paige Turner");
//borrowing and returning
console.log("---Initial State---");
console.log("Romance section books:");
console.log(Romance.listBooks());
console.log("\nScience section books:");
console.log(Science.listBooks());

console.log("\n---Regular Patron borrows a book---");
regularPatron.borrowBook(book1);

console.log("\n---VIP patron tries to borrow same book---");
vipPatron.borrowBook(book1)
console.log("\n---Regular patron returns book---");
console.log("\n---VIP patron borrows book after the return---");
vipPatron.borrowBook(book1);

console.log("\n---Final State---");
console.log("Romance Book Sections:");
console.log(Romance.listBooks());
console.log("\nScience Book Sections:");
console.log(Science.listBooks());

// Calculate total available books in each section
console.log(`Total available books in Romance: ${Romance.getAvailableBooks()}`);
console.log(`Total available books in Science: ${Science.getAvailableBooks()}`);
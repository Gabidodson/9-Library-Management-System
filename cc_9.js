//Creating a Book Class
class Book{
    constructor (title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }
getdetails() {
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
        console.error("Not Found");
    }
}
       listbooks() {
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
        this.borrowedbooks= [];
    }
    borrowbook(book) {
        if (book instanceof Book && book.isAvailable){
            book.isAvailable = false;
            this.borrowedbooks.push(book);
            console.log(`${this.name}Sucesfully Borrowed "${book.title}`);
        }else if (!(book instanceof book)) {
            console.error("Not found");
        }else {
            console.log(`Unfortunately, "${book.title}" is not available`);
        }
    }
returnBook(book) {
    const index = this.borrowedbooks.findIndex(b=> b.ISBN === book.ISBN);
    if (index !== -1){
        book.isAvailable = true;
        this.borrowedbooks.splice(index, 1);
        console.log(`${this.name} sucesfully returned "${book.title}"`);
    } else {
        console.log(`${this.name} did not borrow "${book.title}"from here`);
    }
}
}

//Create a VIPPatron class that inherits from Patron
class VIPPatron extends Patron {
    constructor(name) {
        super(name) ;
            this.priority = true;
        }
        borrowBook(book) {
            if(book instanceof Book) {
                if (book.isAvailable){
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
                console.error("Not a valid Book object");
            }
        }
        findCurrentBorrower(book){
console.log("findCurrentBorrower should be implemented");
return null;
        }
    }

//Handle Books Borrowing and Returning
//added to class section

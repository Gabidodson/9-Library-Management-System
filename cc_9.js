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
       listbooks() {
        return this.books.map(book => {
            return `${book.title} - ${book.isAvailable ? 'Available': 'Not Available'}`;

        }).join('/n');
       }     
        }
}

//Create a Patron Class
class Patron {
    constructor(name){
        this.name = name;
        this.borrowedbooks= [];
    }
    borrowedbook(book) {
        if (book instanceof book && book.isAvailable){
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

    
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


    
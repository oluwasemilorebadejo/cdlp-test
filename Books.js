class Book {
    constructor(title, author, ISBN, publicationYear) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.publicationYear = publicationYear;
    }
  
    getBookInfo() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`ISBN: ${this.ISBN}`);
      console.log(`Publication year: ${this.publicationYear}`);
    }
  }
  
  class PhysicalBook extends Book {
    constructor(title, author, ISBN, publicationYear, shelfLocation, isAvailable) {
      super(title, author, ISBN, publicationYear);
      this.shelfLocation = shelfLocation;
      this.isAvailable = isAvailable;
    }
  
    borrow() {
      this.isAvailable = false;
    }
  
    returnBook() {
      this.isAvailable = true;
    }
  }
  
  class DigitalBook extends Book {
    constructor(title, author, ISBN, publicationYear, fileSize, downloadLink) {
      super(title, author, ISBN, publicationYear);
      this.fileSize = fileSize;
      this.downloadLink = downloadLink;
    }
  
    getBookInfo() {
      super.getBookInfo();
      console.log(`File Size: ${this.fileSize}`);
    }
  }
  
  class Member {
    constructor(memberID, name) {
      this.memberID = memberID;
      this.name = name;
      this.borrowedBooks = [];
    }
  
    borrowBook(physicalBook) {
      if (physicalBook.isAvailable) {
        physicalBook.borrow();
        this.borrowedBooks.push(physicalBook);
        console.log(`${this.name} has borrowed "${physicalBook.title}"`);
      } else {
        console.log(`Sorry, "${physicalBook.title}" is not available for borrowing.`);
      }
    }
  
    returnBook(physicalBook) {
      const bookIndex = this.borrowedBooks.indexOf(physicalBook);
      if (bookIndex !== -1) {
        physicalBook.returnBook();
        this.borrowedBooks.splice(bookIndex, 1);
        console.log(`${this.name} has returned "${physicalBook.title}"`);
      }
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
      this.members = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(book) {
      const bookIndex = this.books.indexOf(book);
      if (bookIndex !== -1) {
        this.books.splice(bookIndex, 1);
      }
    }
  
    registerMember(member) {
      this.members.push(member);
    }

    getAvailableBooks () {
        return this.books
    }
  }
  
  // Example usage:
  const library = new Library();
  
  const book1 = new PhysicalBook("Book 1", "Author 1", "ISBN-1", 2022, "A1", true);
  const book2 = new PhysicalBook("Book 2", "Author 2", "ISBN-2", 2023, "A2", true);
  const book3 = new DigitalBook("E-Book 1", "Author 3", "ISBN-3", 2021, "2 MB", "https://example.com/ebook");
  
  const member1 = new Member(1, "John Doe");
  const member2 = new Member(2, "Jane Smith");
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  library.addMember(member1);
  

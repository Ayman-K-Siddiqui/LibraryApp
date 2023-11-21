const myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;

  this.info = function () {
    if (this.haveRead) {
      return `${this.title} by ${this.author}, ${this.pages} pages, have read the book`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    }
  };
}

function addBookToLibrary(title, author, pages, haveRead) {
  const newBookObject = new Book(title, author, pages, haveRead);
  myLibrary.push(newBookObject);
}

addBookToLibrary("your lie", "william", 280, true);
addBookToLibrary("your lie", "william", 280, true);
addBookToLibrary("your lie", "william", 280, true);
addBookToLibrary("your lie", "william", 280, true);

function displayLibraryBooks(myLibrary) {
  const display = document.getElementById("displayBooks");

  myLibrary.forEach((element) => {
    display.innerHTML += `<p>${element.info()}</p>`;
  });
}

displayLibraryBooks(myLibrary);

const myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;

  this.info = function () {
    if (this.haveRead) {
      return `${this.title} by ${this.author}, ${this.pages}, Yes`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages}, No`;
    }
  };
}

function addBookToLibrary(title, author, pages, haveRead) {
  const newBookObject = new Book(title, author, pages, haveRead);
  myLibrary.push(newBookObject);
}

// Manual Additions
// addBookToLibrary("Book", "Author", 290, false);
// addBookToLibrary("your lie", "william", 280, true);
// addBookToLibrary("your lie", "william", 280, true);
// addBookToLibrary("your lie", "william", 280, true);

// Displays Books
function displayLibraryBooks(myLibrary) {
  const display = document.getElementById("displayBooks");

  myLibrary.forEach((element) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `<p>${element.info()}</p>`;
    display.appendChild(bookDiv);
  });
}

displayLibraryBooks(myLibrary);

const showButton = document.getElementById("showDialog");
const addDialog = document.getElementById("addDialog");
const cancelButton = document.getElementById("cancelBtn");
const submitButton = document.getElementById("submitBtn");

showButton.addEventListener("click", () => {
  addDialog.showModal();
});

cancelButton.addEventListener("click", () => {
  addDialog.close();
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // prevent the default form submission behavior

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const haveRead = document.getElementById("read").value === "yes";

  console.log(title, author, pages, haveRead);
  addBookToLibrary(title, author, pages, haveRead);
  displayLibraryBooks(myLibrary);
  addDialog.close();
});

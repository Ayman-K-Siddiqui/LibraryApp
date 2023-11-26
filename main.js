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

  // Toggles Read Status Protype
  this.toggleReadStatus = function () {
    this.haveRead = !this.haveRead;
  };
}

function addBookToLibrary(title, author, pages, haveRead) {
  const newBookObject = new Book(title, author, pages, haveRead);
  myLibrary.push(newBookObject);
}

// Manual Additions
addBookToLibrary(
  "Harry Potter and the Order of the Phoenix",
  "J. K. Rowling",
  766,
  false
);
addBookToLibrary("Naruto", "Masashi Kishimoto", 192, true);
addBookToLibrary("One Piece Vol. 1", "Eiichiro Oda", 216, true);

const display = document.getElementById("displayBooks");

// Displays Books
function displayLibraryBooks(myLibrary) {
  myLibrary.forEach((element) => {
    const bookDiv = document.createElement("div");
    const removeButton = document.createElement("button");
    const toggleButton = document.createElement("button");

    removeButton.classList.add("removeButton");
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(element), 1);
      display.innerHTML = "";
      displayLibraryBooks(myLibrary);
    });

    toggleButton.classList.add("toggleButton");
    toggleButton.innerHTML = `Change State to ${element.haveRead ? "Not Read" : "Read"}`;
    toggleButton.addEventListener("click", () => {
      element.toggleReadStatus();
      display.innerHTML = "";
      displayLibraryBooks(myLibrary);
    });

    bookDiv.classList.add("book");
    bookDiv.style.fontSize = "20px";
    bookDiv.innerHTML = `<p>${element.info()}</p>`;

    bookDiv.appendChild(removeButton);
    bookDiv.appendChild(toggleButton);

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

  if (isNaN(pages) || pages.trim() === "") {
    alert("Please enter a valid number for pages.");
    return;
  }

  addBookToLibrary(title, author, parseInt(pages, 10), haveRead);

  display.innerHTML = "";
  displayLibraryBooks(myLibrary);
  addDialog.close();
});

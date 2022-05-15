const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.getElementsByName('read');
const readTrue = document.querySelector('#radio-true');
const readFalse = document.querySelector('#radio-false');
const submit = document.querySelector('form > button');
const form = document.querySelector('form');

//Create Library List
const myLibrary = [];

//Once user information is submitted, create new book object
    //Book object constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

    //If all input boxes are filled in correctly,
        //Event listener on submit button
        form.addEventListener("submit", function(e) {
            const book = new Book(title.value, author.value, pages.value, read.value);
            myLibrary.push(book);
        });
    
    //If input boxes are empty
        //Inform user which boxes must be filled

//Push book object into myLibrary

//forEach element in myLibrary, display in table with DOM

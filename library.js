const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
let read = document.querySelectorAll('input[name="read"]');
const readTrue = document.querySelector('#radio-true');
const readFalse = document.querySelector('#radio-false');
const submit = document.querySelector('form > button');
const form = document.querySelector('form');
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');



//Create Library List
const myLibrary = [];

//Once user information is submitted, create new book object
    //Book object constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.remove = function () {
        //deletes object instance from myLibrary array
        const index = myLibrary.indexOf(this);
        myLibrary.splice(index,1);
    }
}

//If all input boxes are filled in correctly,
//Event listener on submit button
form.addEventListener("submit", function(e) {
    e.preventDefault(); //prevents the default behavior of this even - which is to reload webpage
    
    //asigns value to the variable "read"
    for (let option of read) {
        if (option) read = option.value;
    }

    const book = new Book(title.value, author.value, pages.value, read);
    myLibrary.push(book);
    addBook(book);

    read = document.querySelectorAll('input[name="read"]');
});
        
    
//If input boxes are empty
//Inform user which boxes must be filled

function addBook(book) {
    const tr = document.createElement('tr');
    const currentBook = myLibrary[myLibrary.length - 1];
    const del = document.createElement('input');

    for (let info in currentBook) {
        let td = document.createElement('td');

        if (info === "remove") {
            del.setAttribute('type', 'image');
            del.setAttribute('src', 'img/trash-icon.png');
            del.setAttribute('alt', 'trash icon');
            del.style.maxWidth = '100%';
            td.style.display = 'flex';
            td.style.justifyContent = 'center';
            td.style.maxWidth = '100%';
            td.classList.add('delButton');
            td.appendChild(del);
            tr.appendChild(td);


            //adds event listener. When clicked, removed row
            del.addEventListener('click', (e) => {
                del.parentElement.remove();
                
                //deletes book from myLibrary
                book.remove(); 
            });

        } else { 
            td.innerText = currentBook[info]; 
        }

        tr.appendChild(td);
    }

    //Appends the delete button
    // let td = document.createElement('td');
    // const del = document.createElement('input');
    // del.setAttribute('type', 'image');
    // del.setAttribute('src', 'img/trash-icon.png');
    // del.setAttribute('alt', 'trash icon');
    // del.style.maxWidth = '100%';
    // td.style.display = 'flex';
    // td.style.justifyContent = 'center';
    // td.style.maxWidth = '100%';
    // td.appendChild(del);
    // tr.appendChild(td);


    tbody.appendChild(tr);
    // return del;
}


// //Deletes entire row if del is pressed
// del.addEventListener("click",(e) => {

// });
const input_title = document.getElementById('title');
const input_author = document.getElementById('author');
const input_pages = document.getElementById('pages');
const input_read = document.getElementById('read');

const grid = document.querySelector('.grid');
const form = document.querySelector('#form');
const submit = document.querySelector('.submit');

// Used to set the reading status of a book

let user_read = 'read';
let user_not_read = 'Not read yet';
let check_if_read;

//Current book to be displayed in the DOM 
//Note: Further detail in displayBook function

let curr_Book_Obj = 0;

//Collection of Book Objects

let myLibrary = [];

// Sets the data attribute for each card

let set_Attribute_Iterable = 0;

//Book constructor

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Adds book object to myLibrary array

function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

//display book onto screen

function displayBook(){
    for(let i = curr_Book_Obj; i < myLibrary.length; i++){
        const card = document.createElement('div');
        card.classList.add('card');

        card.style.height = '350px';
        card.style.width = '250px';
        card.style.borderRadius = '10px';
        card.style.backgroundColor = 'silver';

        card.setAttribute('data-obj', `${i}`);

        const remove = document.createElement('button');
        remove.textContent = "remove";
        remove.style.borderRadius = "10px";
        remove.style.padding = '7px 15px';
        remove.style.backgroundColor = 'yellow';
        remove.style.cursor = "pointer";
        const changeReadStatus = document.createElement('button');
        changeReadStatus.classList.add('readornot');
        changeReadStatus.textContent = 'Read/Not Read';
        changeReadStatus.style.borderRadius = '5px';
        changeReadStatus.style.padding = "10px 20px";
        changeReadStatus.style.cursor = 'pointer';
        grid.appendChild(card);

        //Removes a book from both the display and library

        remove.addEventListener('click', () => {   
            myLibrary.splice(card.getAttribute('data-obj'), 1);
            
            grid.removeChild(card);
            grid.childNodes.forEach(function(el){
                el.setAttribute('data-obj', `${set_Attribute_Iterable}`);
                set_Attribute_Iterable++;
            });

            curr_Book_Obj--;
            while(set_Attribute_Iterable > 0){
                set_Attribute_Iterable--;
            }
        });

        //Toggle between read and not read 

        changeReadStatus.addEventListener('click', () => {
            readStatus(myLibrary[card.getAttribute('data-obj')]);
            card.childNodes[3].textContent = `${myLibrary[card.getAttribute('data-obj')].read}`;
        });

        for(let key in myLibrary[i]){
            const cardText = document.createElement('h2');
            cardText.style.color = "black";
            cardText.style.fontSize = '20px';
            cardText.textContent = `${myLibrary[i][key]}`;
            card.appendChild(cardText);
            card.appendChild(remove);
            card.appendChild(changeReadStatus);
        }
        curr_Book_Obj++;
        
        cards = document.querySelectorAll('.card');
    }
}

//changes the read status of a book

function readStatus(bookObj) {
    if(bookObj.read == user_read){
        bookObj.read = user_not_read;
        console.log('card is read: ' + bookObj)
        return bookObj.read;
    } else {
        bookObj.read = user_read;
        console.log('card is not read: ' + bookObj);
        return bookObj.read;
    }
}

function exitFormBtn(){
    form.style.display = 'none';
    document.querySelector('header').style.opacity = 1;
    grid.style.opacity = 1;
    input_author.value = "";
    input_pages.value = "";
    input_title.value = "";
    input_read.value = "";
}

function displayFormBtn(){
    form.style.display = 'flex';
    document.querySelector('header').style.opacity = 0.2;
    grid.style.opacity = 0.2;
    input_author.value = "";
    input_pages.value = "";
    input_title.value = "";
    input_read.checked = "";
}

//displays book in the UI and adds book to the library

submit.addEventListener('click', (e) => {
    if(title.value == "" || author.value == "" || pages.value == ""){
        return;
    } else {    
        e.preventDefault();
        check_if_read = (input_read.checked == true) ? user_read: user_not_read;
        addBookToLibrary(input_title.value, input_author.value, input_pages.value, check_if_read);
        displayBook();
        exitFormBtn();
    }
});
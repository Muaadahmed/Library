const input_title = document.querySelector('.title');
const input_author = document.querySelector('.author');
const input_pages = document.querySelector('.pages');
const input_read = document.getElementById('read');

const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const submit = document.querySelector('.submit');


let user_read = 'read';
let user_not_read = 'Not read yet';
let check_if_read;
let curr_Book_Obj = 0;

let myLibrary = [];
let set_Attribute_Iterable = 0;
let libraryBook = 0;
let cardNum;

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

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
}

function displayFormBtn(){
    form.style.display = 'flex';
    document.querySelector('header').style.opacity = 0.2;
    grid.style.opacity = 0.2;
}

//displays book in the UI and adds book to the library

submit.addEventListener('click', () => {
    check_if_read = (input_read.checked == true) ? user_read: user_not_read;
    addBookToLibrary(input_title.value, input_author.value, input_pages.value, check_if_read);
    displayBook();
    exitFormBtn();
});
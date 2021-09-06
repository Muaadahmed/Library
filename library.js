const input_title = document.querySelector('.title');
const input_author = document.querySelector('.author');
const input_pages = document.querySelector('.pages');
const input_read = document.querySelector('.read');
const grid = document.querySelector('.grid');

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return title + " by " + author + ", " + pages + " pages" + ", " + read;
    // }
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
    return myLibrary;
}

// submit button and once submitted display info on a card in the grid

function displayBook(){
    for(let i = 0; i < myLibrary.length; i++){
        //display book onto screen
        const card = document.createElement('div');
        card.style.height = '220px';
        card.style.width = '220px';
        card.style.borderRadius = '10px';
        card.style.backgroundColor = 'red';
        grid.appendChild(card);
        for(let key in myLibrary[i]){
            const cardText = document.createElement('h2');
            cardText.style.color = "White";
            cardText.textContent = `${myLibrary[i][key]}`;
            card.appendChild(cardText);
        }

    }
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
const hobbit2 = new Book("The Hobbit part 2", "J.R.R. Tolkien", 205, "read");
const hobbit3 = new Book("The Hobbit part 3", "J.R.R. Tolkien", 390, "Not read yet");
addBookToLibrary(hobbit);
addBookToLibrary(hobbit2);
addBookToLibrary(hobbit3);
displayBook();
console.log(myLibrary);

// const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
// console.log(hobbit.info());

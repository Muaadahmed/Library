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
let elementStorage = [];
let libIncrement = 0;
let spliceCount = 0;
let index;
let libraryLength;
let child;
let set_Attribute_Iterable = 0;


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return title + " by " + author + ", " + pages + " pages" + ", " + read;
    // }
}

function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// submit button and once submitted display info on a card in the grid

function displayBook(){
    for(let i = curr_Book_Obj; i < myLibrary.length; i++){
        //display book onto screen
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
        remove.addEventListener('click', () => {
            
            //console.log(card.getAttribute('data-obj'));
            myLibrary.splice(card, 1);
            grid.removeChild(card);
            grid.childNodes.forEach(function(el){
                el.setAttribute('data-obj', `${set_Attribute_Iterable}`);
                set_Attribute_Iterable++;
            });
            //console.log(card.childNodes.getAttribute('data-obj'));

            // grid.removeChild(card);
            // console.log(myLibrary);
            grid.childNodes.forEach((el) => console.log(el))
            curr_Book_Obj--;
            while(set_Attribute_Iterable > 0){
                set_Attribute_Iterable--;
            }
        });

        // If you remove from the display a card and then attempt to change read status it either changes on 
        // the button after it or causes an error (like if you try to change the reading status of the button that
        // was being changed when another button as clicked)
        changeReadStatus.addEventListener('click', () => {
            //parent gives me nodelist of all card objects
            //children gives me a card object in a nodelist
            //children.nodes gives me the elements inside the card object 
            let parent = document.querySelectorAll('.card');
            readStatus(myLibrary[card.getAttribute('data-obj')]);
            console.log(parent[card.getAttribute('data-obj')]);
            console.log('current data num: ' + card.getAttribute('data-obj'));
            card.childNodes[3].textContent = `${myLibrary[card.getAttribute('data-obj')].read}`;
            //returns the card that matches that one that as clicked
            // function kids(){
            //     for (let i = 0; i < parent.length; i++){
            //         // if(parent[i].getAttribute('data-obj') == card.getAttribute('data-obj')){
            //             return parent[i];
            //         // }
            //     }
            // }
            // obj with the index so if library has an object with an id and the ca
            // console.log(kids());
            // console.log(kids().getAttribute('data-obj'));
            // for (let i = 0; i < myLibrary.length; i++){
            //     console.log(myLibrary.includes(i) == true);
            // }
            // parent.forEach(function(el){
            //         if(Number(el.getAttribute('data-obj')) == Number(card.getAttribute('data-obj'))){
            //             console.log(el.childNodes[3].textContent);
            //             return el;
            //         }
            //     }
            // );
            // console.log('current data obj: ' + parent.item((el) => el.getAttribute('data-obj') == card.getAttribute('data-obj')));
            // let children = parent.item((el) => el.getAttribute('data-obj') == card.getAttribute(`data-obj ${1}`)).childNodes[0].textContent;//.childNodes[0].textContent;
            // //const children = parent[card.getAttribute('data-obj')];
            // console.log('parent is: ' + typeof parent);
            // console.log('children: ' + children);
            // console.log(typeof myLibrary[0].title);
            //const grandChildren = children.childNodes;

            //readStatus();
            // child.item(function(el) {
            //     if(el == 4){
            //         el.textContent = `${myLibrary.forEach(el => {if(myLibrary.indexOf(el) == card.getAttribute('data-obj')){return el}}).read}`}
            //     }
            // );
            // console.log(myLibrary);
            // //console.log(readStatus(myLibrary.find((el) => el.title == grandChildren[0].textContent)));
            // // console.log(myLibrary[card.getAttribute('data-obj')]);
            // // console.log(children);
            // // console.log(children.childNodes);
            // // console.log(grandChildren[0].textContent)
            // // //console.log('data obj: ' + card.getAttribute('data-obj'));
            // // //console.log(card);
            // // console.log('finding obj with specific data att: ' + myLibrary.find((el) => el.title == grandChildren[0].textContent));
            // // console.log(myLibrary);
            // let objectNum = myLibrary.find((el) => el.title == grandChildren[1].textContent);
            // //console.log(grandChildren[1].textContent);
            // // if(card.getAttribute('data-obj') > myLibrary.length){
            // //     libraryLength = Number(card.getAttribute('data-obj'))
            // //     if(myLibrary[libraryLength] == undefined){
            // //         while(myLibrary[libraryLength] == undefined){   
            // //             libraryLength--;
            // //         }
            // //     }
            // // }
            // grandChildren[3].textContent = `${myLibrary.find((el) => el.title == grandChildren[0].textContent).read}`;
        });
        //removeBook(cards, card);
            // console.log(card.dataset.obj);
            // //return ((item) => myLibrary.indexOf(item) == card.getAttribute('data-obj'));
            // // access the element and store it and then delete it and then check if it exists in the array anymore if remove is clicked another time if not then return 
            // for(let i = 0; i <= myLibrary.length; i++){
            //     if(elementStorage.includes(myLibrary.dataset) == true){
            //         console.log('element is already in element storage: ' + elementStorage);
            //         return; 
            //     } else {
            //         elementStorage.push(myLibrary[i]);
            //         console.log('delete element and place in element storage' + elementStorage);
            //         return myLibrary.splice(card.getAttribute('data-obj'), 1), console.log(myLibrary);
            //     }
            //     return;
            // }
            //return delete myLibrary[card.getAttribute('data-obj')];
            //return myLibrary.splice(card.getAttribute('data-obj'), 1), console.log(myLibrary);
        for(let key in myLibrary[i]){
            const cardText = document.createElement('h2');
            cardText.style.color = "black";
            cardText.style.fontSize = '20px';
            cardText.textContent = `${myLibrary[i][key]}`;
            //document.querySelector('.grid > * > :last-child');
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



// function removeBook (cards, card) {
//     const remove = document.createElement('button');
//     remove.textContent = "remove";
//     remove.style.borderRadius = "10px";
//     remove.style.padding = '10px';
//     remove.style.backgroundColor = 'yellow';
//     remove.style.zIndex = 1000;
//     remove.style.cursor = "pointer";
//     index = myLibrary.indexOf(myLibrary[Number(card.getAttribute('data-obj'))]);
//     console.log('index before click: ' + index);
//     remove.addEventListener('click', () => {
//         // let currentDataAttrNum = Number(card.getAttribute('data-obj'));
//         // if(myLibrary.length === 0 || myLibrary.includes(undefined) == true){
//         //     return;
//         // }
//         console.log(cards);
//         cards.forEach( 
//             (el) => {
//                 console.log('data attribute of class ' + el.getAttribute('data-obj'));
//                 console.log('index of item in library ' + myLibrary.indexOf(myLibrary[el.getAttribute('data-obj')]));
//                 if(myLibrary.includes(myLibrary[el.getAttribute('data-obj')]) == true){
//                     if(Number(el.getAttribute('data-obj')) == Number(myLibrary.indexOf(myLibrary[el.getAttribute('data-obj')]))) {
//                         if(myLibrary[el.getAttribute('data-obj')] == undefined || myLibrary.length === 0){
//                             return;
//                         } else {
//                             return myLibrary.splice(myLibrary.indexOf(el), myLibrary.indexOf(el));
//                         };
//                     }
//                     return;
//                 }
//                 return;
//             }
//         ); 
//         console.log(myLibrary);
        // spliceCount++;
        // console.log('index is: ' + index);
        // console.log('card is: ' + append.getAttribute('data-obj'));
        // console.log('spliceCount is: ' + spliceCount);
        // if(spliceCount <= 1 ){
        //     // If you click on a card that was already removed from the my library array index
        //     // will return -1 and so it will run the else if because at that point there
        //     index = 0;
        //     index += myLibrary.indexOf(myLibrary[Number(append.getAttribute('data-obj'))]);
        //     console.log('index is: ' + index);
        //     return myLibrary.splice(index, 1), console.log(myLibrary);
        // } else if(append.getAttribute('data-obj') != index){
        //     if(index == -1){
        //         index = append.getAttribute('data-obj');
        //         return index;
        //     }
        //     console.log(myLibrary);
        //     while(spliceCount >= 1){
        //         spliceCount--;
        //     }
        // }
        // console.log(index);
        // if(spliceCount >= 1){
        //     return;
        // } else {
        //     return myLibrary.splice(append.getAttribute('data-obj'), 1), console.log(myLibrary[append.getAttribute('data-obj')], append.getAttribute('data-obj'));
        // }
        //console.log(myLibrary[append.getAttribute('data-obj')], append.getAttribute('data-obj'));
        // if(append.getAttribute('data-obj')){

        // }
        // elementStorage.push(myLibrary[append.getAttribute('data-obj')]), console.log(append.getAttribute('data-obj')), myLibrary.splice(append.getAttribute('data-obj'), 1), console.log(myLibrary), console.log(append.getAttribute('data-obj')), console.log(elementStorage);
        // if(elementStorage.includes(undefined) == true || elementStorage.includes(myLibrary[append.getAttribute('data-obj')]) == true){
        //     elementStorage.map(el => {
        //         if(el == undefined) {
        //             elementStorage.splice(elementStorage.indexOf(el), 1);
        //         }
        //     });
        // }
//     });
//     card.appendChild(remove);
// }

submit.addEventListener('click', () => {
    check_if_read = (input_read.checked == true) ? user_read: user_not_read;
    addBookToLibrary(input_title.value, input_author.value, input_pages.value, check_if_read);
    displayBook();
    console.log(myLibrary);
});
// submit.addEventListener('click', displayBook);


// const hobbit2 = new Book("The Hobbit part 2", "J.R.R. Tolkien", 205, "read");
// const hobbit3 = new Book("The Hobbit part 3", "J.R.R. Tolkien", 390, "Not read yet");
// addBookToLibrary(input_title, input_author, input_pages);
// displayBook();
// console.log(myLibrary);

// const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
// console.log(hobbit.info());
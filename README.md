# Library

    Library: Is the array containing each Book object.
    Book: The object created from the Book constructor containing the title, author, pages, etc.
    card: is the DOM element representing each Book displayed in the UI.

    Initial Setup and Steps:

        - Create a book constructor to create book objects.
        - Create a form for user to input the book details.
        - When a new book is created store it into an array.
    
    Adding, Removing, and changing reading status on Books in the display:

        - Added books:

            Wrapped up in a div element in the form of cards with:

                1. Book name
                2. Author
                3. Pages
                4. Remove button
        
        - Remove books:
        
            1. Remove button removes books from display.
            2. Also removes books from array.

            Note: 
                Challenging parts:

                - Finding a way to match the data attributes numbers with the index of the books, 
                because the data attribute numbers for each card do not change when you remove 
                them while the book index values do.

                Solution:

                - loop through each card and reset the data attribute numbers so that they match the index of the library array.





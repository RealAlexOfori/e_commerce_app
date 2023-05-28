import React from "react";
import Book from "./Book";

const BookList = ({books, addBookToBasket}) => {

  const bookNodes = books.map(book => {
    return (
      <Book books={books} title={book.title} key={book.id} addBookToBasket={addBookToBasket}>{book.author}</Book>
      
    );
  });

  return(
    <ul id="book-list">
      {bookNodes}
    </ul>
  )

}

export default BookList;
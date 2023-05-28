import React, {useState} from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

const BookContainer = ({addBookToBasket}) => {

  const [books, setBooks] = useState(
    [
      {
        id: 1,
        title: "Intelligent Investor",
        author: "Benjamin Graham",
        price: 5
    
      },
      {
        id: 2,
        title: "Think And Grow Rich",
        author: "Napoleon Hill",
        price: 10
      }
    ]
  )

  const addBook = (submittedBook) => {
    submittedBook.id = Date.now();
    const updatedBooks = [...books, submittedBook];
    setBooks(updatedBooks);
  }

  return (
    <>
      <h1>Book Store</h1>
      <BookList books={books} addBookToBasket={addBookToBasket} />
      <h2>Add a book:</h2>
      <BookForm onBookSubmit={(book) => addBook(book)}/>
      <h2>total price: {books.reduce((total,book) => total += book.price,0)}</h2>
    </>
  );

}

export default BookContainer;
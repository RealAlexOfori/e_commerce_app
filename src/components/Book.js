import React from "react";

const Book = ({title, children, books,addBookToBasket}) => {
  const handleClick = (evt) => {
    const book = books.filter((book) =>{
        return book.title === title
    })

   console.log(book)
    addBookToBasket(book[0])
  }
  return(
    <li>
      <h4>Book:{title}</h4>
      <p>Author:{children}</p>
      <p>Price:{children}</p>
      <button onClick={handleClick} value="add in basket"></button>
      
    </li>
  )

}

export default Book;
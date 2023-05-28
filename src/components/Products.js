import React from "react";

const Products = ({books}) => {

  const listItems = books.map((book, id) => {
    return <li key={id}>{book.title}:{book.author}:{book.price}</li>
  })

  return(
  <div>
    <h4>Products</h4>
    <ul>
      {listItems}
    </ul>
  </div>
  )
  };

export default Products;

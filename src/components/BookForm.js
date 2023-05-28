import React, {useState} from "react";

const BookForm = ({onBookSubmit}) => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  }

  const handleAuthorChange = (evt) => {
    setAuthor(evt.target.value);
  }

  const handlePriceChange = (evt) => {
    setPrice(evt.target.value);
  }

  const handleBookSubmit = (evt) => {
    evt.preventDefault();
    const titleToSubmit = title.trim();
    const authorToSubmit = author.trim();
    const priceToSubmit = price.trim();
    if (!titleToSubmit || !authorToSubmit || !priceToSubmit){
      return
    }

    onBookSubmit({
      title: titleToSubmit,
      author: authorToSubmit
    //   price: priceToSubmit
    });

    setTitle("");
    setAuthor("");
    setPrice("");
  }

  return (
    <form id="book-form" onSubmit={handleBookSubmit}>
      <input 
        id="title-input"
        type="text"
        placeholder="Your title"
        value={title}
        onChange={handleTitleChange}
      />
      <input 
      id="book-input"
        type="text"
        placeholder="Author"
        value={author}
        onChange={handleAuthorChange}
      />
      <input 
        id="title-input"
        type="text"
        placeholder="Price"
        value={price}
        onChange={handlePriceChange}
      />
      <input 
        type="submit"
        value="Add a book"
      />
    </form>
  )

}

export default BookForm;
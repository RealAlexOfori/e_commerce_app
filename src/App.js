import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import BookContainer from "./containers/BookContainer"
import Products from "./components/Products"
import NavBar from './components/NavBar';
import Basket from './components/Basket'

function App() {

  let initialBookList = [
    { title: "Think And Grow Rich", author:"Napoleon Hill" },
    { title: "Intelligent Investor", author:"Benjamin Graham" }
  ]
const [basketList, setBasketList] = useState([]);
const [selectedBook, setSelectedBook] = useState("");
const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");
const [price, setPrice] = useState("");
const addBookToBasket = (book) => {
  setBasketList([...basketList,book])
  console.log(basketList)
} 

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  }

  const handleBasketListChange = (evt) => {
    setBasketList(evt.target.value);
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

    // onBookSubmit({
    //   title: titleToSubmit,
    //   author: authorToSubmit
    // });

    setTitle("");
    setAuthor("");
    setPrice("");
  }


  return (
    
 <>
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<BookContainer addBookToBasket={addBookToBasket}/>} />
      <Route path="/products" element={< Products books={initialBookList} />} /> 
      <Route path="/basket" element={<Basket basketList={basketList}/>} />
    </Routes>  
  </Router>
  

</>


  
  );
}

export default App;

import GlobalStyle from './styles/golbalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { PageTheme } from './styles/Theme/PageTheme';
import Header from './components/Header/HeaderIndex';
import NavBar from './components/NavBar';
import Home from './components/pages/Home/HomeIndex'
import Products from './components/pages/Products/index'
import Cart from './components/pages/Cart';
import ProductCard from './components/pages/ProductCard/ProductCard.index';


function App() {
  const [bookSerachValue, setBookSerachValue] = useState()
  const [allBooks, setAllBooks] = useState([])
  const [cartBook, setCartBook] = useState([])

  const searchBook = (book) => {
    let BookSearchFormat = book

    if (book) BookSearchFormat = book.toLowerCase()

    setBookSerachValue(BookSearchFormat)
  }

  useEffect(() => {
    const getBooks = async () => {
      await fetch('http://localhost:8080/books')
        .then((res) => res.json())
        .then((data) => setAllBooks(data))
        .catch((err) => {
          setAllBooks([])
          console.log('ERRO: ' + err)
        })
    }
    getBooks()
  }, [])


  const checkBookInCart = (newBook) => {
    if (cartBook.length > 0) {
      chekBookEquals(newBook)
    } else {
      console.log('Add')
      addBookInCart(newBook)
    }
  }

  const chekBookEquals = (newBook) => {
    const equalBooks = cartBook.some((book) => book.id === newBook.id)
    equalBooks ? editBook(newBook) : addBookInCart(newBook)
  }

  const editBook = (newBook) => {
    console.log('edit')
    cartBook.map((book) => {
      if (book.id === newBook.id) {
        book.amount = newBook.amount
        book.price = newBook.price
      }
      return cartBook
    })
    console.log(cartBook)
  }

  const addBookInCart = (newBook) => {
    console.log('new')
    setCartBook((prevState) => [...prevState, newBook])
  }


  return (
    <ThemeProvider theme={PageTheme} >
      <GlobalStyle />
      <Router>
        <Header getBook={searchBook} />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home allBooks={allBooks} />} />
          <Route path='/products' element={<Products BookSearch={bookSerachValue} allBooks={allBooks} />} />
          <Route path='/cart' element={<Cart cartBooks={cartBook} />} />
          <Route path='/product/:id' element={<ProductCard checkBookInCart={checkBookInCart} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
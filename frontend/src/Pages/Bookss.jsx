import './style.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllBooks();
  }, [])
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <h1 className='mainHead'>AMBU'S BOOK SHOP</h1>
      <div className='books'>
        {books.map((book) => {
          return (
            <div className='book' key={book.id}>
              {book.cover && <img src={book.cover} alt={""} />}
              <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <b>{book.price} RS</b>
              <button onClick={() => handleDelete(book.id)} className='delete'>Delete book</button>
              <button className='update'>Update book</button>

            </div>
          )
        })}

      </div>
      <button className='addbutton'>
        <Link to={'/add'}>
          ADD NEW BOOK
        </Link>
      </button>
    </div>
  )
}

export default Books

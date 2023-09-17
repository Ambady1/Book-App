import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: null,

  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  console.log(book)
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8800/books', book)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <div><h1>ADD NEW BOOK</h1></div>
      <div className='form'>
        <input type='textbox' placeholder='title' onChange={handleChange} name='title' />
        <input type='textbox' placeholder='description' onChange={handleChange} name='desc' />
        <input type='textbox' placeholder='cover' onChange={handleChange} name='cover' />
        <input type='number' placeholder='price' onChange={handleChange} name='price' />
        <button onClick={handleClick}>ADD NEW BOOK</button>
      </div>
    </div>
  )
}

export default Add

import React, {useContext, useState} from 'react'
import {BookContext} from '../contexts/BookContext'

const NewBookForm = () => {
  const {dispatch}  = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    // add dispatch type add_book with a book object
    dispatch( {type: 'ADD_BOOK', book:{
    title, author }
    })
    setTitle('')
    setAuthor('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="book title" value={title} 
        onChange ={(e) => setTitle(e.target.value)} required/>
        <input type="text" placeholder="Author" value={author} 
        onChange ={(e) => setAuthor(e.target.value)} required/>
        <input type ="submit" value="add book"  />
      </form>
      
    </div>
  )
}

export default NewBookForm

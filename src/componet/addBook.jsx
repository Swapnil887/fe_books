import React, { useState } from 'react';

function Add(){
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const Submit = (event) => {
    event.preventDefault();
    
    fetch('https://books-dlwx.onrender.com/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Title:title, Author:author, Genre:genre, Description:description, Price:price })
    })
      .then(res => res.json())
      .then(data => {
      
        alert("data added");
    
      })
      .catch(error => {
       console.error(error);
      });
  };

  return (
    <div>
      <h2>Add Book</h2>
      <div className='adddiv'>
      <form onSubmit={Submit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} required />
        </div>
        <div>
          <label>Genre:</label>
          <select value={genre} onChange={(event) => setGenre(event.target.value)} required>
            <option value="">Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Science">Science</option>
            <option value="Comic">Comic</option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} required />
        </div>
        <button type="submit">Add Book</button>
      </form>
      </div>
    </div>
  );
};

export default Add;
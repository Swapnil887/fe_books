import React, { useEffect, useState } from 'react';

function MyBook(){
  const [books, setBooks] = useState([]);
  const [Filter, setFilter] = useState('');
  const [Order, setOrder] = useState('asc');

  useEffect(() => {
    fetch(`https://books-dlwx.onrender.com/books/both?genreFilter=${Filter}&sortOrder=${Order}`)
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      })
      .catch(error => {
        console.error( error);
      });
  }, [Filter, Order]);

  const Delete = (id) => {
    fetch(`https://books-dlwx.onrender.com/books/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        alert("data delete")
        fetch(`https://books-dlwx.onrender.com/books`)
      .then(res => res.json())
      .then(data => {
        console.log(data,"sada");
        setBooks(data)
      })
      .catch(error => {
        console.error(error);
      });
      })
      .catch(error => {
        console.error(error);
      });


      
  };

  return (
    <div>
      <h2>My Books</h2>
      <div>
        <label>Filter by Genre:</label>
        <select value={Filter} onChange={(event) => setFilter(event.target.value)}>
          <option value="">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="Comic">Comic</option>
        </select>
      </div>
      <div>
        <label>Sort by Price:</label>
        <select value={Order} onChange={(event) => setOrder(event.target.value)}>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div>
        {books.map(book => (
          <div key={book._id} className='card'>
            <h3>{book.title}</h3>
            <p>Author: {book.Author}</p>
            <p>Genre: {book.Genre}</p>
            <p>Description: {book.Description}</p>
            <p>Price: {book.Price}</p>
            <button onClick={() => Delete(book._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBook;

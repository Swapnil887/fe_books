
import './App.css';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import MyBook from './componet/myBooks';
import Add from './componet/addBook';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Link to="/addbook" className='button'>AddBook</Link>
        <Link to="/mybook" className='button'>mybooks</Link>
        <Routes>
          <Route path="/addbook" element={<Add/>}/>
          <Route path="/mybook" element={<MyBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

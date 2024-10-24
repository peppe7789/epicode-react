import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import BookDetails from './pages/BookDetails';
import Login from './pages/Login';



const App = () => {


  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Login/>} />
        <Route path='/' element={<HomePage />} />
        <Route path='/book-details/:bookId' element={<BookDetails />} />
        
        
        
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

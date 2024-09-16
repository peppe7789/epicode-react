import { useState } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNav } from './components/MyNav/MyNav';
import Welcome from './components/Welcome/Welcome';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import MyFooter from './components/MyFooter/MyFooter';
import SingleBook from './components/AllTheBooks/SingleBook/SingleBook';




const App = () => {


  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
      <SingleBook />

    </>
  )
}

export default App

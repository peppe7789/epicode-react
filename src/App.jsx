import { useState } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNav } from './components/MyNav/MyNav';
import Welcome from './components/Welcome/Welcome';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import MyFooter from './components/MyFooter/MyFooter';




const App = () => {


  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />

    </>
  )
}

export default App

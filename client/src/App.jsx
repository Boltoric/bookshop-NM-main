import { useState } from 'react'
import ShowAll from './components/ShowAll'
import AddBook from './components/AddBook'
import NavBar from './components/NavBar'
import {Route ,Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <div className='m-5'>
      <h1 className='text-amber-500 text-6xl text-center hover:text-green-700 duration-700 ease-in-out'>Welcome to the Book Shop</h1>
      <NavBar />
      {/* <AddBook /> */}
      {/* <ShowAll /> */}
<Routes>
  <Route path='/' element={<ShowAll/>}/>
  <Route path='/addbook' element={<AddBook/>}/>
</Routes>
    </div>
    </>
  )
}

export default App

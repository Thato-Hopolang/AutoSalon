import './App.css'
import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookService from "./Pages/BookService"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"

function App() {

  return (
    <>
    <Navigation/>
    <BrowserRouter>
    <Routes>
      <Route index element={ <Home/> }></Route>
      <Route path='/BookService' element={ <BookService/> }></Route>
      <Route path='/Contact' element={ <Contact/> }></Route>
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App

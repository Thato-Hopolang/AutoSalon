import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
// // import BookService from "./Pages/BookService"
// import Contact from "./Pages/Contact"
import './App.css'
import BookService from './Pages/BookService'

function App() {

  return (
    <>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route index Component={ <Home/> }>
          <div className="content">
            <Route path="/home" element={<Home />} />
            <Route path="/BookService" element={<BookService />} />
            <Route path="/Contact" element={<Contact />} />
          </div>
        </Route>
      </Routes>
    </BrowserRouter>

    <Footer />
    </>
  )
}

export default App

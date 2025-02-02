import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Footer from "./pages/Footer"
import AddProducts from "./components/AddProducts"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddProducts/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

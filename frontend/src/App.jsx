import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Footer from "./pages/Footer"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

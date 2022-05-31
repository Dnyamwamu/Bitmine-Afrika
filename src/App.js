import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Index"
import SigninPage from "./pages/signin"
import About from "./pages/About"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App

import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Index"
import SigninPage from "./pages/signin"
import About from "./pages/About"
import SignUpPage from "./pages/SignUp"
import DisclaimerPage from "./pages/DisclaimerPage"
import TermsOfServicePage from "./pages/TermsOfServicePage"
import ReferralPage from "./pages/ReferralPage"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/referral" element={<ReferralPage />} />
        <Route path="/termsofservice" element={<TermsOfServicePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App

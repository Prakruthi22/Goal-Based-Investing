import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import SigninPage1 from "./pages/discover";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signup" element={<SignupPage/>} exact />
        <Route path="/discover" element={<SigninPage1/>} exact />
        <Route path="/signin" element={<SigninPage/>} exact />
      </Routes>
    </Router>
  );
}


export default App;
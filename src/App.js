import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={[<Home />]} />
          <Route path="/" element={[<Login />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

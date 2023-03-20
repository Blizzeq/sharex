import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from "./Components/Register/Register";
import Reset from "./Components/Reset/Reset";


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
        </Routes>
    </Router>
  );
}

export default App;

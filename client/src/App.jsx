import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";

const App = () =>{
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/coun">counter</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Counter/>}/>
                <Route path="/coun" element={<Navbar/>}/>
            </Routes>
        </>
    )
}

export default App
import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () =>{
    return (
        <>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Counter/>}/>
                <Route path="/coun" element={<Navbar/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
    )
}

export default App
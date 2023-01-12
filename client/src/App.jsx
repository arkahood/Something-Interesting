import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";

const App = () =>{
    return (
        <>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Counter/>}/>
                <Route path="/coun" element={<Navbar/>}/>
                <Route path="/login" element={<SignUp/>}/>
            </Routes>
        </>
    )
}

export default App
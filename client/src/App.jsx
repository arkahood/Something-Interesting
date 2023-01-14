import React from "react";
import { Routes, Route, Link, Outlet, Navigate} from "react-router-dom";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Test from "./components/Test";

const App = () =>{

    const isLoggedIn = useSelector((state)=> state.auth.isLoggedin);
    console.log(isLoggedIn);

    const ProtectedRoute = ({ user, redirectPath = '/signup' }) => {
        console.log(user);
        if (!user) {
          return <Navigate to={redirectPath} replace />;
        }
      
        return <Outlet />;
      };

    return (
        <>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Test/>}/>

                {/* Protect a route */}
                <Route element={<ProtectedRoute user={isLoggedIn} />}>
                    <Route path="/coun" element={<Counter />} />
                </Route>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
    )
}

export default App
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increment } from '../redux-toolkit/slices/counterSlice';

const Counter = ()=> {

  // const isLoggedIn = useSelector((state)=>state.auth.isLoggedin)

    const count = useSelector((state)=> state.count.value);
    const dispatch = useDispatch();
    // const navigate = useNavigate()
    // useEffect(()=>{
    //   if(isLoggedIn){
    //     navigate("/signup");
    //   }
    // },[isLoggedIn])
    const add = ()=>{
        dispatch(increment());
    }
    useEffect(()=>{

    },[count]);

  return (
    <div>
        <button onClick={add}>hiii</button>
        {count}
    </div>
  )
}

export default Counter;
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/counterSlice';

const Counter = ()=> {

    const count = useSelector((state)=> state.count.value);
    const dispatch = useDispatch();

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
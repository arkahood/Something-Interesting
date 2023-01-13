import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedin : false,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        increment : (state)=>{
            state.value += 1;
        },
        decrement : (state)=>{
            state.value -= 1;
        },
        incrementByAmount : (state, action)=>{
            state.value += action.payload;
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
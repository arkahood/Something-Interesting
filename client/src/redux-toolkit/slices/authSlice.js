import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = {
    //if user already logged n earlier than this excute
    token : localStorage.getItem("token")? localStorage.getItem("token").split(" ")[1]:null,
    username : "",
    email : "",
    isLoggedin : localStorage.getItem("token")? true : false,
    error : null
}

export const registerUser = createAsyncThunk(
    "user/register",
    async (user, {rejectWithValue})=>{
        console.log(user);
        const response = await fetch(
            "user/signup",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body :  JSON.stringify(user)
            }
        )
        const data = await response.json();
        if(data.error) return rejectWithValue(data.error);
        console.log(data);
        localStorage.setItem("token",`Bearer ${data.token}`);
        return data.token; 
    }
)

export const loginUser = createAsyncThunk(
    "user/login",
    async(user,{rejectWithValue})=>{
        console.log(user);
        const response = await fetch(
            "/user/signin",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body :  JSON.stringify(user)
            }
        )
        const data = await response.json();
        if(data.error) return rejectWithValue(data.error);
        localStorage.setItem("token",`Bearer ${data.token}`);
        return data.token; 
    }
)

export const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logout : (state)=>{
            state.token = null;
            state.email = "",
            state.username = "",
            state.isLoggedin = false;
            localStorage.removeItem("token");
            return state;
        }
    },
    extraReducers: (builder) => {

        //For signUp
        builder.addCase(registerUser.pending, (state, action)=>{
            return state;
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
          state.token = action.payload;
          state.isLoggedin = true;
          state.error = null;
          return state;
        })
        builder.addCase(registerUser.rejected, (state, action)=>{
            state.error = action.payload;
            return state;
        })

        // For signIn
        builder.addCase(loginUser.pending, (state, action)=>{
            return state;
        })
        builder.addCase(loginUser.fulfilled,(state, action)=>{
            state.token = action.payload;
            state.isLoggedin = true;
            state.error = null;
            return state;
        })
        builder.addCase(loginUser.rejected, (state, action)=>{
            state.error = action.payload;
            return state;
        })
      },
})


export const {logout} = authSlice.actions;
export default authSlice.reducer;
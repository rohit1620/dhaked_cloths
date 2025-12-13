import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData=createAsyncThunk("men",async(value)=>{
    let data=await fetch(`https://dhaked-cloths-1.onrender.com/api/${value}`);
    data=await data.json();
    console.log("datas bhai",data);
    
   return data;
    
})

const initialState={
    item:[],
    status:undefined,
    error:null
}

const menSlice=createSlice({
    name:"menSlice",
    initialState,
    extraReducers:(system)=>{
          system.addCase(fetchData.pending,(state)=>{
            state.status="loading"
          }).addCase(fetchData.fulfilled,(state,action)=>{
            state.status="success";
            state.item=action.payload.data
          }).addCase(fetchData.rejected,(state,action)=>{
            state.status="rejected";
            state.error=action.error.message
          })
    }
})

export default menSlice.reducer;






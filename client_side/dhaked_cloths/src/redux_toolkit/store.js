import { configureStore } from "@reduxjs/toolkit";
import menReducer from './menSlice'

const store=configureStore({
    reducer:{
       men:menReducer
    }
})

export default store
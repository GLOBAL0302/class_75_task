import {createSlice} from '@reduxjs/toolkit';
import {getDecodedMessageThunk, getEncodeMessageThunk} from './messageThunk.ts';
import {RootState} from '../../app/app.ts';

interface IInitialState{
  decode:string,
  password:string,
  encode:string
}

const initialState:IInitialState = {
  decode: "",
  password: "",
  encode:""
}

export const  selectDecodeMessage = (state:RootState)=> state.messages.decode
export const  selectEncodeMessage = (state:RootState)=> state.messages.encode

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers:{

  },

  extraReducers:(builder)=>{
    builder
      .addCase(getDecodedMessageThunk.pending, state => {

      })
      .addCase(getDecodedMessageThunk.fulfilled, (state,{payload}) => {
        state.encode = payload.message
      })
      .addCase(getDecodedMessageThunk.rejected, (state) => {

      })

    builder
      .addCase(getEncodeMessageThunk.pending, state => {

      })
      .addCase(getEncodeMessageThunk.fulfilled, (state, {payload}) => {
        state.decode = payload.message
      })
      .addCase(getEncodeMessageThunk.rejected, state => {

      })

  }
});

export const messageReducer = messageSlice.reducer;

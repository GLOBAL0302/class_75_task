import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApi} from '../../axiosApi.ts';
import {IMessage} from '../../types';

export const getDecodedMessageThunk = createAsyncThunk<IMessage,IMessage >(
  "getEncodedMessageThunk",
  async (message)=>{
    console.log(message);
    const response = await axiosApi.post("/messages/decode", message);
    console.log(response.data);
    return response.data;
  }
);

export const getEncodeMessageThunk = createAsyncThunk<IMessage,IMessage >(
  "getDecodeMessageThunk",
  async(message)=>{
    const response = await axiosApi.post("/messages/encode", message);
    console.log(response.data);
    return response.data;
  }
)


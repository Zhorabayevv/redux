import { UserInterface } from './../models/UserInterface';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (error: string | any) {
            return thunkAPI.rejectWithValue(error.message);
        }

    }
)

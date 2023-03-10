import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserInterface } from './../models/UserInterface';
import { fetchUsers } from './ActionCreators';

interface UserState{
    users: UserInterface[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<UserInterface[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default userSlice.reducer;

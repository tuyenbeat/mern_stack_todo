import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
	name: 'auth',
	initialState: {
        value: 1
    },
	reducers: {
		getUser: (state, acction) => {
			state.value += 1;
		},
	},
});

export const { getUser } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;

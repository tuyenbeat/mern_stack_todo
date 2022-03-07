import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {}
	},
	reducers: {
		addUser: (state, acction) => {
			state.user = acction.payload
		},
	},
});

export const { addUser } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;

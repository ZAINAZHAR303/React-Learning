import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userdetail",
    initialState: {
        users:[],
        loading: false,
        error: null,

    },
    reducers: {
        setUser: (state, action) => {
            state.users = action.payload;
        },
    },
});


export default userSlice.reducer;
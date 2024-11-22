import { createSlice } from "@reduxjs/toolkit";
import ApiData from "../../components/ApiData";

const initialState = {
    posts: ApiData, // Initialize with imported ApiData
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        // Action to set all posts
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        // Action to add a new post
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        // Action to remove a post by ID
        removePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        },
        // Action to update an existing post by ID
        updatePost: (state, action) => {
            const { id, updatedData } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                Object.assign(existingPost, updatedData);
            }
        },
    },
});

// Export actions for use in components
export const { setPosts, addPost, removePost, updatePost } = postSlice.actions;

// Export reducer to be added to the Redux store
export default postSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUer = createAsyncThunk(
    "user/registerUser",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                "https://shop999backend.vercel.app/api/auth/create",
                userData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                },
            );
            if (response.status === 201) {
                return response.data
            } else {
                return rejectWithValue(response.data.error || "Registration failed");
            }
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        error: null,
        loading: false,
        success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUer.pending, (state) => {
                state.status = "loading";
            })
            .addCase(registerUer.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.userInfo = action.payload;
            })
            .addCase(registerUer.rejected, (state, action) => {
                state.state = 'failed';
                state.error = action.payload;
            });
    },
});


export default userSlice.reducer;


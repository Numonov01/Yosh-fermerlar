import { createSlice } from "@reduxjs/toolkit";
import { getAPIKey, addNewAPIKey, updateAPIKey, deleteAPIKey } from './thunk';

export const initialState = {
    apiKey: [],
    error: {},
    loading: true
};

const APIKeyslice = createSlice({
    name: 'APIKey',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAPIKey.fulfilled, (state, action) => {
            state.apiKey = action.payload;
            state.loading = true;
        });
        builder.addCase(getAPIKey.rejected, (state, action) => {
            state.error = action?.payload?.error || null;
        });
        builder.addCase(addNewAPIKey.fulfilled, (state, action) => {
            state.apiKey.unshift(action.payload);
        });
        builder.addCase(addNewAPIKey.rejected, (state, action) => {
            state.error = action?.payload?.error || null;
        });

        builder.addCase(updateAPIKey.fulfilled, (state, action) => {
            state.apiKey = (state.apiKey || []).map((event) =>
                event.id.toString() === action?.payload.id.toString()
                    ? { ...event, ...action?.payload }
                    : event
            );
        });

        builder.addCase(updateAPIKey.rejected, (state, action) => {
            state.error = action?.payload?.error || null;
        });

        builder.addCase(deleteAPIKey.fulfilled, (state, action) => {
            state.apiKey = state.apiKey.filter(
                (event) => event.id !== action.payload
                );
        });
        builder.addCase(deleteAPIKey.rejected, (state, action) => {
            state.error = action?.payload?.error || null;
        });
    }
});

export default APIKeyslice.reducer;
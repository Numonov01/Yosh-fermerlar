import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addNewContact, updateContact, deleteContact } from './thunk';

export const initialState = {
    contacts: [],
    error: {},
    loading: true,
};

const contactslice = createSlice({
    name: 'Contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getContacts.fulfilled, (state, action) => {
            state.contacts = action.payload;
            state.loading = true;
        });
        builder.addCase(getContacts.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(addNewContact.fulfilled, (state, action) => {
            state.contacts.unshift(action?.payload);
        });
        builder.addCase(addNewContact.rejected, (state, action) => {
            state.error = action?.payload?.error || null;
        });

        builder.addCase(updateContact.fulfilled, (state, action) => {
            state.contacts = (state.contacts || []).map((event) =>
                event.id === action.payload.id
                ? { ...event, ...action?.payload }
                : event
                );
        });

        builder.addCase(updateContact.rejected, (state, action) => {
            state.error = action?.payload?.error || null;
        });

        builder.addCase(deleteContact.fulfilled, (state, action) => {
            state.contacts = state.contacts.filter(
                (event) => event.id.toString() !== action?.payload.toString()
                );
        });
        builder.addCase(deleteContact.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
    }
});

export default contactslice.reducer;
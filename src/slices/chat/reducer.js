import { createSlice } from "@reduxjs/toolkit";
import {
  getDirectContact, getMessages, addMessage, deleteMessage, getChannels
} from './thunk';

export const initialState = {
  chats: [],
  messages: [],
  error: {},
  channels: [],
  loading: true
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDirectContact.fulfilled, (state, action) => {
      state.chats = action.payload;
      state.loading = true
    });
    builder.addCase(getDirectContact.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });

    builder.addCase(getChannels.fulfilled, (state, action) => {
      state.channels = action.payload;
      state.loading = true
    });
    builder.addCase(getChannels.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });

    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.loading = true
    });
    builder.addCase(getMessages.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });

    builder.addCase(addMessage.fulfilled, (state, action) => {
      state.messages.map((data) => data.usermessages.push(action.payload));
    });
    builder.addCase(addMessage.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });

    builder.addCase(deleteMessage.fulfilled, (state, action) => {
      state.messages = (state.messages || []).map((data) => {
        const updateUserMsg = data.usermessages.filter((userMsg) => userMsg.id !== action.payload);
        return { ...data, usermessages: updateUserMsg }
      })
    });
    
    builder.addCase(deleteMessage.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });

  },
});

export default chatSlice.reducer;
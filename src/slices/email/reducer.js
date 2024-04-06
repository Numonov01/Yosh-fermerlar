import { createSlice } from "@reduxjs/toolkit";
import { getMailDetails, staredMail, labelMail, trashMail, deleteMail, unreadMail } from './thunk';

export const initialState = {
  mailDetails: [],
  error: {},
  isLoader : false
};

const MailBoxSlice = createSlice({
  name: 'MailBoxSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMailDetails.fulfilled, (state, action) => {
      state.mailDetails = action.payload;
      state.isLoader = false;
    });
    builder.addCase(getMailDetails.rejected, (state, action) => {
      state.error = action.payload.error || null;
      state.isLoader = true;
    });
    builder.addCase(deleteMail.fulfilled, (state, action) => {
      state.mailDetails = state.mailDetails.filter(
        (mail) => mail.forId !== action.payload
        );
      state.isMailDetailsDeleted = false;
    });
    builder.addCase(deleteMail.rejected, (state, action) => {
      state.error = action.payload.error || null;
      state.isMailDetailsDeleted = false;
    });
    builder.addCase(unreadMail.fulfilled, (state, action) => {
      state.mailDetails = state.mailDetails.map((mail) => {
        if (mail.forId === action.payload) {
          const updatedMail = mail.unread === true ? false : true;
          return { ...mail, unread: updatedMail };
        }
        return mail;
      });
      state.isMailDetailsDeleted = false;
    });

    builder.addCase(unreadMail.rejected, (state, action) => {
      state.error = action.payload.error || null;
      state.isMailDetailsDeleted = false;
    });
    builder.addCase(trashMail.fulfilled, (state, action) => {

      state.mailDetails = state.mailDetails.map((mail) => {
        if (mail.forId === action.payload) {
          return { ...mail, category: "trash" };
        }
        return mail;
      });

      state.isMailDetailsDeleted = false;
    });

    builder.addCase(trashMail.rejected, (state, action) => {
      state.error = action.payload.error || null;
      state.isMailDetailsDeleted = false;
    });

    builder.addCase(staredMail.fulfilled, (state, action) => {

      state.mailDetails = state.mailDetails.map((mail) => {
        if (mail.forId === action.payload) {
          const newCategory = mail.category === "starred" ? "inbox" : "starred";
          return { ...mail, category: newCategory };
        }
        return mail;
      });

      state.isMailDetailsDeleted = false;
    });

    builder.addCase(staredMail.rejected, (state, action) => {
      state.error = action.payload.error || null;
      state.isMailDetailsDeleted = false;
    });

    builder.addCase(labelMail.fulfilled, (state, action) => {
      state.mailDetails = state.mailDetails.map((mail) => {
        if (mail.forId === action.payload.response) {
          return { ...mail, label: action.payload.label };
        }
        return mail;
      });

      state.isMailDetailsDeleted = false;
    });

    builder.addCase(labelMail.rejected, (state, action) => {
      state.error = action.payload.error || null;
      state.isMailDetailsDeleted = false;
    });
  }
});

export default MailBoxSlice.reducer;
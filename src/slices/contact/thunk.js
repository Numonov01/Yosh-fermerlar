import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import {
    getContacts as getContactsApi,
    addNewContact as addNewContactApi,
    updateContact as updateContactApi,
    deleteContact as deleteContactApi
} from "../../helpers/fakebackend_helper";

export const getContacts = createAsyncThunk("contact/getContacts", async () => {
    try {
        const response = getContactsApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addNewContact = createAsyncThunk("contact/addNewContact", async (contact) => {
    try {
        const response = addNewContactApi(contact);
        const data = await response;
        toast.success("Contact Added Successfully", { autoClose: 3000 });
        return data;
    } catch (error) {
        toast.error("Contact Added Failed", { autoClose: 3000 });
        return error;
    }
});

export const updateContact = createAsyncThunk("contact/updateContact", async (contact) => {
    try {
        const response = updateContactApi(contact);
        const data = await response;
        toast.success("Contact Update Successfully", { autoClose: 3000 });
        return data;
    } catch (error) {
        toast.error("Contact Update Failed", { autoClose: 3000 });
        return error;
    }
});

export const deleteContact = createAsyncThunk("contact/deleteContact", async (contact) => {
    try {
        const response = deleteContactApi(contact);
        toast.success("Contact delete Successfully", { autoClose: 3000 });
        return response;
    } catch (error) {
        toast.error("Contact delete Failed", { autoClose: 3000 });
        return error;
    }
});

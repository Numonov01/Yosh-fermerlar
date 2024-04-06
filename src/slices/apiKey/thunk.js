import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
//Include Both Helper File with needed methods
import {
    getAPIKey as getAPIKeyApi, addNewAPIKey as addNewAPIKeyApi, updateAPIKey as updateAPIKeyApi, deleteAPIKey as deleteAPIKeyApi
} from "../../helpers/fakebackend_helper";

export const getAPIKey = createAsyncThunk("apiKey/getAPIKey", async () => {
    try {
        const response = getAPIKeyApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addNewAPIKey = createAsyncThunk("apiKey/addNewAPIKey", async (apikey) => {
    try {
        const response = addNewAPIKeyApi(apikey);
        const data = await response;
        toast.success("API Key Added Successfully", { autoClose: 3000 });
        return data;
    } catch (error) {
        toast.error("API Key Added Failed", { autoClose: 3000 });
        return error;
    }
});

export const updateAPIKey = createAsyncThunk("apiKey/updateAPIKey", async (apikey) => {
    try {
        const response = updateAPIKeyApi(apikey);
        const data = await response;
        toast.success("API Key Update Successfully", { autoClose: 3000 });
        return data;
    } catch (error) {
        toast.error("API Key Update Failed", { autoClose: 3000 });
        return error;
    }
});

export const deleteAPIKey = createAsyncThunk("apiKey/deleteAPIKey", async (apikey) => {
    try {
        const response = deleteAPIKeyApi(apikey);
        toast.success("API Key delete Successfully", { autoClose: 3000 });
        return response;
    } catch (error) {
        toast.error("API Key delete Failed", { autoClose: 3000 });
        return error;
    }
});
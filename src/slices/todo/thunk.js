import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    getToDoList as getToDoListApi,
    addToDo as addToDoApi,
    updateToDo as updateToDoApi,
    deleteToDo as deleteToDoApi,
    getTodoInsights as getTodoInsightsApi,
    getTodoProjects as getTodoProjectsApi,
    addToDoInsights as addToDoInsightsApi,
    addToDoProjects as addToDoProjectsApi
} from "../../helpers/fakebackend_helper";


export const getToDoList = createAsyncThunk("todo/getToDoList", async () => {
    try {
        const response = getToDoListApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addToDo = createAsyncThunk("todo/addToDo", async (todo) => {
    try {
        const response = addToDoApi(todo);
        const data = await response;
        toast.success("Todo Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Todo Added Failed", { autoClose: 2000 });
        return error;
    }
});

export const updateToDo = createAsyncThunk("todo/updateToDo", async (toDo) => {
    try {
        const response = updateToDoApi(toDo);
        const data = await response;
        toast.success("Todo Updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Todo Updated Failed", { autoClose: 2000 });
        return error;
    }
});

export const deleteToDo = createAsyncThunk("todo/deleteToDo", async (id) => {
    try {
        const response = deleteToDoApi(id);
        toast.success("Todo Deleted Successfully", { autoClose: 2000 });
        return { id, ...response};
    } catch (error) {
        toast.error("Todo Deleted Failed", { autoClose: 2000 });
        return error;
    }
});


// get todo Insights  
export const getTodoInsights = createAsyncThunk("todo/getTodoInsights", async () => {
    try {
        const response = getTodoInsightsApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addToDoInsights = createAsyncThunk("todo/addToDoInsights", async (todo) => {
    try {
        const response = addToDoInsightsApi(todo);
        const data = await response;
        toast.success("Todo Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Todo Added Failed", { autoClose: 2000 });
        return error;
    }
});

// get todo  Projects
export const getTodoProjects = createAsyncThunk("todo/getTodoProjects", async () => {
    try {
        const response = getTodoProjectsApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const addToDoProjects = createAsyncThunk("todo/addToDoProjects", async (todo) => {
    try {
        const response = addToDoProjectsApi(todo);
        const data = await response;
        toast.success("Todo Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Todo Added Failed", { autoClose: 2000 });
        return error;
    }
});

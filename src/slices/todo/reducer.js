import { createSlice } from "@reduxjs/toolkit";

import {
    getToDoList,
    addToDo,
    updateToDo,
    deleteToDo,
    getTodoInsights,
    getTodoProjects,
    addToDoInsights,
    addToDoProjects
} from './thunk';

export const initialState = {
    todoList: [],
    todoInsights: [],
    todoProject: [],
    loading: true,
    error: {}
};

const TodoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getToDoList.fulfilled, (state, action) => {
            state.todoList = action.payload;
            state.loading = true;
        });
        builder.addCase(getToDoList.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addToDo.fulfilled, (state, action) => {
            state.todoList.unshift(action.payload);
        });
        builder.addCase(addToDo.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateToDo.fulfilled, (state, action) => {
            state.todoList = state.todoList.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, ...action.payload }
                    : todo
            )
        });
        builder.addCase(updateToDo.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteToDo.fulfilled, (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload.id);
        });
        builder.addCase(deleteToDo.rejected, (state, action) => {
            state.error = action?.payload?.error || null;
        });

        // Insights
        builder.addCase(getTodoInsights.fulfilled, (state, action) => {
            state.todoInsights = action.payload;
            state.loading = true;
        });
        builder.addCase(getTodoInsights.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addToDoInsights.fulfilled, (state, action) => {
            state.todoInsights.push(action.payload);
        });
        builder.addCase(addToDoInsights.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
        // project
        builder.addCase(getTodoProjects.fulfilled, (state, action) => {
            state.todoProject = action.payload;
            state.loading = true;
        });
        builder.addCase(getTodoProjects.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addToDoProjects.fulfilled, (state, action) => {
            state.todoProject.push(action.payload);
        });
        builder.addCase(addToDoProjects.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
    }
});

export default TodoSlice.reducer;



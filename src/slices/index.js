import { combineReducers } from "@reduxjs/toolkit";

import APIKeyslice from "./apiKey/reducer"

import TodoReducer from "./todo/reducer"

import Contactslice from "./contact/reducer"

import EmailReducer from "./email/reducer"

import chatReducer from "./chat/reducer";

import TasksReducer from "./kanban/reducer" 

import LoginReducer from "./auth/login/reducer";
import AccountReducer from "./auth/register/reducer";
import ProfileReducer from "./auth/profile/reducer";
import ForgetPasswordReducer from "./auth/forgetpwd/reducer";

const rootReducer = combineReducers ({
    APIKey: APIKeyslice,
    Contacts: Contactslice,
    Todo: TodoReducer,
    Email: EmailReducer,
    Login: LoginReducer,
    Account: AccountReducer,
    Profile: ProfileReducer,
    ForgetPassword: ForgetPasswordReducer,
    Chat: chatReducer,
    Tasks: TasksReducer,
});

export default rootReducer
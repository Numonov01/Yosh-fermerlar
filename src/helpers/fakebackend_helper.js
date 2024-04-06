import { APIClient } from "./api_helper";

import * as url from "./url_helper"

const api = new APIClient();
// Gets the logged in user data from local session

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = sessionStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data) => api.create(url.POST_FAKE_REGISTER, data);

// Login Method
export const postFakeLogin = (data) => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
export const postFakeForgetPwd = (data) => api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = (data) => api.create(url.POST_EDIT_JWT_PROFILE, data);

export const postFakeProfile = (data) => api.update(url.POST_EDIT_PROFILE + '/' + data.idx, data);

// Register Method
export const postJwtRegister = (url, data) => {
  return api.create(url, data)
    .catch((err) => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// Login Method
export const postJwtLogin = (data) => api.create(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
export const postJwtForgetPwd = (data) => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = (data) => api.create(url.SOCIAL_LOGIN, data);


// API Key ----------------------
// get Api Key
export const getAPIKey = () => api.get(url.GET_API_KEY, null);

// add API Key
export const addNewAPIKey = (apikey) => api.create(url.ADD_NEW_API_KEY, apikey);

// update API Key
export const updateAPIKey = (apikey) => api.update(url.UPDATE_API_KEY, apikey);

// delete API Key
export const deleteAPIKey = (apikey) => api.delete(url.DELETE_API_KEY, { headers: { apikey } });

// Contact -----------------------
// get Contacts
export const getContacts = () => api.get(url.GET_CONTACTS, null);

// add Contacts
export const addNewContact = (contact) => api.create(url.ADD_NEW_CONTACT, contact);

// update Contacts
export const updateContact = (contact) => api.update(url.UPDATE_CONTACT, contact);

// delete Contacts
export const deleteContact = (contact) => api.delete(url.DELETE_CONTACT, { headers: { contact } });

//todo ---------------------------
// get ToDo
export const getToDoList = () => api.get(url.GET_TODO_LIST, null);

// add ToDo
export const addToDo = (toDo) => api.create(url.ADD_TODO_LIST, toDo);

// update ToDo
export const updateToDo = (toDo) => api.update(url.UPDATE_TODO_LIST, toDo);

// delete ToDo
export const deleteToDo = (id) => api.delete(url.DELETE_TODO, { headers: { id } });

//todo Insights
export const getTodoInsights = () => api.get(url.GET_INSIGHTS, null);
export const addToDoInsights = (data) => api.create(url.ADD_INSIGHTS, data);

// todo project
export const getTodoProjects = () => api.get(url.GET_PROJECT, null);
export const addToDoProjects = (data) => api.create(url.ADD_PROJECT, data);

// Email
//get Mail
export const getMailDetails = () => api.get(url.GET_MAIL_DETAILS, null);

// delete Mail
export const deleteMail = (forId) => api.delete(url.DELETE_MAIL, { headers: { forId } });

// unread Mail
export const unreadMail = (forId) => api.delete(url.UNREAD_MAIL, { headers: { forId } });

// star Mail
export const staredMail = (forId) => api.delete(url.STARED_MAIL, { headers: { forId } });

// label Mail
export const labelMail = (forId) => api.delete(url.LABEL_MAIL, { headers: { forId } });

// trash Mail
export const trashMail = (forId) => api.delete(url.TRASH_MAIL, { headers: { forId } });

// Chat
// get Contact
export const getDirectContact = () => api.get(url.GET_DIRECT_CONTACT);
// get Channels
export const getChannels = () => api.get(url.GET_CHANNELS);
// get Messages
export const getMessages = (roomId) => api.get(`${url.GET_MESSAGES}/${roomId}`, { params: { roomId } });

// add Message
export const addMessage = (message) => api.create(url.ADD_MESSAGE, message);

// add Message
export const deleteMessage = (message) => api.delete(url.DELETE_MESSAGE, { headers: { message } });

// Kanban
export const getTasks = () => api.get(url.GET_TASKS);
export const addNewTasks = (card) => api.create(url.ADD_TASKS, card)
export const updateTasks = (card) => api.put(url.UPDATE_TASKS, card)
export const deleteTasks = (card) => api.delete(url.DELETE_TASKS, { headers: {card} })
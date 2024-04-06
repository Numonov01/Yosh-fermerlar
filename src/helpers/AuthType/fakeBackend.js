import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import * as url from "../url_helper"

import accessToken from "../jwt-token-access/accessToken";
import { apiData, direactContact, contactData, insights, mailbox, messages, project, todoList, channelsList, tasklist } from "../../Common/data";

let users = [
  {
    uid: 1,
    username: "admin",
    role: "admin",
    password: "123456",
    email: "admin@themesbrand.com",
  },
];

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });
  mock.onPost("/post-jwt-register").reply((config) => {
    const user = JSON.parse(config["data"]);
    users.push(user);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost("/post-jwt-login").reply((config) => {
    const user = JSON.parse(config["data"]);
    const validUser = users.filter(
      usr => usr.email === user.email && usr.password === user.password
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...validUser[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  mock.onPost("/post-jwt-profile").reply((config) => {
    const user = JSON.parse(config["data"]);
    const validUser = users.filter(usr => usr.uid === user.idx);

    const one = config.headers;
    let finalToken = one?.Authorization;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verify Jwt token from header.Authorization
        if (finalToken === accessToken) {
          if (validUser["length"] === 1) {
            let objIndex;

            //Find index of specific object using findIndex method.
            objIndex = users.findIndex(obj => obj.uid === user.idx);

            //Update object's name property.
            users[objIndex].username = user.username;

            // Assign a value to locastorage
            sessionStorage.removeItem("authUser");
            sessionStorage.setItem("authUser", JSON.stringify(users[objIndex]));

            resolve([200, "Profile Updated Successfully"]);
          } else {
            reject([400, "Something wrong for edit profile"]);
          }
        } else {
          reject([400, "Invalid Token !!"]);
        }
      });
    });
  });

  mock.onPost(url.POST_EDIT_PROFILE).reply((config) => {

    const user = JSON.parse(config["data"]);

    const validUser = users.filter(usr => usr.uid === user.idx);
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if (validUser["length"] === 1) {
          let objIndex;

          //Find index of specific object using findIndex method.
          objIndex = users.findIndex(obj => obj.uid === user.idx);

          //Update object's name property.
          users[objIndex].username = user.username;

          // Assign a value to locastorage
          sessionStorage.removeItem("authUser");
          sessionStorage.setItem("authUser", JSON.stringify(users[objIndex]));

          resolve([200, user]);
        } else {
          reject([400, "Something wrong for edit profile"]);
        }
      });
    });
  });

  mock.onPost("/jwt-forget-pwd").reply((config) => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, "Check you mail and reset your password."]);
      });
    });
  });

  mock.onPost("/social-login").reply((config) => {
    const user = JSON.parse(config["data"]);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.token) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...user[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  // API Key
  mock.onGet(url.GET_API_KEY).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (apiData) {
          // Passing fake JSON data as response
          resolve([200, apiData]);
        } else {
          reject([400, "Cannot get API Key Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_API_KEY).reply((apikey) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (apikey && apikey.data) {
          // Passing fake JSON data as response
          resolve([200, apikey.data]);
        } else {
          reject([400, "Cannot add API Key"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_API_KEY).reply((apikey) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (apikey && apikey.data) {
          // Passing fake JSON data as response
          resolve([200, apikey.data]);
        } else {
          reject([400, "Cannot update API Key"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_API_KEY).reply((config) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.apikey]);
        } else {
          reject([400, "Cannot delete API Key"]);
        }
      });
    });
  });

  // Contacts
  mock.onGet(url.GET_CONTACTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (contactData) {
          // Passing fake JSON data as response
          resolve([200, contactData]);
        } else {
          reject([400, "Cannot get Contact Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_CONTACT).reply((contact) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (contact && contact.data) {
          // Passing fake JSON data as response
          resolve([200, contact.data]);
        } else {
          reject([400, "Cannot add contact"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_CONTACT).reply((contact) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (contact && contact.data) {
          // Passing fake JSON data as response
          resolve([200, contact.data]);
        } else {
          reject([400, "Cannot update contact"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_CONTACT).reply((config) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.contact]);
        } else {
          reject([400, "Cannot delete contact"]);
        }
      });
    });
  });

  //todo
  mock.onGet(url.GET_TODO_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (todoList) {
          // Passing fake JSON data as response
          resolve([200, todoList]);
        } else {
          reject([400, "Cannot get ToDo List Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_TODO_LIST).reply((event) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add ToDo Data"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_TODO_LIST).reply((event) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update ToDo Data"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_TODO_LIST).reply((event) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update ToDo Data"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_TODO).reply((config) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          resolve([200, config.headers.event]);
        } else {
          reject([400, "Cannot delete event"]);
        }
      })
    })
  })

  // todo Insights 
  mock.onGet(url.GET_INSIGHTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (insights) {
          // Passing fake JSON data as response
          resolve([200, insights]);
        } else {
          reject([400, "Cannot get ToDo Insights Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_INSIGHTS).reply((event) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add ToDo Data"]);
        }
      });
    });
  });

  // todo project 
  mock.onGet(url.GET_PROJECT).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (project) {
          // Passing fake JSON data as response
          resolve([200, project]);
        } else {
          reject([400, "Cannot get ToDo project Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_PROJECT).reply((event) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add ToDo Data"]);
        }
      });
    });
  });

  // MailBox
  mock.onGet(url.GET_MAIL_DETAILS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (mailbox) {
          // Passing fake JSON data as response
          resolve([200, mailbox]);
        } else {
          reject([400, "Cannot get mail details"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_MAIL).reply((config) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.forId]);
        } else {
          reject([400, "Cannot delete order"]);
        }
      });
    });
  });

  mock.onDelete(url.UNREAD_MAIL).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.forId]);
        } else {
          reject([400, "Cannot Stared Mail"]);
        }
      });
    });
  });

  mock.onDelete(url.STARED_MAIL).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.forId]);
        } else {
          reject([400, "Cannot Stared Mail"]);
        }
      });
    });
  });

  mock.onDelete(url.LABEL_MAIL).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.forId]);
        } else {
          reject([400, "Try Sometime Later"]);
        }
      });
    });
  });

  mock.onDelete(url.TRASH_MAIL).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.forId]);
        } else {
          reject([400, "Cannot Trash Mail"]);
        }
      });
    });
  });


  // Chat
  mock.onGet(url.GET_DIRECT_CONTACT).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (direactContact) {
          // Passing fake JSON data as response
          resolve([200, direactContact]);
        } else {
          reject([400, "Cannot get direct contact"]);
        }
      });
    });
  });

  mock.onGet(new RegExp(`${url.GET_MESSAGES}/*`)).reply((config) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (messages) {
          // Passing fake JSON data as response
          const { params } = config;
          const filteredMessages = messages.filter(
            msg => msg.roomId === params.roomId
          );
          resolve([200, filteredMessages]);
        } else {
          reject([400, "Cannot get messages"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_MESSAGE).reply((config) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config.data) {
          // Passing fake JSON data as response
          resolve([200, config.data]);
        } else {
          reject([400, "Cannot add message"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_MESSAGE).reply((config) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.message]);
        } else {
          reject([400, "Cannot delete message"]);
        }
      });
    });
  });

  mock.onGet(url.GET_CHANNELS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (channelsList) {
          // Passing fake JSON data as response
          resolve([200, channelsList]);
        } else {
          reject([400, "Cannot get Channels"]);
        }
      });
    });
  });


  // Kanban Board
  mock.onGet(url.GET_TASKS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (tasklist) {
          // Passing fake JSON data as response
          resolve([200, tasklist]);
        } else {
          reject([400, "Cannot get tasks"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_TASKS).reply(user => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.data) {
          // Passing fake JSON data as response
          resolve([200, user.data]);
        } else {
          reject([400, "Cannot add user"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_TASKS).reply((user) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.data) {
          // Passing fake JSON data as response
          resolve([200, user.data]);
        } else {
          reject([400, "Cannot update user"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_TASKS).reply(config => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.card]);
        } else {
          reject([400, "Cannot delete users"]);
        }
      });
    });
  });

};


export default fakeBackend;

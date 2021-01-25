import { createStore } from "vuex";

import axios from "axios";
import jwt from "jwt-simple";

const api = "https://sende-paylas.herokuapp.com/";

export default createStore({
  state: {
    sidemenu: true,
    user: {
      token: "",
      username: "",
      role: "",
      status: false,
    },
  },
  getters: {
    statusMenu(state) {
      return state.sidemenu;
    },
    getUser(state){
      return state.user;
    },
  },
  mutations: {
    openSidemenu(state) {
      state.sidemenu = false;
    },
    closedSidemenu(state) {
      state.sidemenu = true;
    },
    login(state, payload) {
      const token = jwt.decode(payload, "4684654654894");
      const username = token.split("|_547-|")[0];
      const role = token.split("|_547-|")[2];
      state.user.token = payload;
      state.user.username = username;
      state.user.role = role;
      state.user.status = true;
      state.sidemenu = false;
    },
    closedAccount(state) {
      state.user.token = "";
      state.user.username = "";
      state.user.role = "";
      state.user.status = false;
      state.sidemenu = true;
    }
  },
  actions: {
    login(context, payload) {
      return axios.post(api + "auth/signin", payload).then((result) => {
        context.commit("login", result.data.token);
      });
    },
    register(context, payload) {
      return axios.post(api + "auth/signup", payload);
    },
    getPosts(context){
      const token = context.state.user.token;
      return axios.get(api + "post/list",{
      headers: {
          'Authorization': 'Bearer ' + token
        }});
    },
    getUsers(context){
      const token = context.state.user.token;
      return axios.post(api + "user/list", {},{
      headers: {
          'Authorization': 'Bearer ' + token
        }});
    }
  },
});

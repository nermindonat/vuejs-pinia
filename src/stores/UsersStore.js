import { defineStore } from "pinia";
import axios from "axios";
// import serenadImg from "../assets/images/serenad.jpg";
// import bulbulImg from "../assets/images/bülbül.jpeg";

export const useUsersStore = defineStore("userStore", {
  // the part where the data is kept
  state: () => ({
    users: [],
  }),
  // The section with functions and optional operations
  actions: {
    async fetchUsers() {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = data.data;
        console.log(this.users);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  // automatically updated, returning a property on which a calculation has been made
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
});

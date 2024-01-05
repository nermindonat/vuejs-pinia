import { defineStore } from "pinia";
import axios from "axios";

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

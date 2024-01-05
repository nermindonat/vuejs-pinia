<template>
  <header class="flex flex-wrap flex-col -mx-4 gap-4 p-6 items-center">
    <h2 class="mx-auto text-black font-bold">Users</h2>
    <div>
      <div v-for="user in userStore.users" :key="user.id">
        <UserDetails :users="user" />
      </div>
    </div>
  </header>
</template>


<script setup>
import UserDetails from "./components/UserDetails.vue";
import { onMounted } from "vue";
import { useUsersStore } from "./stores/UsersStore";

const userStore = useUsersStore();
console.log(userStore.users);

onMounted(() => {
  userStore.fetchUsers();
});
</script>
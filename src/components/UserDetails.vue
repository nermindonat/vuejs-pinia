<template>
  <div class="max-w-sm rounded overflow-hidden shadow-2xl mt-10">
    <div class="px-6 py-4">
      <li class="font-bold text-xl mb-2">{{ users.name }}</li>
      <li class="text-gray-700 text-base">{{ users.username }}</li>
      <li class="text-gray-700 text-base">{{ users.email }}</li>
      <li class="text-gray-700 text-base">{{ users.phone }}</li>
      <li class="text-gray-700 text-base">{{ users.website }}</li>
      <li class="text-gray-600 text-base">{{ users.address.city }}</li>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["users"]);
</script>
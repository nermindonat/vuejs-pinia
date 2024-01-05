<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mt-10">
    <div class="px-6 py-4">
      <li class="font-bold text-xl mb-2">{{ users.name }}</li>
      <li class="text-gray-700 text-base">{{ users.username }}</li>
      <li class="text-gray-700 text-base">{{ users.email }}</li>
      <li class="text-gray-700 text-base">{{ users.phone }}</li>
      <li class="text-gray-700 text-base">{{ users.website }}</li>
      <li class="text-gray-600 text-base">{{ users.address.city }}</li>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#photography</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#travel</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#winter</span
      >
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["users"]);
</script>
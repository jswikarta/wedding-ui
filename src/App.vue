<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "./components/sidebar/Sidebar.vue";
import Navbar from "./components/navbar/Navbar.vue";
</script>

<template>
  <div class="container">
    <Sidebar />
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped src="./style.css"></style>
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <aside>
    <div class="logo">
      <h3>NeuvGame</h3>
    </div>

    <div class="menu">
      <div class="menu-title">Menu Home</div>
      <ul>
        <li>
          <RouterLink to="/">
            <i class="icon-dashboard"></i>
            Dashboard
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="menu">
      <div class="menu-title">Master Data</div>
      <ul>
        <li>
          <RouterLink to="/user">
            <i class="icon-users"></i>
            Data Pengguna
          </RouterLink>
        </li>
        <li>
          <RouterLink to="data-wedding">
            <i class="icon-couple"></i>
            Data Pernikahan
          </RouterLink>
        </li>
        <li>
          <RouterLink to="data-invitation">
            <i class="icon-invitation"></i>
            Data Undangan
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

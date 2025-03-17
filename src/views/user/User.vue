<style scoped src="./style.css"></style>
<script setup lang="ts"></script>

<template>
  <div class="main">
    <header>
      <div>
        <button class="btn">Tambah Pengguna</button>
      </div>
    </header>
    <div class="card">
      <div class="card-header"></div>
      <div class="card-body">
        <table>
          <thead>
            <tr>
              <th style="width: 2rem">#</th>
              <th style="width: 21rem">Nama Pengguna</th>
              <th style="width: 15rem">E-mail</th>
              <th style="width: 15rem">Telepon</th>
              <th style="width: 15rem">Status</th>
              <th style="width: 10rem">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Johan Saka Wikarta</td>
              <td>jswikarta@gmail.com</td>
              <td>+62 813 1665 8899</td>
              <td class="td-centers">Active</td>
              <td class="td-center"><button>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

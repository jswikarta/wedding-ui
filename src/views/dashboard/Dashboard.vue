<style scoped src="./style.css"></style>
<script setup lang="ts"></script>

<template>
  <div class="card-group">
    <div class="card-sm bg-blue">
      <div class="card-body">
        <div class="card-icon">123<i class="icon-users"></i></div>
        <div class="text-sm">Pengguna Aktif</div>
      </div>
    </div>

    <div class="card-sm bg-red">
      <div class="card-body">
        <div class="card-icon">3<i class="icon-issue"></i></div>
        <div class="text-sm">Issue Aktif</div>
      </div>
    </div>

    <div class="card-sm bg-cyan">
      <div class="card-body">
        <div class="card-icon">100,500,000<i class="icon-money-in"></i></div>
        <div class="text-sm">Pemasukan tahun ini</div>
      </div>
    </div>

    <div class="card-sm bg-yellow">
      <div class="card-body">
        <div class="card-icon">5,000,000<i class="icon-money-out"></i></div>
        <div class="text-sm">Pengeluaran tahun ini</div>
      </div>
    </div>
  </div>
</template>

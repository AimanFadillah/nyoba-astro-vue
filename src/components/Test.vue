<template>
  <div id="app">
    <p>Angka: {{ angka }}</p>
    <button @click="tambahAngka">Tambah</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      angka: 0,
    };
  },
  methods: {
    tambahAngka() {
      this.angka++;
    },
  },
};
</script>
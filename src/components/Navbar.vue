<template>
  <header class="main-header">
    <img
      :src="require('../assets/white-logo.png')"
      alt="logo"
      width="175"
      class="logo"
    />
    <ul class="header-list">
      <li
        @click="currentFunctionality = 'converter'"
        :class="currentFunctionality === 'converter' ? 'selected' : ''"
      >
        Crypto Converter
      </li>
      <li
        @click="currentFunctionality = 'wallet'"
        :class="currentFunctionality === 'wallet' ? 'selected' : ''"
      >
        Crypto Wallet
      </li>
    </ul>
  </header>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "Navbar",
    emits: ['functionalityChanged'],
    setup() {
        let currentFunctionality = ref("converter");

        return { currentFunctionality };
    },
};
</script>

<style scoped>
.main-header {
  padding: 15px;
  width: 100%;
  background-color: var(--main-dark);
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 15px;
}

ul {
  list-style: none;
  width: 100%;
  text-align: right;
}

.header-list li {
  display: inline;
  cursor: pointer;
  padding: 10px;
  transition: 0.3s;
  color: white;
}

.header-list .selected {
  transition: 0.5s;
  background-color: var(--main-yellow);
  color: white !important;
}
</style>
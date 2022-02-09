<template>
  <header>
    <ul class="header-list">
      <li @click="currentFunctionality = 'converter'" :class="currentFunctionality === 'converter' ? 'selected' : ''">
        Crypto Converter
      </li>
      <li @click="currentFunctionality = 'wallet'" :class="currentFunctionality === 'wallet' ? 'selected' : ''">
        Crypto Wallet
      </li>
    </ul>
  </header>
  <main>
    <h1 v-if="currentFunctionality === 'converter'">Crypto Converter</h1>
    <h1 v-if="currentFunctionality === 'wallet'">Crypto Wallet</h1>
  </main>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "App",
  components: {},
  setup() {
    let currentFunctionality = ref('converter');

    return { currentFunctionality }
  }
};
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  padding: 15px;
  width: 100%;
  background-color: rgb(0, 0, 0);
}

ul {
  list-style: none;
}

.header-list li {
  display: inline;
  cursor: pointer;
  padding: 10px;
  transition: .3s;
}

.header-list li:first-child {
  color: white;
}

.header-list li:not(:first-child) {
  color: yellow;
}

.header-list .selected {
  transition: .5s;
  background-color: rgb(165, 154, 0);
  color: white !important;
}
</style>

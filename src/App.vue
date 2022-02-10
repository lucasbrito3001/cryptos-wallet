<template>
  <header class="main-header">
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
  <main>
    <Converter v-if="currentFunctionality === 'converter'" />
    <h1 v-if="currentFunctionality === 'wallet'">Crypto Wallet</h1>
  </main>
</template>

<script>
import { ref } from "vue";
import Converter from "./pages/CryptoConverter.vue";
export default {
  name: "App",
  components: {
    Converter,
  },
  setup() {
    let currentFunctionality = ref("converter");

    return { currentFunctionality };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap");
:root {
  --main-yellow: rgb(209, 195, 0);
  --main-dark: rgb(8, 8, 8);
}

html,
body {
  padding: 0;
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-header {
  padding: 15px;
  width: 100%;
  background-color: var(--main-dark);
  height: 10vh;
  display: flex;
  align-items: center;
}

ul {
  list-style: none;
}

.header-list li {
  display: inline;
  cursor: pointer;
  padding: 10px;
  transition: 0.3s;
}

.header-list li {
  color: white;
}

.header-list .selected {
  transition: 0.5s;
  background-color: var(--main-yellow);
  color: white !important;
}

.td-img {
  margin-right: 5px;
  /* margin-bottom: 2px; */
  border-radius: 100px;
  /* vertical-align: middle; */
}

.td-div-img-name {
  display: flex;
  align-items: center;
}

.text-muted {
  font-weight: 500;
  color: rgb(134, 134, 134);
}
</style>

<template>
  <header class="main-header">
    <img :src="require('./assets/white-logo.png')" alt="logo" width="175" class="logo">
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
@import "./assets/framework.css";

:root {
  --main-yellow: rgb(209, 195, 0);
  --secondary-yellow: rgb(255, 248, 152);
  --main-dark: rgb(8, 8, 8);
  --secondary-dark: rgb(131, 131, 131);
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

.td-img {
  margin-right: 5px;
  border-radius: 100px;
}

.td-div-img-name {
  display: flex;
  align-items: center;
}

.negative-percent {
  color: rgb(243, 0, 0);
}

.positive-percent {
  color: rgb(0, 238, 0);
}

.negative-percent::before {
  content: url("https://img.icons8.com/material-sharp/13/ff0000/chevron-down.png");
}

.positive-percent::before {
  content: url("https://img.icons8.com/material-sharp/13/00ff00/chevron-up.png");
}

@media screen and (max-width: 992px) {
  .main-header {
    flex-direction: column;
    align-items: start;
  }

  .main-header img {
    margin: 0 auto;
  }

  .main-header ul {
    text-align: left;
    margin-top: 20px;
  }
}
</style>

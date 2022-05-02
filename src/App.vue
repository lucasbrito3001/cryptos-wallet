<template>
  <!-- <header class="main-header">
    <ul class="header-list">
      <li>
        <div class="navbar-img"><img :src="require(`./assets/btc_logo.png`)" alt="logo" width="36" class="logo"></div>
        <p>CryptoService</p>
      </li>
      <li
        @click="currentFunctionality = 'converter'"
        :class="currentFunctionality === 'converter' ? '' : ''"
      >
        <div class="navbar-img"><img src="https://img.icons8.com/windows/28/ffffff/currency-exchange.png"/></div>
        <p>Converter</p>
      </li>
      <li
        @click="currentFunctionality = 'wallet'"
        :class="currentFunctionality === 'wallet' ? '' : ''"
      >
        <div class="navbar-img"><img src="https://img.icons8.com/ios-filled/28/ffffff/wallet--v1.png"/></div>
        <p>Wallet</p>
      </li>
      <li
        @click="currentFunctionality = 'wallet'"
        :class="currentFunctionality === 'wallet' ? '' : ''"
      >
        <div class="navbar-img"><img src="https://img.icons8.com/ios-glyphs/32/ffffff/github.png"/></div>
        <p>Lucas de Brito</p>
      </li>
    </ul>
  </header> -->
  <main class="app-main">
    <Converter v-if="currentFunctionality === 'converter'" />
    <Wallet v-if="currentFunctionality === 'wallet'"/>
  </main>
</template>

<script>
import { ref } from "vue";
import Converter from "./pages/CryptoConverter.vue";
import Wallet from "./pages/CryptoWallet.vue";
export default {
  name: "App",
  components: {
    Converter,
    Wallet
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
  padding: 15px 5px;
  height: 100vh;
  width: 75px;
  background-color: var(--main-dark);
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  align-items: center;
  position: fixed;
  transition: .5s;
  z-index: 100;
}

.main-header:hover {
  width: 200px;
}

.app-main {
  /* width: calc(100% - 75px); */
  width: 100%;
  /* margin-left: 75px; */
}

ul {
  list-style: none;
  width: 100%;
  text-align: right;
}

.header-list {
  text-align: center;
  position: relative;
  height: 100%;
  overflow-x: hidden;
}

.header-list li {
  cursor: pointer;
  transition: 0.3s;
  color: white;
  width: 190px;
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.header-list li:first-child {
  margin-bottom: 20px;
}

.header-list li .navbar-img {
  width: 65px;
}

.header-list li:last-child {
  bottom: 0;
  position: absolute;
}

.header-list li img {
  vertical-align: middle;
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

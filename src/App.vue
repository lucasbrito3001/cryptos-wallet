<template>
  <!-- <header class="main-header">
    <ul class="header-list">
      <li>
        <div class="li-content">
          <div class="navbar-img"><img :src="require(`./assets/btc_logo.png`)" alt="logo" width="36" class="logo"></div>
          <p>CryptoService</p>
        </div>
      </li>
      <li
        @click="currentFunctionality = 'converter'"
        :class="currentFunctionality === 'converter' ? '' : ''"
      >
        <div class="li-content">
          <div class="navbar-img"><img src="https://img.icons8.com/windows/28/ffffff/currency-exchange.png"/></div>
          <span>Converter</span>
        </div>
      </li>
      <li
        @click="currentFunctionality = 'wallet'"
        :class="currentFunctionality === 'wallet' ? '' : ''"
      >
        <div class="li-content">
          <div class="navbar-img"><img src="https://img.icons8.com/ios-filled/28/ffffff/wallet--v1.png"/></div>
          <span>Wallet</span>
        </div>
      </li>
      <li>
        <div class="li-content">
          <div class="navbar-img"><img src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/28/ffffff/external-preferences-maps-and-navigations-smashingstocks-glyph-smashing-stocks.png"/></div>
          <span>Configs</span>
        </div>
      </li>
      <li>
        <a href="https://lucasdbrito.com" target="_blank">
          <div class="li-content">
            <div class="navbar-img"><img src="https://img.icons8.com/ios-glyphs/28/ffffff/link--v1.png"/></div>
            <span>Lucas de Brito</span>
          </div>
        </a>
      </li>
    </ul>
  </header> -->
  <main class="app-main">
    <Converter v-if="currentFunctionality === 'converter'" />
    <Wallet v-if="currentFunctionality === 'wallet'"/>
  </main>
  <footer class="footer">
    teste footer
  </footer>
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
  --light-dark: rgb(19, 19, 19);
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
  width: 210px;
  padding-right: 23.5px;
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
  padding: 10px 0;
}

.header-list li .li-content {
  display: flex;
  align-items: center;
  justify-content: start;
}

.header-list li a {
  width: 100%;
  text-decoration: none;
  color: white;
}

.header-list li:first-child {
  margin-bottom: 20px;
}

.header-list li:last-child {
  bottom: 0;
  position: absolute;
}

.header-list .li-content .navbar-img {
  width: 65px;
}

.header-list .li-content img {
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

.footer {
  height: 300px;
  background-color: var(--light-dark);
  margin-top: 15px;
  clear: both;
}

@media screen and (max-width: 992px) {
  .main-header {
    padding: 10px;
    height: 75px;
    width: 100%;
    background-color: var(--main-dark);
    display: flex;
    flex-direction: row;
    bottom: 0;
    top: auto;
    left: 0;
    align-items: center;
    justify-content: center;
    position: fixed;
    transition: .5s;
    z-index: 100;
  }

  .main-header:hover {
    width: 100%;
  }

  .main-header img {
    margin: 0 auto;
  }

  .header-list {
    margin-top: 0px;
    text-align: center;
    position: relative;
    height: 100%;
    overflow-x: hidden;
    display: flex;
  }

  .header-list li {
    position: relative;
    cursor: pointer;
    transition: 0.3s;
    color: white;
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
  }

  .header-list li .li-content {
    justify-content: center;
  }

  .header-list .li-content span {
    display: none;
  }

  .header-list li:first-child {
    margin-bottom: 0px;
    display: none;
  }

  .header-list li:last-child {
    bottom: none;
    position: relative;
  }

  .header-list li .navbar-img {
    width: 65px;
  }


  .app-main, .footer {
    width: 100%;
    margin-left: 0px;
  }

  .footer {
    margin: 15px 0px 74px 0px;
  }
}
</style>

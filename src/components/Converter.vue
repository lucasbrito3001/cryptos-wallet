<template>
    <div class="container">
        <label for="select-crypto-1">From:</label>
        <div>
            <div class="container-inputs">
                <div class="converter-select" @click="showSelectCrypto1 = !showSelectCrypto1">
                    {{ selectedCrypto1 }}
                </div>
                <input
                    v-model="crypto1Value"
                    type="search"
                    class="converter-input"
                    @input="convertCryptos('crypto1')"
                >
            </div>
            <div class="select-cryptos" v-if="showSelectCrypto1">
                <input type="text">
                <hr>
                <ul>
                    <li class="select-list-item" v-for="(crypto, idx) in cryptos" :key="idx">
                        <img class="td-img" :src="`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`" width="24">
                        {{ crypto.symbol }}
                    </li>
                </ul>
            </div>
        </div>

        <label for="select-crypto-2">To:</label>
        <div>
            <div class="container-inputs">
                <select v-model="selectedCrypto2" class="converter-select" id="select-crypto-1">
                    <option v-for="(crypto, idx) in cryptos" :key="idx" :value="crypto.id">
                        <img class="td-img" :src="`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`" width="24">
                        {{ crypto.symbol }}
                    </option>
                </select>
                <input
                    v-model="crypto2Value"
                    type="search"
                    class="converter-input"
                    @input="convertCryptos('crypto1')"
                >
            </div>
            <div class="select-cryptos" v-if="showSelectCrypto2">
                <input type="text">
                <ul>
                    <li class="select-list-item" v-for="(crypto, idx) in cryptos" :key="idx">
                        {{ crypto.symbol }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
    props: {
        initSelected1: {
            type: Number,
            default: 1
        },
        initSelected2: {
            type: Number,
            default: 1
        },
        cryptos: {
            type: Array,
            default: () => ([])
        }
    },
    setup(props) {
        let selectedCrypto1 = ref(props.initSelected1)
        let selectedCrypto2 = ref(props.initSelected2)

        let crypto1Value = ref(null)
        let crypto2Value = ref(null)

        let showSelectCrypto1 = ref(false)

        function convertCryptos (crypto) {
            const price1 = props.cryptos.find(crypto => crypto.id === selectedCrypto1.value).quote["USD"].price;
            const price2 = props.cryptos.find(crypto => crypto.id === selectedCrypto2.value).quote["USD"].price;

            const ratio = price1 / price2;

            if(crypto === 'crypto1') {
                crypto2Value.value = (crypto1Value.value * ratio).toLocaleString('pt-BR', { currency: 'BRL' });
            } else {
                crypto1Value.value = (crypto2Value.value / ratio).toLocaleString('pt-BR', { currency: 'BRL' });
            }
        }

        return { selectedCrypto1, selectedCrypto2, crypto1Value, crypto2Value, convertCryptos, showSelectCrypto1 }
    }
}
</script>

<style scoped>
.container {
    max-width: 700px;
    width: 60%;
    background-color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: 300;
}

.container div {
    position: relative;
}

.container > div:first-child {
    margin-bottom: 20px;
}

.container-inputs {
    display: flex;
    margin: 0px;
}

.converter-input, .converter-select {
    font-size: 16px;
    font-weight: 100;
    border: none;
    padding: 15px 5px;
    background: rgb(241, 241, 240);
}

.converter-input {
    width: 80%;
    padding: 5px 30px;
    border-radius: 0px 8px 8px 0px;
    text-align: left;
}

input:focus, select:focus {
    outline: none;
}

.converter-select {
    border-radius: 8px 0px 0px 8px;
    border-right: 1px solid rgb(202, 202, 202);
    width: 20%;
    text-align: center;
}

.select-cryptos {
    box-sizing: border-box;
    width: 100%;
    position: absolute !important;
    z-index: 100;
    background-color: white;
    padding: 10px;
    box-shadow: -1px 0px 15px 3px rgba(0,0,0,0.23);
}

.select-cryptos ul {
    height: 300px;
    overflow-y: scroll;
    text-align: left;
}

.select-cryptos li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
}

.select-cryptos input {
    box-sizing: border-box;
    width: 100%;
    padding: 5px 30px;
    text-align: left;
    font-size: 16px;
    font-weight: 100;
    border: 1px solid rgb(236, 236, 236);
    position: sticky;
    margin-bottom: 20px;
}

@media screen and (max-width: 992px) {
    .container {
      width: 70%;
    }
}

@media screen and (max-width: 768px) {
    .container {
      width: 100%;  
    }

    .converter-select {
        width: 25%;
    }

    .converter-input {
        width: 75%;
    }
}
</style>
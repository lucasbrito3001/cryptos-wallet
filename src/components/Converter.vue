<template>
    <div class="container">
        <label for="select-crypto-1">From:</label>
        <div>
            <select v-model="selectedCrypto1" class="converter-select" id="select-crypto-1">
                <option v-for="(crypto, idx) in cryptos" :key="idx" :value="crypto.id">{{ crypto.symbol }}</option>
            </select>
            <input type="text" class="converter-input" placeholder="Example: 100">
        </div>

        <label for="select-crypto-2">To:</label>
        <div>
            <select v-model="selectedCrypto2" class="converter-select" id="select-crypto-2">
                <option v-for="(crypto, idx) in cryptos" :key="idx" :value="crypto.id">{{ crypto.symbol }}</option>
            </select>
            <input type="text" class="converter-input">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
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

        return { selectedCrypto1, selectedCrypto2 }
    }
}
</script>

<style scoped>
.container {
    max-width: 900px;
    width: 60%;
    background-color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.container div {
    display: flex;
}

.converter-input, .converter-select {
    font-size: 20px;
    font-weight: 100;
    border: none;
    height: 60px;
    background: rgb(241, 241, 240);
    margin: 10px 0;
    text-align: center;
}

.converter-input {
    width: 80%;
    padding: 5px 30px;
    border-radius: 0px 8px 8px 0px;
}

.converter-input:focus, .converter-select:focus {
    outline: none;
}

.converter-select {
    border-radius: 8px 0px 0px 8px;
    border-right: 1px solid rgb(202, 202, 202);
    width: 20%;
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

    .converter-input, .converter-select {
        font-size: 18px;
        height: 50px;
    }

    .converter-select {
        width: 25%;
    }

    .converter-input {
        width: 75%;
    }
}
</style>
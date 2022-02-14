<template>
    <div class="container">
        <main v-if="cryptos.length > 0">
            <label for="select-crypto-1">From</label>
            <div class="group-first-crypto">
                <div class="container-inputs">
                    <div
                        class="converter-select"
                        @click="showSelectCrypto1 = !showSelectCrypto1, showSelectCrypto2 = false"
                    >
                        <img
                            class="td-img"
                            :src="`https://s2.coinmarketcap.com/static/img/coins/64x64/${selectedCrypto1}.png`"
                            width="24"
                        />
                        <b>{{ selectedCrypto1Symbol }}</b>
                    </div>
                    <img width="23" height="13" :src="`https://img.icons8.com/material-sharp/13/aaaaaa/${showSelectCrypto1 ? 'chevron-up' : 'chevron-down'}.png`" style="padding-right: 10px">
                    <div class="div-border"></div>
                    <input
                        v-model="crypto1Value"
                        type="number"
                        class="converter-input"
                        @input="convertCryptos('crypto1')"
                        placeholder="Insert the value that you want to convert"
                    />
                </div>
                <SearchSelect
                    v-if="showSelectCrypto1"
                    :cryptos="cryptos"
                    @selectedCrypto="changeSelectedCrypto($event, 1)"
                    @clickedOutOfTheComponent="hideSearchSelect"
                />
            </div>
            <label for="select-crypto-2">To</label>
            <div class="group-second-crypto">
                <div class="container-inputs">
                    <div
                        class="converter-select"
                        @click="showSelectCrypto2 = !showSelectCrypto2, showSelectCrypto1 = false"
                    >
                        <img
                            class="td-img"
                            :src="`https://s2.coinmarketcap.com/static/img/coins/64x64/${selectedCrypto2}.png`"
                            width="24"
                        />
                        <b>{{ selectedCrypto2Symbol }}</b>
                    </div>
                    <img width="23" height="13" :src="`https://img.icons8.com/material-sharp/13/aaaaaa/${showSelectCrypto2 ? 'chevron-up' : 'chevron-down'}.png`" style="padding-right: 10px">
                    <div class="div-border"></div>
                    <input
                        v-model="crypto2Value"
                        type="number"
                        class="converter-input"
                        @input="convertCryptos('crypto2')"
                        placeholder="Insert the value that you want to convert"
                    />
                </div>
                <SearchSelect
                    v-if="showSelectCrypto2"
                    :cryptos="cryptos"
                    @selectedCrypto="changeSelectedCrypto($event, 2)"
                    @clickedOutOfTheComponent="hideSearchSelect"
                />
            </div>
            <small v-if="crypto1Price && crypto2Price" class="t-end text-muted mt-1 small-infos">
                {{ `
                    1 ${selectedCrypto1Symbol}
                    &cong;
                    ${selectedCryptosRatio(crypto1Price, crypto2Price)} ${selectedCrypto2Symbol}
                `}} <br>
                {{ `
                    1 ${selectedCrypto2Symbol}
                    &cong;
                    ${selectedCryptosRatio(crypto2Price, crypto1Price)} ${selectedCrypto1Symbol}
                `}}
            </small>
        </main>
    </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import SearchSelect from './SearchSelect.vue'
export default {
    props: {
        initSelected1: {
            type: Number,
            default: 1,
        },
        initSelected2: {
            type: Number,
            default: 825,
        },
        cryptos: {
            type: Array,
        },
    },
    components: {
        SearchSelect
    },
    setup(props) {
        // States
        let selectedCrypto1 = ref(props.initSelected1);
        let selectedCrypto2 = ref(props.initSelected2);

        let crypto1Value = ref(null);
        let crypto2Value = ref(null);

        let crypto1Price = ref(null);
        let crypto2Price = ref(null);

        let showSelectCrypto1 = ref(false);
        let showSelectCrypto2 = ref(false);

        // Mounted
        onMounted(() => {
            convertCryptos('crypto1')
            findCryptosPrice()
        })

        // Computed properties
        let selectedCrypto1Symbol = computed(() => {
            return props.cryptos.find(crypto => crypto.id === selectedCrypto1.value).symbol;
        });

        let selectedCrypto2Symbol = computed(() => {
            return props.cryptos.find(crypto => crypto.id === selectedCrypto2.value).symbol;
        });

        // Functions
        function selectedCryptosRatio (dividend, divisor) {
            return (dividend / divisor).toFixed(8)
        };

        function changeSelectedCrypto (crypto, order) {
            console.log(crypto)
            order === 1 ? selectedCrypto1.value = crypto.id : selectedCrypto2.value = crypto.id;

            crypto1Value.value = null;
            crypto2Value.value = null;

            showSelectCrypto1.value = false;
            showSelectCrypto2.value = false;

            findCryptosPrice();
        };

        function findCryptosPrice () {
            crypto1Price.value = props.cryptos.find(
                (crypto) => crypto.id === selectedCrypto1.value
            ).quote["USD"].price;
            crypto2Price.value = props.cryptos.find(
                (crypto) => crypto.id === selectedCrypto2.value
            ).quote["USD"].price;
        }

        function convertCryptos(crypto) {
            findCryptosPrice()

            const ratio = crypto1Price.value / crypto2Price.value;
            let convertedValue = null;
            
            if (crypto === "crypto1") {
                convertedValue = ((crypto1Value.value) * ratio).toFixed(8)
                crypto2Value.value = convertedValue > 0 ? convertedValue : null;
            } else {
                convertedValue = ((crypto2Value.value) / ratio).toFixed(8)
                crypto1Value.value = convertedValue > 0 ? convertedValue : null;
            }
        }

        function hideSearchSelect() {
            showSelectCrypto1.value = false;
            showSelectCrypto2.value = false;
        }

        // Return things that I need to use in the client side
        return {
            // States
            selectedCrypto1,
            selectedCrypto2,
            crypto1Value,
            crypto2Value,
            showSelectCrypto1,
            showSelectCrypto2,
            crypto1Price,
            crypto2Price,

            // Computeds
            selectedCrypto1Symbol,
            selectedCrypto2Symbol,

            // Functions
            convertCryptos,
            selectedCryptosRatio,
            changeSelectedCrypto,
            hideSearchSelect
        };
    },
};
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

.group-first-crypto {
    margin-bottom: 20px !important;
}

.container-inputs {
    display: flex;
    align-items: center;
    margin: 0px;
    background-color: rgb(236, 236, 236);
    border-radius: 5px;
    box-shadow: 7px 6px 20px -12px rgba(191,191,191,0.64);
}

.converter-input,
.converter-select {
    font-size: 15.5px;
    font-weight: 100;
    border: none;
    padding: 15px 5px;
    background: rgb(236, 236, 236);
    height: 50px;
}

.converter-input {
    width: 80%;
    padding: 5px 30px;
    border-radius: 0px 8px 8px 0px;
    text-align: left;
    position: relative;
}

input:focus,
select:focus {
    outline: none;
}

.converter-select {
    border-radius: 8px 0px 0px 8px;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.div-border {
    height: 35px;
    width: 1px;
    border-left: 1px solid rgb(214, 214, 214);
    vertical-align: center;
    position: relative;
}

.select-cryptos {
    box-sizing: border-box;
    width: 100%;
    position: absolute !important;
    z-index: 100;
    background-color: white;
    padding: 10px;
    box-shadow: -1px 0px 15px 3px rgba(0, 0, 0, 0.23);
    border-radius: 5px;
}

.select-cryptos ul {
    height: 220px;
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
    padding: 5px 10px;
    text-align: left;
    font-size: 16px;
    font-weight: 100;
    border: 1px solid rgb(236, 236, 236);
    position: sticky;
    margin-bottom: 10px;
}

hr {
    border: 1px solid rgb(223, 223, 223);
}

.converter-input::placeholder {
    font-size: 12px;
    color: #afafaf;
}

.small-infos {
    width: 100%;
    display: block;
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

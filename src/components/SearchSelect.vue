<template>
    <div class="select-cryptos">
        <input type="search" v-model="nameToSearchCrypto" />
        <hr />
        <ul>
            <li
                class="select-list-item"
                v-for="(crypto, idx) in filteredCryptos"
                :key="idx"
                @click="$emit('selectedCrypto', crypto)"
            >
                <img
                    class="td-img"
                    :src="`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`"
                    width="24"
                />
                {{ crypto.symbol }}
            </li>
        </ul>
    </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
export default {
    props: {
        cryptos: {
            type: Array,
            default: () => [],
        },
    },
    emits: ['selectedCrypto', 'clickedOutOfTheComponent'],
    setup(props, ctx) {
        let nameToSearchCrypto = ref("");

        let filteredCryptos = computed(() => {
            return props.cryptos.filter(
                (crypto) =>
                    crypto.symbol
                        .toLowerCase()
                        .includes(nameToSearchCrypto.value.toLowerCase()) ||
                    crypto.name
                        .toLowerCase()
                        .includes(nameToSearchCrypto.value.toLowerCase())
            );
        });

        onMounted(() => {
            document.querySelector("body").addEventListener("click", (e) => {
                if (
                    e.target.closest(".select-cryptos") === null &&
                    e.target.closest(".converter-select") === null
                ) {
                    ctx.emit("clickedOutOfTheComponent");
                }
            });
        });

        return { filteredCryptos, nameToSearchCrypto }
    },
};
</script>

<style scoped>
.select-cryptos {
    box-sizing: border-box;
    width: 100%;
    position: absolute !important;
    z-index: 100;
    background-color: white;
    padding: 10px;
    box-shadow: -1px 0px 15px 3px rgba(0, 0, 0, 0.23);
    border-radius: 5px;
    z-index: 1000;
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
</style>

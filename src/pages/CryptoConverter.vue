<template>
    <main>
        <header>
            <h1 class="title">Cryptocurrencies Converter</h1>
            <h3>
                Based on
                <a href="https://coinmarketcap.com/" target="_blank"
                    >CoinMarketCap</a
                >
                API
            </h3>
        </header>
        <Converter
            :initSelected1="1"
            :initSelected2="825"
            :cryptos="cryptos"
            class="converter-component"
            v-if="cryptos.length > 0"
        />
        <Spinner v-else/>
    </main>
    <aside>
        <h4>Cryptocurrencies informations</h4>
        <section>
            <Table 
                v-if="tableDatas.length > 0"
                :tableHeaders="tableHeaders" 
                :tableDatas="tableDatas"
                :quantityByPage="100"
            />
        </section>
    </aside>
</template>

<script>
import Converter from "../components/Converter.vue";
import Spinner from "../components/Spinner.vue"
import Table from "../components/GeneralTable.vue";
// import MockCryptos from "../services/mockCryptos";
import ConverterApi from "../services/converter";
import { ref, onMounted } from "vue";
export default {
    components: {
        Converter,
        Table,
        Spinner
    },
    setup() {
        // let mockCryptos = false;
        let cryptos = ref([]);
        let tableDatas = ref([]);

        let tableHeaders = ref([
            { headerName: "Name", propertyName: "name" },
            {
                headerName: "Price <small class='text-muted'>USD</small>",
                propertyName: "usd_price",
            },
            {
                headerName: "24h <small class='text-muted'>%</small>",
                propertyName: "usd_percent_24h",
            },
            {
                headerName: "7d <small class='text-muted'>%</small>",
                propertyName: "usd_percent_7d",
            },
            {
                headerName: "30d <small class='text-muted'>%</small>",
                propertyName: "usd_percent_30d",
            },
            { headerName: "MarketCap", propertyName: "market_cap" },
            { headerName: "Volume 24h", propertyName: "volume_24h" },
            { headerName: "Last 7d", propertyName: "coin_graph" },
        ]);

        let percentage_template = (data) => {
            return `
                <span class="${
                    data < 0 ? "negative-percent" : "positive-percent"
                }">
                    ${Number(data.replace("-", "")).toFixed(2)} %
                </span>
            `;
        };

        onMounted(async () => {
            document.title = "CryptoService | Cryptos Converter";
            let { data } = await ConverterApi.getCryptos();
            if (data.status === 200) {
                cryptos.value = data.data;
                tableDatas.value = cryptos.value.map((crypto) => {
                    return {
                        name: `
                            <div class="td-div-img-name">
                                <img class="td-img" src="https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png" width="24">
                                <span>${crypto.name} <span class="text-muted">${crypto.symbol}</span></span>
                            </div>
                        `,
                        usd_price: crypto.quote["USD"].price.toLocaleString(
                            "en-US",
                            { style: "currency", currency: "USD" }
                        ),
                        usd_percent_24h: percentage_template(
                            "" + crypto.quote["USD"].percent_change_24h
                        ),
                        usd_percent_7d: percentage_template(
                            "" + crypto.quote["USD"].percent_change_24h
                        ),
                        usd_percent_30d: percentage_template(
                            "" +
                                crypto.quote["USD"].percent_change_30d.toFixed(
                                    2
                                )
                        ),
                        market_cap: crypto.quote[
                            "USD"
                        ].market_cap.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        }),
                        volume_24h: crypto.quote[
                            "USD"
                        ].volume_24h.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        }),
                        coin_graph: `
                            <img class="td-graph" alt="7d-coin-graph" src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${crypto.id}.svg">
                        `,
                    };
                });
            }
        });

        return { tableHeaders, cryptos, tableDatas };
    },
};
</script>

<style scoped>
header {
    padding: 20px;
    text-align: center;
}

main {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
}

aside {
    padding: 0 20px;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
}

aside section {
    overflow-x: auto;
    width: 100%;
}

.converter-component {
    margin: 0 auto;
}

.title {
    text-align: center;
    color: black;
}

h3 {
    color: var(--main-yellow);
}

h4 {
    margin-bottom: 20px;
}

a {
    color: black;
}

@media screen and (max-width: 768px) {
    main {
        justify-content: start;
        height: inherit;
        padding-bottom: 30px;
    }
}
</style>

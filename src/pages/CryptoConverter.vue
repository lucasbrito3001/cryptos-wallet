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
        />
    </main>
    <aside>
        <h4>Cryptocurrencies informations</h4>
        <section>
            <Table :tableHeaders="tableHeaders" :tableDatas="tableDatas" />
        </section>
    </aside>
</template>

<script>
import Converter from "../components/Converter.vue";
import Table from "../components/GeneralTable.vue";
// import ConverterApi from "../services/converter";
import { ref, onMounted } from "vue";
export default {
    components: {
        Converter,
        Table,
    },
    setup() {
        let cryptos = ref([
            {
                id: 3330,
                name: "Pax Dollar",
                symbol: "USDP",
                slug: "paxos-standard",
                num_market_pairs: 38,
                date_added: "2018-09-27T00:00:00.000Z",
                tags: [
                    "store-of-value",
                    "stablecoin",
                    "asset-backed-stablecoin",
                    "binance-smart-chain",
                ],
                max_supply: null,
                circulating_supply: 945642940.11,
                total_supply: 945642940.11,
                platform: {
                    id: 1027,
                    name: "Ethereum",
                    symbol: "ETH",
                    slug: "ethereum",
                    token_address: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
                },
                cmc_rank: 90,
                self_reported_circulating_supply: null,
                self_reported_market_cap: null,
                last_updated: "2022-02-11T13:58:00.000Z",
                quote: {
                    USD: {
                        price: 1.000909040304992,
                        volume_24h: 13544139.24075025,
                        volume_change_24h: 21.9961,
                        percent_change_1h: 0.27291773,
                        percent_change_24h: 0.13173553,
                        percent_change_7d: 0.37624126,
                        percent_change_30d: 0.11587679,
                        percent_change_60d: 0.05327646,
                        percent_change_90d: 0.11873931,
                        market_cap: 946502567.6566912,
                        market_cap_dominance: 0.0476,
                        fully_diluted_market_cap: 946502567.66,
                        last_updated: "2022-02-11T13:58:00.000Z",
                    },
                },
            },
            {
                id: 1168,
                name: "Decred",
                symbol: "DCR",
                slug: "decred",
                num_market_pairs: 56,
                date_added: "2016-02-10T00:00:00.000Z",
                tags: [
                    "mineable",
                    "hybrid-pow-pos",
                    "blake256",
                    "medium-of-exchange",
                    "store-of-value",
                    "privacy",
                    "dao",
                    "placeholder-ventures-portfolio",
                ],
                max_supply: 21000000,
                circulating_supply: 13756844.73321269,
                total_supply: 13756844.73321269,
                platform: null,
                cmc_rank: 91,
                self_reported_circulating_supply: null,
                self_reported_market_cap: null,
                last_updated: "2022-02-11T13:58:00.000Z",
                quote: {
                    USD: {
                        price: 68.74332317041264,
                        volume_24h: 6035618.22021963,
                        volume_change_24h: 51.1661,
                        percent_change_1h: 0.17720978,
                        percent_change_24h: 2.71950979,
                        percent_change_7d: 7.52143596,
                        percent_change_30d: 13.27672609,
                        percent_change_60d: -1.06339092,
                        percent_change_90d: -37.84226665,
                        market_cap: 945691223.300429,
                        market_cap_dominance: 0.0476,
                        fully_diluted_market_cap: 1443609786.58,
                        last_updated: "2022-02-11T13:58:00.000Z",
                    },
                },
            },
            {
                id: 3801,
                name: "BORA",
                symbol: "BORA",
                slug: "bora",
                num_market_pairs: 4,
                date_added: "2019-03-18T00:00:00.000Z",
                tags: ["marketplace", "gaming", "wallet"],
                max_supply: null,
                circulating_supply: 861250000,
                total_supply: 1205750000,
                platform: {
                    id: 4256,
                    name: "Klaytn",
                    symbol: "KLAY",
                    slug: "klaytn",
                    token_address: "0x02cbe46fb8a1f579254a9b485788f2d86cad51aa",
                },
                cmc_rank: 92,
                self_reported_circulating_supply: 861250000,
                self_reported_market_cap: 932705299.523722,
                last_updated: "2022-02-11T13:58:00.000Z",
                quote: {
                    USD: {
                        price: 1.0829669660652796,
                        volume_24h: 184977559.0838564,
                        volume_change_24h: 3.1071,
                        percent_change_1h: 0.01865048,
                        percent_change_24h: -1.16040822,
                        percent_change_7d: 1.06002902,
                        percent_change_30d: 8.80828161,
                        percent_change_60d: 34.69433126,
                        percent_change_90d: 197.523996,
                        market_cap: 932705299.523722,
                        market_cap_dominance: 0.0469,
                        fully_diluted_market_cap: 1305787419.33,
                        last_updated: "2022-02-11T13:58:00.000Z",
                    },
                },
            },
            {
                id: 5864,
                name: "yearn.finance",
                symbol: "YFI",
                slug: "yearn-finance",
                num_market_pairs: 254,
                date_added: "2020-07-18T00:00:00.000Z",
                tags: [
                    "defi",
                    "yield-farming",
                    "binance-smart-chain",
                    "yield-aggregator",
                    "yearn-partnerships",
                    "three-arrows-capital-portfolio",
                    "polychain-capital-portfolio",
                    "governance",
                    "blockchain-capital-portfolio",
                    "framework-ventures-portfolio",
                    "alameda-research-portfolio",
                    "parafi-capital",
                    "fantom-ecosystem",
                ],
                max_supply: 36666,
                circulating_supply: 36637.72122588,
                total_supply: 36666,
                platform: {
                    id: 1027,
                    name: "Ethereum",
                    symbol: "ETH",
                    slug: "ethereum",
                    token_address: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
                },
                cmc_rank: 93,
                self_reported_circulating_supply: null,
                self_reported_market_cap: null,
                last_updated: "2022-02-11T13:58:00.000Z",
                quote: {
                    USD: {
                        price: 24847.213596032158,
                        volume_24h: 129802620.86895272,
                        volume_change_24h: 15.4441,
                        percent_change_1h: 0.31498606,
                        percent_change_24h: -0.35327247,
                        percent_change_7d: 5.22942813,
                        percent_change_30d: -27.68802969,
                        percent_change_60d: 16.35495651,
                        percent_change_90d: -23.46556526,
                        market_cap: 910345284.9713215,
                        market_cap_dominance: 0.0458,
                        fully_diluted_market_cap: 911047933.71,
                        last_updated: "2022-02-11T13:58:00.000Z",
                    },
                },
            },
            {
                id: 5692,
                name: "Compound",
                symbol: "COMP",
                slug: "compound",
                num_market_pairs: 243,
                date_added: "2020-06-16T00:00:00.000Z",
                tags: [
                    "defi",
                    "dao",
                    "yield-farming",
                    "binance-smart-chain",
                    "polkadot-ecosystem",
                    "coinbase-ventures-portfolio",
                    "three-arrows-capital-portfolio",
                    "polychain-capital-portfolio",
                    "lending-borowing",
                    "dragonfly-capital-portfolio",
                    "alameda-research-portfolio",
                    "a16z-portfolio",
                    "pantera-capital-portfolio",
                    "paradigm-portfolio",
                ],
                max_supply: 10000000,
                circulating_supply: 6558919.08774111,
                total_supply: 10000000,
                platform: {
                    id: 1027,
                    name: "Ethereum",
                    symbol: "ETH",
                    slug: "ethereum",
                    token_address: "0xc00e94cb662c3520282e6f5717214004a7f26888",
                },
                cmc_rank: 94,
                self_reported_circulating_supply: null,
                self_reported_market_cap: null,
                last_updated: "2022-02-11T13:58:00.000Z",
                quote: {
                    USD: {
                        price: 137.31334306794383,
                        volume_24h: 90544515.14164889,
                        volume_change_24h: 10.2847,
                        percent_change_1h: 0.92954426,
                        percent_change_24h: 1.03041569,
                        percent_change_7d: 6.44259488,
                        percent_change_30d: -30.98405742,
                        percent_change_60d: -28.09055101,
                        percent_change_90d: -59.28257809,
                        market_cap: 900627106.8498802,
                        market_cap_dominance: 0.0453,
                        fully_diluted_market_cap: 1373133430.68,
                        last_updated: "2022-02-11T13:58:00.000Z",
                    },
                },
            },
            {
                id: 8104,
                name: "1inch Network",
                symbol: "1INCH",
                slug: "1inch",
                num_market_pairs: 203,
                date_added: "2020-12-25T00:00:00.000Z",
                tags: [
                    "decentralized-exchange",
                    "defi",
                    "amm",
                    "binance-smart-chain",
                    "binance-labs-portfolio",
                    "blockchain-capital-portfolio",
                    "dragonfly-capital-portfolio",
                    "fabric-ventures-portfolio",
                    "alameda-research-portfolio",
                    "parafi-capital",
                    "spartan-group",
                ],
                max_supply: null,
                circulating_supply: 468182350.868383,
                total_supply: 1500000000,
                platform: {
                    id: 1027,
                    name: "Ethereum",
                    symbol: "ETH",
                    slug: "ethereum",
                    token_address: "0x111111111117dc0aa78b770fa6a738034120c302",
                },
                cmc_rank: 95,
                self_reported_circulating_supply: 468182350.868383,
                self_reported_market_cap: 857436445.8339381,
                last_updated: "2022-02-11T13:58:00.000Z",
                quote: {
                    USD: {
                        price: 1.8314155675530441,
                        volume_24h: 91699308.60543308,
                        volume_change_24h: -10.1729,
                        percent_change_1h: 0.44340351,
                        percent_change_24h: 0.35591899,
                        percent_change_7d: 10.48507121,
                        percent_change_30d: -17.93255166,
                        percent_change_60d: -27.47301411,
                        percent_change_90d: -56.24194971,
                        market_cap: 857436445.8339381,
                        market_cap_dominance: 0.0432,
                        fully_diluted_market_cap: 2747123351.33,
                        last_updated: "2022-02-11T13:58:00.000Z",
                    },
                },
            },
            {
                id: 2700,
                name: "Celsius",
                symbol: "CEL",
                slug: "celsius",
                num_market_pairs: 56,
                date_added: "2018-05-18T00:00:00.000Z",
                tags: ["lending-borowing", "exnetwork-capital-portfolio"],
                max_supply: 695658160,
                circulating_supply: 238863519.826,
                total_supply: 695658160,
                platform: {
                    id: 1027,
                    name: "Ethereum",
                    symbol: "ETH",
                    slug: "ethereum",
                    token_address: "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
                },
                cmc_rank: 96,
                self_reported_circulating_supply: 510732063,
                self_reported_market_cap: 1733548830.8778474,
                last_updated: "2022-02-11T13:58:00.000Z",
                quote: {
                    USD: {
                        price: 3.394243198077516,
                        volume_24h: 5357128.40096261,
                        volume_change_24h: 28.7786,
                        percent_change_1h: 0.37427061,
                        percent_change_24h: 3.25568374,
                        percent_change_7d: 33.24262021,
                        percent_change_30d: 5.6586254,
                        percent_change_60d: -11.09351824,
                        percent_change_90d: -27.18314802,
                        market_cap: 810760877.4382545,
                        market_cap_dominance: 0.0408,
                        fully_diluted_market_cap: 2361232977.77,
                        last_updated: "2022-02-11T13:58:00.000Z",
                    },
                },
            },
            {
                id: 2577,
                name: "Ravencoin",
                symbol: "RVN",
                slug: "ravencoin",
                num_market_pairs: 93,
                date_added: "2018-03-10T00:00:00.000Z",
                tags: ["mineable", "pow", "platform", "crowdfunding"],
                max_supply: 21000000000,
                circulating_supply: 10473290000,
                total_supply: 10473290000,
                platform: null,
                cmc_rank: 97,
                self_reported_circulating_supply: null,
                self_reported_market_cap: null,
                last_updated: "2022-02-11T13:58:00.000Z",
                quote: {
                    USD: {
                        price: 0.07405881244543766,
                        volume_24h: 51278612.61493757,
                        volume_change_24h: 26.3169,
                        percent_change_1h: 0.12981053,
                        percent_change_24h: 2.36041532,
                        percent_change_7d: 10.1283435,
                        percent_change_30d: -29.61071829,
                        percent_change_60d: -12.9003475,
                        percent_change_90d: -40.37101434,
                        market_cap: 775639419.7966778,
                        market_cap_dominance: 0.039,
                        fully_diluted_market_cap: 1555235061.35,
                        last_updated: "2022-02-11T13:58:00.000Z",
                    },
                },
            },
            {
                id: 2634,
                name: "XDC Network",
                symbol: "XDC",
                slug: "xinfin",
                num_market_pairs: 50,
                date_added: "2018-04-12T00:00:00.000Z",
                tags: [],
                max_supply: null,
                circulating_supply: 12305012698.75,
                total_supply: 37705012698.75,
                platform: null,
                cmc_rank: 98,
                self_reported_circulating_supply: null,
                self_reported_market_cap: null,
                last_updated: "2022-02-11T13:58:00.000Z",
                quote: {
                    USD: {
                        price: 0.06265643479839118,
                        volume_24h: 10140235.48528712,
                        volume_change_24h: 14.5849,
                        percent_change_1h: -0.29411171,
                        percent_change_24h: -1.53788032,
                        percent_change_7d: 7.38912917,
                        percent_change_30d: -31.43138808,
                        percent_change_60d: -12.89954065,
                        percent_change_90d: -34.38802411,
                        market_cap: 770988225.8526049,
                        market_cap_dominance: 0.0388,
                        fully_diluted_market_cap: 2362461669.73,
                        last_updated: "2022-02-11T13:58:00.000Z",
                    },
                },
            },
            {
                id: 7455,
                name: "Audius",
                symbol: "AUDIO",
                slug: "audius",
                num_market_pairs: 75,
                date_added: "2020-10-20T00:00:00.000Z",
                tags: [
                    "music",
                    "coinbase-ventures-portfolio",
                    "binance-labs-portfolio",
                    "solana-ecosystem",
                    "pantera-capital-portfolio",
                    "multicoin-capital-portfolio",
                    "web3",
                ],
                max_supply: null,
                circulating_supply: 608321992,
                total_supply: 1078933974,
                platform: {
                    id: 1027,
                    name: "Ethereum",
                    symbol: "ETH",
                    slug: "ethereum",
                    token_address: "0x18aaa7115705e8be94bffebde57af9bfc265b998",
                },
                cmc_rank: 99,
                self_reported_circulating_supply: null,
                self_reported_market_cap: null,
                last_updated: "2022-02-11T13:58:00.000Z",
                quote: {
                    USD: {
                        price: 1.230099199423675,
                        volume_24h: 72312766.42533262,
                        volume_change_24h: 246.8958,
                        percent_change_1h: -1.61775452,
                        percent_change_24h: 10.99245064,
                        percent_change_7d: 28.60624452,
                        percent_change_30d: -16.55957261,
                        percent_change_60d: -18.93041034,
                        percent_change_90d: -48.28597568,
                        market_cap: 748296395.3510152,
                        market_cap_dominance: 0.0377,
                        fully_diluted_market_cap: 1327195817.65,
                        last_updated: "2022-02-11T13:58:00.000Z",
                    },
                },
            },
            {
                id: 3640,
                name: "Livepeer",
                symbol: "LPT",
                slug: "livepeer",
                num_market_pairs: 63,
                date_added: "2018-12-19T00:00:00.000Z",
                tags: [
                    "coinfund-portfolio",
                    "dcg-portfolio",
                    "pantera-capital-portfolio",
                    "multicoin-capital-portfolio",
                    "web3",
                ],
                max_supply: 22906951,
                circulating_supply: 21164655.33252989,
                total_supply: 22859012.33252989,
                platform: {
                    id: 1027,
                    name: "Ethereum",
                    symbol: "ETH",
                    slug: "ethereum",
                    token_address: "0x58b6a8a3302369daec383334672404ee733ab239",
                },
                cmc_rank: 100,
                self_reported_circulating_supply: null,
                self_reported_market_cap: null,
                last_updated: "2022-02-11T13:58:00.000Z",
                quote: {
                    USD: {
                        price: 34.71936110366323,
                        volume_24h: 75411140.26422013,
                        volume_change_24h: 53,
                        percent_change_1h: -0.76129154,
                        percent_change_24h: 8.71831196,
                        percent_change_7d: 34.38752615,
                        percent_change_30d: -10.56577739,
                        percent_change_60d: -4.73459631,
                        percent_change_90d: -51.86438504,
                        market_cap: 734823311.124677,
                        market_cap_dominance: 0.0369,
                        fully_diluted_market_cap: 795314703.55,
                        last_updated: "2022-02-11T13:58:00.000Z",
                    },
                },
            },
        ]);
        let tableDatas = ref([]);

        let tableHeaders = ref([
            { headerName: "Name", propertyName: "name" },
            { headerName: "Price", propertyName: "usd_price" },
            { headerName: "24h %", propertyName: "usd_percent_24h" },
            { headerName: "7d %", propertyName: "usd_percent_7d" },
            { headerName: "30d %", propertyName: "usd_percent_30d" },
            { headerName: "MarketCap", propertyName: "market_cap" },
            { headerName: "Volume 24h", propertyName: "volume_24h" },
            { headerName: "Last 7d", propertyName: "coin_graph" },
        ]);

        let percentage_template = (data) => {
            return `
                <span class="${
                    data < 0 ? "negative-percent" : "positive-percent"
                }">
                    ${data.replace("-", "")}
                </span>
            `;
        };

        onMounted(async () => {
            document.title = "CryptoService | Cryptos Converter";
            // let { data } = await ConverterApi.getCryptos()
            // if(data.status === 200) {
            // cryptos.value = data.data;
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
                        crypto.quote["USD"].percent_change_24h.toFixed(2)
                    ),
                    usd_percent_7d: percentage_template(
                        crypto.quote["USD"].percent_change_7d.toFixed(2)
                    ),
                    usd_percent_30d: percentage_template(
                        crypto.quote["USD"].percent_change_30d.toFixed(2)
                    ),
                    market_cap: crypto.quote["USD"].market_cap.toLocaleString(
                        "en-US",
                        {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        }
                    ),
                    volume_24h: crypto.quote["USD"].volume_24h.toLocaleString(
                        "en-US",
                        {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        }
                    ),
                    coin_graph: `
                            <img class="td-graph" alt="7d-coin-graph" src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${crypto.id}.svg">
                        `,
                };
            });
            // }
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

import axios from 'axios';
const API_URL = "https://api.lucasdbrito.com/cryptos-converter"

const ConverterApi = {
    getCryptos: async function () {
        let response = axios.get(API_URL + '/cryptocurrency/listings/latest')
        return response
    }
}

export default ConverterApi;
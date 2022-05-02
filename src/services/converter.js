import axios from 'axios';
const API_URL = "https://cryptos-converter.herokuapp.com"

const ConverterApi = {
    getCryptos: async function () {
        let response = axios.get(API_URL + '/cryptocurrency/listings/latest')
        return response
    }
}

export default ConverterApi;
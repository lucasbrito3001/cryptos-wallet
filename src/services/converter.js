import axios from 'axios';
const API_URL = "http://localhost:3000"

const ConverterApi = {
    getCryptos: async function () {
        let response = axios.get(API_URL + '/cryptocurrency/listings/latest')
        return response
    }
}

export default ConverterApi;
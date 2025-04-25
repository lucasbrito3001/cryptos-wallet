import axios from "axios";
import MockCryptos from "./mockCryptos";
const API_URL = "https://cryptos-converter.lucasdbrito.com/api";

const ConverterApi = {
	getCryptos: async function () {
		let response = axios.get(API_URL + '/cryptocurrency/latest')
		// let response = { data: { status: 200, data: MockCryptos } };
		return response;
	},
};

export default ConverterApi;

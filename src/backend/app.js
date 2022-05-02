const axios = require('axios');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
dotenv.config()

const header = {
    "X-CMC_PRO_API_KEY": process.env.CMKTC_KEY
};

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/cryptocurrency/listings/latest', async (req, res) => {
    try {
        let { data } = await axios.get(process.env.CMKTC_URL + 'cryptocurrency/listings/latest', { headers: header })
        res.status(200).json({
            status: 200,
            data: data.data,
            mensaje: `Returned ${data.data.length} cryptos`
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            data: [],
            mensaje: error
        })
    }
})

app.listen(PORT, () => {
    console.log("Project is running at -> localhost:" + PORT)
})


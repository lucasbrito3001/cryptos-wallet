const header = {
    "X-CMC_PRO_API_KEY": process.env.CMKTC_KEY
};

export async function GET(request) {
    try {
        let { data } = await fetch(process.env.CMKTC_URL + 'cryptocurrency/listings/latest', { method: "GET", headers: header })
        
        return new Response({
            status: 200,
            data: data.data,
            message: `Returned ${data.data.length} cryptos`
        });
    } catch (error) {
        return new Response({
            status: 400,
            data: [],
            message: error
        });
    }
}
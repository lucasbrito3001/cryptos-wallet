const header = {
	"X-CMC_PRO_API_KEY": process.env.CMKTC_KEY,
};

export async function GET(request) {
	try {
		console.log(process.env.CMKTC_URL);
        
		let { data } = await fetch(process.env.CMKTC_URL + "cryptocurrency/listings/latest", {
			method: "GET",
			headers: header,
		});

		return new Response(
			JSON.stringify({
				status: 200,
				data: data.data,
				message: `Returned ${data.data.length} cryptos`,
			})
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				status: 400,
				data: [],
				message: error,
			})
		);
	}
}

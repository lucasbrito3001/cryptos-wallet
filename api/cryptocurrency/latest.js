export async function GET(request) {
	try {
		let { data } = await fetch(process.env.CMKTC_URL + "cryptocurrency/listings/latest", {
			method: "GET",
			headers: {
				"X-CMC_PRO_API_KEY": process.env.CMKTC_KEY,
			},
		});

        console.log(data)

		return new Response(
			JSON.stringify({
				status: 200,
				data: data.data,
				message: `Returned ${data.data.length} cryptos`,
			})
		);
	} catch (error) {
        console.log(error)
		return new Response(
			JSON.stringify({
				status: 400,
				data: [],
				message: error,
			})
		);
	}
}

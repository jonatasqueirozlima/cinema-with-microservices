
(async () => {
	require("dotenv-safe").config();
	const server = require("./server/server");

	try {
		await server.start();
		console.log('API Gateway is up and running at ' + process.env.API_GATEWAY_PORT);
	} catch (error) {
		console.error(error);
	}
})();
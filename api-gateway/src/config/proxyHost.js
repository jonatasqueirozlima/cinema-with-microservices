const microservicesPath = [
	{
		name: 'catalog',
		entry: ['/cities', '/cinemas'],
		uri: process.env.MICROSERVICE_CINEMA_CATALOG_URI
	},
	{
		name: 'movies',
		entry: ['/movies'],
		uri: process.env.MICROSERVICE_MOVIES_URI
	}
]

const selectProxyHost = (req) => {
	const { uri } = microservicesPath.find(({ entry }) => entry.includes(req.path));
	return uri;
};

module.exports = selectProxyHost;

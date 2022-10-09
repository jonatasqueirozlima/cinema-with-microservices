const httpProxy = require('express-http-proxy');

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

const selectProxyHost = (path) => {
	const { uri } = microservicesPath.find(({ entry }) => entry.includes(path));
	return uri;
};

module.exports = (req, res, next) => {
	httpProxy(selectProxyHost(req.path))(req, res, next);
};

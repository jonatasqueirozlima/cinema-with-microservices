require('express-async-errors')
const express = require('express');
const morgan = require('morgan');
const selectProxyHost = require('../config/proxyHost');

let server = null;

async function start() {
	const app = express();
	app.use(morgan('dev'));

	app.use((err, req, res, next) => {
		console.error(err);
		res.sendStatus(500);
	})

	app.use(selectProxyHost);

	server = app.listen(process.env.PORT);
	return server;
}

async function stop() {
	if (server) await server.close();
	return true;
}

module.exports = { start, stop }
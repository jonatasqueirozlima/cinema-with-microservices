require("dotenv-safe").config();
const httpProxy = require('express-http-proxy');
const express = require('express');
const app = express();
const logger = require('morgan');

const selectProxyHost = require('./config/proxyHost');

const PORT = process.env.API_GATEWAY_PORT || 5000;

app.use(logger('dev'));

app.use((req, res, next) => {
	httpProxy(selectProxyHost(req))(req, res, next);
});

app.listen(PORT, () => {
	console.log(`API Gateway is up and running at ${PORT}`);
});
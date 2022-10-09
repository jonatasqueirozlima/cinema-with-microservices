require('dotenv-safe').config();
const server = require('./server');

test('Server Start', async () => {
	const instance = await server.start();
	expect(instance).toBeTruthy();
})

test('Server Stop', async () => {
	const isStopped = await server.stop();
	expect(isStopped).toBeTruthy();
})
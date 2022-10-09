require('dotenv-safe').config();
const supertest = require('supertest');
const server = require("../server/server");

beforeAll(async () => {
	app = await server.start();
})

afterAll(async () => {
	await server.stop();
})

test('Redirect to microservice based on endpoint using API Gateway', async () => {
	const response = await supertest(app)
		.get('/cities');

	expect(response.status).toEqual(200);
	expect(Array.isArray(response.body)).toBeTruthy();
	expect(response.body.length).toBeGreaterThan(0);
})
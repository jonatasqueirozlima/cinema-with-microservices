module.exports = (app, repository) => {
	app.get('/cities', async (req, res, next) => {
		const cities = await repository.getAllCities();
		if (!cities || cities.length === 0) return res.sendStatus(404);
		res.json(cities)
	})

	app.get('/cities/:city/movies', async (req, res, next) => {
		const moviesByCity = await repository.getMoviesByCityId(req.params.city);
		if (!moviesByCity || moviesByCity.length === 0) return res.sendStatus(404);
		res.json(moviesByCity);
	})

	app.get('/cities/:city/movies/:movie', async (req, res, next) => {
		const movieSessionsByCity = await repository.getMovieSessionsByCityId(
			req.params.movie, req.params.city
		);

		if (!movieSessionsByCity || movieSessionsByCity.length === 0) return res.sendStatus(404);
		res.json(movieSessionsByCity);
	})

	app.get('/cities/:city/cinemas', async (req, res, next) => {
		const cinemasByCity = await repository.getCinemasByCityId(req.params.city);

		if (!cinemasByCity || cinemasByCity.length === 0) return res.sendStatus(404);
		res.json(cinemasByCity);
	})

	app.get('/cinemas/:cinema/movies', async (req, res, next) => {
		const moviesByCinema = await repository.getMoviesByCinemaId(req.params.cinema);

		if (!moviesByCinema || moviesByCinema.length === 0) return res.sendStatus(404);
		res.json(moviesByCinema);
	})

	app.get('/cinemas/:cinema/movies/:movie', async (req, res, next) => {
		const movieSessionsByCinema = await repository.getMovieSessionsByCinemaId(
			req.params.movie, req.params.cinema
		)

		if (!movieSessionsByCinema || movieSessionsByCinema.length === 0) return res.sendStatus(404);
		res.json(movieSessionsByCinema);
	})
}
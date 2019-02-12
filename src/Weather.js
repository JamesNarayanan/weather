const apiKey = 'ff07098595399807a08fe4b2ed836a68';

// https://openweathermap.org/forecast5

const Weather = {
	searchWeather(location) {
		location = location.replace(" ", "+");
		return fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${location},us&appid=${apiKey}&units=Imperial`
		).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if(jsonResponse) {
				console.log(jsonResponse);

				return {
                    city: jsonResponse.city.name,
                    low: jsonResponse.list[0].main.temp_min,
                    high: jsonResponse.list[0].main.temp_max,
                    humidity: jsonResponse.list[0].main.humidity,
                    windSpeed: jsonResponse.list[0].wind.speed
                };
			}
		});
	}
};

export default Weather;
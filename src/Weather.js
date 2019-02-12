const apiKey = 'f22bbd8641b71b57cc2c0de39a62ff4d';

// https://openweathermap.org/forecast5

const Weather = {
	searchWeather(location) {
		location = location.replace(" ", "+");
		return fetch(
			`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/40.638378,-74.450897`
		).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if(jsonResponse) {
				console.log(jsonResponse.daily);
				var days = jsonResponse.daily.data.map(day => {
					return {
						time: day.time,
						low: day.apparentTemperatureMin,
						high: day.apparentTemperatureMax,
						precipType: day.precipType,
						precipProb: day.precipProbability
					};
				});
				return days;
			}
		});
	}
};

export default Weather;
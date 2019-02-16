const apiKey = 'f22bbd8641b71b57cc2c0de39a62ff4d';

// https://openweathermap.org/forecast5

const Weather = {
	searchWeather(lat, lon) {
		return fetch(
			`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${lat},${lon}` // 40.638378,-74.450897
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
						apparentLow: day.apparentTemperatureLow,
						apparentHigh: day.apparentTemperatureHigh,
						precipType: day.precipType,
						precipProb: day.precipProbability,
						humidity: day.humidity,
						windSpeed: day.windSpeed,
						summary: day.summary,
						iconName: day.icon
					};
				});
				return days;
			}
		});
	}
};

export default Weather;
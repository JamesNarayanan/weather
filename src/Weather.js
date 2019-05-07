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
				if(jsonResponse.daily === undefined) {
					return null;
				}
				console.log(jsonResponse);
				return {days: jsonResponse.daily, hours: jsonResponse.hourly, minutes: jsonResponse.minutely};
			}
		});
	}
};

export default Weather;
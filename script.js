const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ab51eac537msh5519b92e75a46cfp116c1bjsn9a1f84b0e0fa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather =(city)=>{
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
		.then(response => response.json())
		.then(response => {console.log(response)
		temp.innerHTML = response.temp
		humidity.innerHTML = response.humidity
		wind_speed.innerHTML = response.wind_speed
	
	})
		.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("")
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '842452fcf5msh14947a66e7bcd57p1c28efjsn4608fd74ed1b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
.then(Response => Response.json())
.then(( response => {
console.log(response)
//cloud_pct.innerHTML = response.cloud_pct
temp.innerHTML = response.temp
temp1.innerHTML = response.temp
feels_like.innerHTML = response.feels_like
humidity.innerHTML = response.humidity
humidity1.innerHTML = response.humidity
wind_speed1.innerHTML = response.wind_speed

wind_speed.innerHTML = response.wind_speed
wind_degrees.innerHTML = response.wind_degrees
//sunriseTime.innerHTML = response.sunrise
//sunset.innerHTML = response.sunset
//sunrise.innerHTML= response.sunrise
min_temp.innerHTML= response.min_temp
max_temp.innerHTML= response.max_temp

// Unix timestamp in seconds (e.g., 1693701003)
const timestamp = response.sunrise;

// Create a new Date object with the timestamp
const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds

// Format the time
const options = { hour: '2-digit', minute: '2-digit', second: '2-digit',hour12: true, timeZoneName: 'short' };
const formattedTime = date.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' } );

// Display the formatted time in your HTML element
const sunriseElement = document.getElementById('sunrise');
//const sunsetElement = document.getElementById('sunset'); // Assuming you have an element with id 'sunrise'
sunriseElement.innerHTML = formattedTime;
//sunsetElement.innerHTML = formattedTime;
// Unix timestamp for sunset time in seconds (e.g., 1693702003)
const sunsetTimestamp = response.sunset;

// Create a new Date object with the sunset timestamp
const sunsetDate = new Date(sunsetTimestamp * 1000); // Multiply by 1000 to convert to milliseconds

// Format the sunset time
const options2 = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,timeZoneName: 'short' };
const formattedSunsetTime = sunsetDate.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });

// Display the formatted sunset time in your HTML element
const sunsetElement = document.getElementById('sunset'); // Assuming you have an element with id 'sunset'
sunsetElement.innerHTML = formattedSunsetTime;





}) 
)
.catch(err=> console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value);
})

// Submit.addEventListner("click", (e) =>{
// 	e.preventDefault()
// 	getWeather(city.value)
// })

getWeather("Delhi")
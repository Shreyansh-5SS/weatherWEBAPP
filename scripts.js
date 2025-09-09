const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '71c8f7cb35msh3d625ea9cc2f194p177104jsne3e4cf1850c2',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

async function getWeather(city) {
    cityName.innerHTML= city;
    try {
        const response = await fetch(url+city, options);
        const result = await response.json();
        console.log(result);

        document.querySelector("#temp").innerHTML = result.current.temp_c;
        document.querySelector("#temp1").innerHTML = result.current.temp_c;
        document.querySelector("#min-temp").innerHTML = result.forecast.forecastday[0].day.mintemp_c;
        document.querySelector("#max-temp").innerHTML = result.forecast.forecastday[0].day.maxtemp_c;
        document.querySelector("#cloud-pct").innerHTML = result.current.condition.text;
        document.querySelector("#feels-like").innerHTML = result.current.feelslike_c;
        document.querySelector("#humidity").innerHTML = result.current.humidity;
        document.querySelector("#humidity1").innerHTML = result.current.humidity;
        document.querySelector("#windspeed").innerHTML = result.current.wind_kph;
        document.querySelector("#windspeed2").innerHTML = result.current.wind_kph;
        document.querySelector("#sunrise").innerHTML = result.forecast.forecastday[0].astro.sunrise;
        document.querySelector("#sunset").innerHTML = result.forecast.forecastday[0].astro.sunset;
    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
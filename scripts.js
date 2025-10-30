const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '71c8f7cb35msh3d625ea9cc2f194p177104jsne3e4cf1850c2',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

const loading = document.getElementById('loading');

// Show loading animation
function showLoading() {
    loading.classList.add('active');
}

// Hide loading animation
function hideLoading() {
    loading.classList.remove('active');
}

// Get weather for main search
async function getWeather(city) {
    cityName.innerHTML = city;
    showLoading();
    
    try {
        const response = await fetch(url + city, options);
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
        
        hideLoading();
    } catch (error) {
        console.error(error);
        hideLoading();
        alert('❌ Could not fetch weather data. Please try again!');
    }
}

// Get weather for table cities
async function getCityWeather(city) {
    try {
        const response = await fetch(url + city, options);
        const result = await response.json();
        
        const cityLower = city.toLowerCase();
        document.getElementById(`${cityLower}_cloud`).innerHTML = result.current.condition.text;
        document.getElementById(`${cityLower}_feels`).innerHTML = result.current.feelslike_c + '°C';
        document.getElementById(`${cityLower}_humidity`).innerHTML = result.current.humidity + '%';
        document.getElementById(`${cityLower}_max`).innerHTML = result.forecast.forecastday[0].day.maxtemp_c + '°C';
        document.getElementById(`${cityLower}_min`).innerHTML = result.forecast.forecastday[0].day.mintemp_c + '°C';
        document.getElementById(`${cityLower}_sunrise`).innerHTML = result.forecast.forecastday[0].astro.sunrise;
        document.getElementById(`${cityLower}_sunset`).innerHTML = result.forecast.forecastday[0].astro.sunset;
        document.getElementById(`${cityLower}_temp`).innerHTML = result.current.temp_c + '°C';
        document.getElementById(`${cityLower}_wind`).innerHTML = result.current.wind_kph + ' km/h';
    } catch (error) {
        console.error(`Error fetching weather for ${city}:`, error);
    }
}

// Load all city data for the table
async function loadCitiesWeather() {
    const cities = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bengaluru'];
    for (const city of cities) {
        await getCityWeather(city);
    }
}

// Search button event
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (city.value.trim()) {
        getWeather(city.value);
    } else {
        alert('⚠️ Please enter a city name!');
    }
});

// Allow Enter key to search
city.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (city.value.trim()) {
            getWeather(city.value);
        }
    }
});

// Initialize with Delhi and load table data
getWeather("Delhi");
loadCitiesWeather();
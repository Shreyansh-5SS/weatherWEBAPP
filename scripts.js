const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '71c8f7cb35msh3d625ea9cc2f194p177104jsne3e4cf1850c2',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

const loading = document.getElementById('loading');
const weatherEffects = document.getElementById('weather-effects');
const thunderFlash = document.getElementById('thunderFlash');

// Show loading animation
function showLoading() {
    loading.classList.add('active');
}

// Hide loading animation
function hideLoading() {
    loading.classList.remove('active');
}

// Get weather icon based on condition
function getWeatherIcon(condition, isDay) {
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
        return isDay ? '☀️' : '🌙';
    } else if (conditionLower.includes('cloud')) {
        return isDay ? '⛅' : '☁️';
    } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
        return '🌧️';
    } else if (conditionLower.includes('snow')) {
        return '❄️';
    } else if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
        return '⛈️';
    } else if (conditionLower.includes('mist') || conditionLower.includes('fog')) {
        return '🌫️';
    } else if (conditionLower.includes('overcast')) {
        return '☁️';
    }
    return isDay ? '🌤️' : '🌙';
}

// Apply dynamic background based on weather
function applyWeatherTheme(condition, isDay) {
    const body = document.body;
    body.className = ''; // Remove all classes
    
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
        if (isDay) {
            body.classList.add('sunny');
            createSunRays();
        } else {
            body.classList.add('clear-night');
            createMoon();
            createStars();
        }
    } else if (conditionLower.includes('cloud') || conditionLower.includes('overcast')) {
        body.classList.add('cloudy');
        createClouds();
    } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
        body.classList.add('rainy');
        createRain();
    } else if (conditionLower.includes('snow')) {
        body.classList.add('snowy');
        createSnow();
    } else if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
        body.classList.add('thunderstorm');
        createRain();
        createThunder();
    }
}

// Create rain effect
function createRain() {
    weatherEffects.innerHTML = '';
    const rainContainer = document.createElement('div');
    rainContainer.className = 'rain-container';
    
    for (let i = 0; i < 100; i++) {
        const rain = document.createElement('div');
        rain.className = 'rain';
        rain.style.left = Math.random() * 100 + '%';
        rain.style.animationDelay = Math.random() * 2 + 's';
        rain.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        rainContainer.appendChild(rain);
    }
    
    weatherEffects.appendChild(rainContainer);
}

// Create snow effect
function createSnow() {
    weatherEffects.innerHTML = '';
    const snowContainer = document.createElement('div');
    snowContainer.className = 'snow-container';
    
    for (let i = 0; i < 50; i++) {
        const snow = document.createElement('div');
        snow.className = 'snow';
        snow.style.left = Math.random() * 100 + '%';
        snow.style.animationDelay = Math.random() * 3 + 's';
        snow.style.animationDuration = (Math.random() * 2 + 2) + 's';
        snow.style.width = (Math.random() * 5 + 5) + 'px';
        snow.style.height = snow.style.width;
        snowContainer.appendChild(snow);
    }
    
    weatherEffects.appendChild(snowContainer);
}

// Create thunder effect
function createThunder() {
    setInterval(() => {
        if (Math.random() > 0.95) {
            thunderFlash.classList.add('active');
            setTimeout(() => {
                thunderFlash.classList.remove('active');
            }, 300);
        }
    }, 1000);
}

// Create sun rays
function createSunRays() {
    weatherEffects.innerHTML = '';
    const sunRays = document.createElement('div');
    sunRays.className = 'sun-rays';
    
    for (let i = 0; i < 12; i++) {
        const ray = document.createElement('div');
        ray.className = 'sun-ray';
        ray.style.transform = `rotate(${i * 30}deg)`;
        sunRays.appendChild(ray);
    }
    
    weatherEffects.appendChild(sunRays);
}

// Create moon
function createMoon() {
    weatherEffects.innerHTML = '';
    const moon = document.createElement('div');
    moon.className = 'moon';
    weatherEffects.appendChild(moon);
}

// Create stars
function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.position = 'fixed';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
        star.style.zIndex = '1';
        weatherEffects.appendChild(star);
    }
    
    // Add twinkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Create floating clouds
function createClouds() {
    weatherEffects.innerHTML = '';
    const cloud1 = document.createElement('div');
    cloud1.className = 'cloud cloud-1';
    const cloud2 = document.createElement('div');
    cloud2.className = 'cloud cloud-2';
    
    weatherEffects.appendChild(cloud1);
    weatherEffects.appendChild(cloud2);
}

// Get weather for main search
async function getWeather(city) {
    cityName.innerHTML = city;
    showLoading();
    
    try {
        const response = await fetch(url + city, options);
        const result = await response.json();
        console.log(result);

        const isDay = result.current.is_day === 1;
        const condition = result.current.condition.text;
        
        // Update hero section
        document.getElementById('heroTemp').innerHTML = Math.round(result.current.temp_c);
        document.getElementById('heroDescription').innerHTML = condition;
        document.getElementById('heroWeatherIcon').innerHTML = getWeatherIcon(condition, isDay);
        document.getElementById('heroFeels').innerHTML = Math.round(result.current.feelslike_c);
        document.getElementById('heroHumidity').innerHTML = result.current.humidity;
        document.getElementById('heroWind').innerHTML = Math.round(result.current.wind_kph);
        document.getElementById('heroUV').innerHTML = result.current.uv;

        // Update detailed cards
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
        
        // Apply dynamic theme
        applyWeatherTheme(condition, isDay);
        
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
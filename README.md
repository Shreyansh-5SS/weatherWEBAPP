# 🌤️ Amazing Weather App

A beautiful, interactive weather application with iPhone-style UI and dynamic visual effects that change based on real-time weather conditions.

![Weather App](https://img.shields.io/badge/Weather-App-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## ✨ Features

### 🎨 Dynamic Visual Effects
- **Weather-based backgrounds** that automatically change based on current conditions
- **Animated effects** including:
  - ☀️ Rotating sun rays for sunny weather
  - 🌙 Moon with stars for clear nights
  - 🌧️ Realistic rain animation with 100+ raindrops
  - ❄️ Falling snowflakes with rotation
  - ⛈️ Thunder and lightning effects
  - ☁️ Floating clouds animation

### 📱 iPhone-Style Interface
- Large, clean weather display with animated icons
- Beautiful glassmorphism design with blur effects
- Smooth transitions and hover effects
- Responsive layout that works on all devices

### 🌍 Real-Time Weather Data
- Current temperature, feels like, humidity
- Wind speed and direction
- Sunrise and sunset times
- UV index
- Min/Max temperatures
- Weather conditions

### 🏙️ Multiple Cities Support
- Search any city worldwide
- Pre-loaded data for 5 major Indian cities:
  - 🏙️ Delhi
  - 🌆 Mumbai
  - 🏖️ Chennai
  - 🌉 Kolkata
  - 🌳 Bengaluru

### 🎯 Interactive Features
- **Search functionality** - Enter any city name
- **Loading animations** - Smooth spinner while fetching data
- **Hover effects** - Interactive cards and buttons
- **Keyboard support** - Press Enter to search
- **Error handling** - User-friendly error messages

## 🚀 Demo

Visit the live demo: [Weather App Demo](#)

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, animations, and glassmorphism effects
- **JavaScript (ES6+)** - Dynamic functionality and API integration
- **Bootstrap 5** - Responsive grid and components
- **Font Awesome** - Beautiful icons
- **WeatherAPI** - Real-time weather data

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls
- Text editor (VS Code recommended)

## 💻 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shreyansh-5SS/weatherWEBAPP.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd weatherWEBAPP
   ```

3. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

4. **Visit** `http://localhost:8000` in your browser

## 🔑 API Setup

This project uses [WeatherAPI.com](https://www.weatherapi.com/) for real-time weather data.

**Note:** The API key is included for demo purposes. For production use:

1. Get your free API key from [WeatherAPI.com](https://www.weatherapi.com/)
2. Replace the API key in `scripts.js`:
   ```javascript
   headers: {
       'x-rapidapi-key': 'YOUR_API_KEY_HERE',
       'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
   }
   ```

## 📖 Usage

### Searching for a City
1. Enter any city name in the search bar
2. Click the "Search" button or press Enter
3. Watch the app dynamically update with:
   - New background theme
   - Animated weather effects
   - Real-time weather data

### Understanding the Display
- **Hero Section** - Large temperature display with main weather icon
- **Detail Cards** - Temperature, Humidity, Wind & Sun information
- **Quick Stats** - Feels Like, Humidity, Wind Speed, UV Index
- **Popular Cities** - Pre-loaded weather for major cities

## 🎨 Weather Themes

The app automatically applies different visual themes based on weather conditions:

| Condition | Background | Effects |
|-----------|-----------|---------|
| ☀️ Sunny | Golden/Orange gradient | Rotating sun rays |
| 🌙 Clear Night | Dark blue gradient | Moon + Twinkling stars |
| ☁️ Cloudy | Gray gradient | Floating clouds |
| 🌧️ Rainy | Blue/Purple gradient | Falling raindrops |
| ❄️ Snowy | Light gray/white | Falling snowflakes |
| ⛈️ Thunderstorm | Dark stormy gradient | Rain + Lightning flashes |

## 📁 Project Structure

```
weatherWEBAPP/
│
├── index.html          # Main HTML file with structure
├── scripts.js          # JavaScript for API calls and animations
├── README.md           # Project documentation
└── .git/               # Git repository
```

## 🌟 Key Features Breakdown

### Glassmorphism Design
- Transparent cards with backdrop blur
- Subtle borders and shadows
- Layered visual hierarchy

### Animations
- Gradient background shift animation
- Floating particles
- Weather-specific effects (rain, snow, clouds)
- Smooth hover transitions
- Icon bounce effects

### Responsive Design
- Mobile-first approach
- Flexible grid layout
- Touch-friendly interface
- Optimized for all screen sizes

## 🐛 Known Issues

- API rate limits may apply for excessive requests
- Some weather conditions might default to standard animations

## 🔮 Future Enhancements

- [ ] 7-day weather forecast
- [ ] Hourly weather data
- [ ] Geolocation support
- [ ] Weather alerts and notifications
- [ ] Temperature unit toggle (°C/°F)
- [ ] More cities in popular cities section
- [ ] Weather maps integration
- [ ] Save favorite cities
- [ ] Dark/Light mode toggle
- [ ] PWA support for offline access

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Shreyansh**

- GitHub: [@Shreyansh-5SS](https://github.com/Shreyansh-5SS)
- Project: [weatherWEBAPP](https://github.com/Shreyansh-5SS/weatherWEBAPP)

## 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for providing weather data
- [Bootstrap](https://getbootstrap.com/) for the responsive framework
- [Font Awesome](https://fontawesome.com/) for beautiful icons
- Apple iOS Weather app for design inspiration

## 📧 Contact

Have questions or suggestions? Feel free to reach out!

- Open an issue on GitHub
- Visit my profile: [@Shreyansh-5SS](https://github.com/Shreyansh-5SS)

---

<div align="center">
  
### ⭐ Star this repository if you found it helpful!

Made with ❤️ and ☕ by Shreyansh

</div>

function displayForecast(forecastData) {
    const container = document.getElementById('forecast-container');
    container.innerHTML = "";

    const daily = forecastData.list
        .filter(item => item.dt_txt.includes("12:00:00"))
        .slice(0, 3);

    daily.forEach(day => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

        container.innerHTML += `
            <div class="forecast-day">
                <p class="day-name">${dayName}</p>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="${day.weather[0].description}">
                <p class="temp">${Math.round(day.main.temp)}°C</p>
            </div>
        `;
    });
}

apiForecastFetch();
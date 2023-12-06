document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '40ce8d1f7352429346094cd32641ff23'; 
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=40ce8d1f7352429346094cd32641ff23&units=metric';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const weatherContainer = document.createElement('div');
            weatherContainer.innerHTML = `<h3>Current Weather</h3><p>${weatherDescription}, ${temperature}°C</p>`;
            document.querySelector('main').appendChild(weatherContainer);
        })
        .catch(error => console.error('Error fetching weather:', error));
});

const input = document.querySelector('#city');
const searchButton = document.querySelector('#search-button');

const cityName = document.querySelector('#city-name');
const cityRegion = document.querySelector('#city-region');
const cityWeather = document.querySelector('#city-weather');

async function getData(cityName) {
    try {
        const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=40734e288c7b49a9ae9101454252607&q=${cityName}&aqi=yes`);
        return await promise.json();
    } catch (err) {
        throw new Error("something went wrong" + err.message);
    }
}

searchButton.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}`;
    cityRegion.innerText = `${result.location.region}, ${result.location.country}`;
    cityWeather.innerText = `${result.current.temp_c}°C`;
})
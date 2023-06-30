const api_key = "a8e71c9932b20c4ceb0aed183e6a83bb"

const form = document.querySelector('.weather-form')
const input = document.querySelector('.input')
const weatherDataEl = document.querySelector('.weather-data');


form.addEventListener('click',(e) => {
    e.preventDefault()
    const userInput = input.value
    getWeatherData(userInput)
})


async function getWeatherData(city){

    try{ 
        const response =  await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        const data = await response.json()
    
        if(!response.ok){
          weatherDataEl.innerHTML = `
          <h2 class = 'error'>City Not Found</h2>
          `
        }
        const name = data.name
        const temperature =  Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon

        const feelsLike = Math.round(data.main.feels_like);
        const humidity = data.main.humidity;
        const wind = data.wind.speed;



        weatherDataEl.innerHTML = `  <h1 class ="title">${name}</h1>
        <div class="img-container">
          <img src="http://openweathermap.org/img/wn/${icon}.png" alt="" />
        </div>

        <div class="weather-text">
        
          <span class="temp">${temperature}&deg C</span>
          <h4>${description}</h4>
        </div>

        <div class="descripition">
          <div class="temperature">
            <small>Feels like <span class="degree">${feelsLike}&degC</span></small>
          </div>
          <div class="humidity">
            <small>humidity <span class="hum">${humidity}%</span></small>
          </div>
          <div class="wind-speed">
            <small>Wind Speed <span class="wind">${wind}m/s</span></small>
          </div>
        </div>
      </div>`

    }

    catch(e){
        console.log(e)
    }

}
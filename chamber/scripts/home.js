const apiKey = 'c5bf1eb7a0bb464a8b9140952231610';
  const baseUrl = 'https://api.weatherapi.com/v1';
  const currentWeather = '/current.json';
  const temp = document.getElementById('temp');
  const weatherImg = document.getElementById('weather-img');
  const humidity = document.getElementById('humidity');
  const windChill = document.getElementById('wind-chill');
  let d = new Date();
  let today = d.getDay();
  let daysnames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

  let Url = baseUrl + currentWeather +'?key=' +  apiKey + '&' +'q=22601';
  async function getWeather(){
    let response = await fetch(Url);
    let data = await response.json();
    return data;
  }
  getWeather().then(
    data => {
      let currentTemp = data.current.temp_f;
      let currentWindSpeed = data.current.wind_mph;
      temp.innerHTML = currentTemp;
      weatherImg.src = data.current.condition.icon;
      humidity.textContent = data.current.humidity;
      if (currentTemp <= 50 && currentWindSpeed >= 3.0) {
        let chillCalculate = parseFloat(35.74 + (0.6215 * currentTemp) - (35.75 * (currentWindSpeed ** 0.16)) + (0.4275 * currentTemp * (currentWindSpeed ** 0.16))).toFixed(1);
        windChill.textContent = chillCalculate;
      }
      else {
        windChill.textContent = "N/A"
      }
    });

    let banner = document.getElementById('banner');

    
    if (today == 1 || today == 2 || today == 3) {
      banner.classList.remove("active");
    }
    function closeBanner(){
      banner.classList.add('active');
    }
    const close = document.getElementById('close');
    close.addEventListener('click',closeBanner); 

    let forecast = baseUrl + '/forecast.json' +'?key=' +  apiKey + '&' +'q=22601' + '&days=3';
    async function getForecast(){
      let response = await fetch(forecast);
      let object = await response.json();
      let forecast_data = object.forecast
      console.log(forecast_data);
      displayForecast(forecast_data);
    }


getForecast();

function displayForecast(forecast_data)
{
  let parent = document.getElementById('forecast');
  let count = 0;
  forecast_data.forecastday.forEach(day=> {
    let card = document.createElement('div');
    let day_name = document.createElement('p');
    if (0 == count){
      day_name.innerText = 'Today';
      card.appendChild(day_name);

    }
    else if (1 == count){
      day_name.innerText = 'Tomorrow';
      card.appendChild(day_name);
    }
    else if (2== count){
      day_name.innerText = `${daysnames[(today + count)]}`;
    }
    count ++;
    let max_temp = document.createElement('p');
    max_temp.innerText = `High: ${day.day.maxtemp_f} °F`;
    let min_temp = document.createElement('p');
    min_temp.innerText = `Low: ${day.day.mintemp_f} °F`
    
    card.appendChild(day_name);
    card.appendChild(min_temp);
    card.appendChild(max_temp);
    parent.appendChild(card);
    
    console.log(temp);

})
};
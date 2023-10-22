  const apiKey = 'c5bf1eb7a0bb464a8b9140952231610';
  const baseUrl = 'https://api.weatherapi.com/v1';
  const currentWeather = '/current.json';
  const temp = document.getElementById('temp');
  const weatherImg = document.getElementById('weather-img');
  const humidity = document.getElementById('humidity');
  const windChill = document.getElementById('wind-chill');

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
      temp.textContent = currentTemp;
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

window.onload = function() {
    let date = new Date(document.lastModified);
    let daysnames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = daysnames[date.getDay()];
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

  
    let fullDateString = "Last Updated: " + day + ", " + month + "/" + date.getDate() + "/" + year + " at " + date.getHours() + ":" + date.getMinutes() + " EDT";
    let element = document.getElementById("lastModified");
    element.innerHTML = fullDateString;

    let copySting = ` &copy ${year} || Noah C. Smith || Virginia, USA`;
    let element2 = document.getElementById('copy')
    element2.innerHTML = copySting;

  };
  
  



  
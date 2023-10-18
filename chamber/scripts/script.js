
  const apiKey = 'c5bf1eb7a0bb464a8b9140952231610';
  const baseUrl = 'https://api.weatherapi.com/v1';
  const currentWeather = '/current.json';

  let Url = baseUrl + currentWeather +'?key=' +  apiKey + '&' +'q=22601';
  async function getWeather(){
    let response = await fetch(Url);
    let data = await response.json();
    return data;
  }
  getWeather().then(
    data => {
    const temp = document.getElementById('temp');
    const weatherImg = document.getElementById('weather-img');
    const humidity = document.getElementById('humidity');
    const windChill = document.getElementById('wind-chill');
    temp.textContent = data.current.temp_f;
    weatherImg.src = data.current.condition.icon;
    humidity.textContent = data.current.humidity;
    windChill.textContent = data.current.wind_mph;

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
  
  



  
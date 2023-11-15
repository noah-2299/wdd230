
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const baseUrl = 'https://api.weatherapi.com/v1/current.json?key='
const apiKey = 'c5bf1eb7a0bb464a8b9140952231610';
const trier = '&q=49.75,6.64';
const url = baseUrl + apiKey + trier;

function displayResults(data) {
    currentTemp.innerHTML = `${data.current.temp_f}&deg;F`;
    const iconsrc = data.current.condition.icon;
    let desc =  data.current.condition.text;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }

  async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);  

        }
        else{
            throw Error(await response.text());
        }
        
    }
    catch(error){
        console.log(error);
    }
}

let weather = apiFetch();


apiFetch().then(displayResults());

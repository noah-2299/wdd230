
// API Variable declarations
const apiKey = "e4d4269dfc273073127dd60fc4d3b6de";
const lat = "20.3019";
const lon = "86.5642";
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&cnt=12`;


//DOM varible declarations
const temp_element = document.getElementById('temp');
const desc_element = document.getElementById('weather-description');
const icon_element = document.getElementById('weather-icon');
const humidity_element = document.getElementById('humidity');


const forecast_day1 = document.getElementById("weather-1");
const forecast_day2 = document.getElementById("weather-2");
const forecast_day3 = document.getElementById("weather-3");
const forecast_day4 = document.getElementById("weather-4");
const forecast_day5 = document.getElementById("weather-5");




async function getWeather(url){
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }


getWeather(currentUrl).then(data => {
    let temp = data.main.temp + ' °C';
    let desc = data.weather[0].description;
    let icon = data.weather[0].icon;
    let icon_src = `https://openweathermap.org/img/wn/${icon}.png`;
    let humidity = data.main.humidity;

    temp_element.innerText = temp;
    desc_element.innerText = desc;
    icon_element.setAttribute('src',icon_src);
    humidity_element.innerText = humidity;

    }
  );

getWeather(forecastUrl).then(data => {
    // let clean_array = [];
    let raw_array = data.list;
    let max = 0;
    let min = 0;
    let forecast_row_1 = document.getElementById('forecast-row-1');
    let forecast_row_2 = document.getElementById('forecast-row-2');
    let forecast_row_3 = document.getElementById('forecast-row-3');
    let forecast_row_4 = document.getElementById('forecast-row-4');

    raw_array.forEach(interval =>
        {
            //finds the highest of the temps for all the intervals over the next day
            if (interval.main.temp_max > max){
                let max = interval.main.temp_max;
            }
            if (interval.main.temp_min > min){
                let min = interval.main.temp_min;
            }
            
            // pull all the data into variables
            let hour = interval.dt_txt.split(' ')[1]; //takes the datetime string providede by api and splists the date from the hour and selects only the hour
            let split_hour = hour.split(':');
            let clean_hour = split_hour[0] + ':' + split_hour[1]
            console.log(clean_hour);
            let interval_temp = `${Math.round(interval.main.temp)} °C `;
            let interval_humidity = interval.main.humidity + "%";
            let interval_desc = interval.weather[0].main;
            let interval_icon = `https://openweathermap.org/img/wn/${interval.weather[0].icon}.png`;
            //create the DOM elements

            let interval_hour = document.createElement('td');
            let interval_element_t =  document.createElement('td'); 
            let interval_element_h =  document.createElement('td'); 
            let interval_element_d =  document.createElement('td'); 
            let interval_element_i =  document.createElement('img');

            interval_hour.innerText = clean_hour;
            interval_element_t.innerText = interval_temp;
            interval_element_h.innerText = interval_humidity;
            interval_element_d.innerText = interval_desc;
            interval_element_i.setAttribute('src', interval_icon);


            forecast_row_1.appendChild(interval_hour);
            forecast_row_2.appendChild(interval_element_t);
            forecast_row_3.appendChild(interval_element_h);
            forecast_row_4.appendChild(interval_element_d);
            // .appendChild(interval_element_i);






            

        }
    )

    }
  );

// async function checkWeather() {
//     const apiUrl = 'http://api.openweathermap.org/data/3.0/triggers';

//     const triggerData = {
//         time_period: {
//             start: { expression: 'after', amount: 132000000 },
//             end: { expression: 'after', amount: 432000000 }
//         },
//         conditions: [
//             { name: 'temp', expression: '$lt', amount: 32 },
//             { name: 'wind_speed', expression: '$gt', amount: 35}
//         ],
//         area: [{ type: 'Point', coordinates: [53, 37] }]
//     };

//     try {
//         // Create a trigger
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(triggerData)
//         });

//         const trigger = await response.json();

//         // Check if the trigger has any alerts
//         if (trigger.alerts && Object.keys(trigger.alerts).length > 0) {
//             // Display the weather warning banner
//             document.getElementById('weather-banner').style.display = 'block';
//         }
//     } catch (error) {
//         console.error('Error checking weather:', error);
//     }
// }

// // Check weather conditions when the page loads
// window.addEventListener('load', checkWeather);
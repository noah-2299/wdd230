
// API Variable declarations
const apiKey = "e4d4269dfc273073127dd60fc4d3b6de";
const lat = "20.3019";
const lon = "86.5642";
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&cnt=8`;





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


let forecast_row_1 = document.getElementById('forecast-row-1');
let forecast_row_2 = document.getElementById('forecast-row-2');
let forecast_row_3 = document.getElementById('forecast-row-3');
let forecast_row_4 = document.getElementById('forecast-row-4');

getWeather(currentUrl).then(data => {
    let temp = Math.round(data.main.temp) + ' °C';
    let main = data.weather[0].main;
    let desc = data.weather[0].description;
    let icon = data.weather[0].icon;
    let icon_src = `https://openweathermap.org/img/wn/${icon}.png`;
    let humidity = data.main.humidity + '%';

    const current_header = document.createElement('td');
    const current_temp = document.createElement('td');
    const current_main =document.createElement('p');
    const current_desc = document.createElement('p');
    const current_icon = document.createElement('img');
    const current_humidity = document.createElement('td');
    const current_conditions = document.createElement('td');
    
    current_main.innerText = main;
    current_header.innerText = "Current";
    current_temp.innerText = temp;
    current_desc.innerText = desc;
    current_humidity.innerText = humidity;
    current_icon.setAttribute('src', icon_src);

    current_conditions.appendChild(current_main);
    current_conditions.appendChild(current_icon);
    current_conditions.appendChild(current_desc);

    
    
    forecast_row_1.appendChild(current_header);
    forecast_row_2.appendChild(current_temp);
    forecast_row_3.appendChild(current_humidity);
    forecast_row_4.appendChild(current_conditions);

    }
  );

getWeather(forecastUrl).then(data => {
    // let clean_array = [];
    let raw_array = data.list;
    let max = 0;
    let min = 1000000000000000000000000000000000000000000000000000000;
    

    raw_array.forEach(interval =>
        {
            //finds the highest of the temps for all the intervals over the next day
            if (interval.main.temp_max > max){
                max = interval.main.temp_max;
                
            }
            if (interval.main.temp_min < min) {
                min = interval.main.temp_min;
                
            }
            
            // pull all the data into variables
            let hour = interval.dt_txt.split(' ')[1]; //takes the datetime string providede by api and splists the date from the hour and selects only the hour
            let split_hour = hour.split(':');
            let clean_hour = split_hour[0] + ':' + split_hour[1];
            if ("15" == split_hour[0] || "12" == split_hour[0] || "18" == split_hour[0]) {
            let interval_temp = `${Math.round(interval.main.temp)} °C `;
            let interval_humidity = interval.main.humidity + "%";
            let interval_hour = document.createElement('td');
            let interval_element_t =  document.createElement('td'); 
            let interval_element_h =  document.createElement('td'); 
            let interval_element_d = document.createElement('td');
            interval.weather.forEach(item =>{
              let item_main = item.main;
              let item_desc = item.description;
              let item_icon = `https://openweathermap.org/img/wn/${item.icon}.png`;
              

              let item_m =  document.createElement('p'); 
              let item_i =  document.createElement('img'); 
              let item_d =  document.createElement('p'); 

              item_m.innerText = item_main;
              item_d.innerText =item_desc;
              item_i.setAttribute("src",item_icon);

              interval_element_d.appendChild(item_m);
              interval_element_d.appendChild(item_i);
              interval_element_d.appendChild(item_d);
              


              
        
            });
    
            //create the DOM elements

            
            
            

            interval_hour.innerText = 'Tomorrow @'+ clean_hour;
            interval_element_t.innerText = interval_temp;
            interval_element_h.innerText = interval_humidity;


            forecast_row_1.appendChild(interval_hour);
            forecast_row_2.appendChild(interval_element_t);
            forecast_row_3.appendChild(interval_element_h);
            forecast_row_4.appendChild(interval_element_d);
            // .appendChild(interval_element_i);
            }
        });
        console.log(min);
        console.log(`max is:${max}`);
    }
  );
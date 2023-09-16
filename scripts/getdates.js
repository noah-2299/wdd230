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
    
  };


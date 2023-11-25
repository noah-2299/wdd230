window.onload = function() {
    const timeStamp = Date.now();
    const element0 = document.getElementById('timestamp');
    element0.setAttribute('value',timeStamp)
   
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
        let element1 = document.getElementById("lastModified");
        element1.innerHTML = fullDateString;
    
        let copySting = ` &copy ${year} || Noah C. Smith || Virginia, USA`;
        let element2 = document.getElementById('copy')
        element2.innerHTML = copySting;
 
};
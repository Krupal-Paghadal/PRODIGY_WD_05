let t = document.getElementById("t");
let c = document.getElementById("c");
let h = document.getElementById("h");
let ws = document.getElementById("ws");
let city = document.getElementById("city");
let d = document.getElementById("d");
let country = document.getElementById("country");

const apikey = "b800e188a53239fb762f167ad5ded71f";

function submitLocation(event)
{
    event.preventDefault();
    let loc = document.querySelector("#location-input").value.trim();
    
    apiFetch(loc);
}

function apiFetch( loc ) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}&units=metric`;
    
    fetch(api)
        .then(res => res.json())
        .then((data) => {
            console.log(data);

            let temp = data.main.temp;
            let cloud = data.clouds.all;
            let humidity = data.main.humidity;
            let windSpeed = data.wind.speed;
            let cityName = data.name;
            let description = data.weather[0].description;
            let countryName = data.sys.country;

            t.innerHTML = temp;
            c.innerHTML = cloud;
            h.innerHTML = humidity,
            ws.innerHTML = windSpeed,
            city.innerHTML = cityName;
            d.innerHTML = description;
            country.innerHTML = countryName;
        }).catch(err => {
            alert("City Not Found")
        })
}

// apiFetch();
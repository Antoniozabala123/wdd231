const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');


    hamButton.textContent = navigation.classList.contains('open') ? 'X' : '☰';
});

const myday = document.querySelector('#day');
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');


const myKey = "8dfddc0fc092880c6501ab985f289321";
const myLat = 10.469078340685487;
const myLon = -66.90427095961176;

const time = new Date();
const day = time.getDay();
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    console.log('hello')
    myTown.innerHTML = data.name
    myday.innerHTML = weekdays[day];
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;c`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);

}


const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`;

async function apiForecastFetch() {
    try {
        const response = await fetch(forecastUrl);

        if (response.ok) {
            const forecastData = await response.json();
            console.log(forecastData);
            displayForecast(forecastData); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(forecastData) {
    const container = document.getElementById('forecast-container');
    container.innerHTML = "";

    const daily = forecastData.list
        .filter(item => item.dt_txt.includes("12:00:00"))
        .slice(0, 3);

    daily.forEach(day => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const description = day.weather[0].description;

        container.innerHTML += `
            <div class="forecast-day">
                <p class="day-name">${dayName}</p>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="${day.weather[0].description}">
                <p class="temp">${Math.round(day.main.temp)}°C</p>
                <p class="description">${description}</p>
            </div>
        `;
    });
}

apiForecastFetch();

const container = document.querySelector('#spotlights');  // Cambia el id
const jsonURL = "data/members.json";

async function getSpotlights() {
    try {
        const response = await fetch(jsonURL);
        if (!response.ok) {
            throw new Error("HTTP error! ");
        }

        const data = await response.json();
        const goldSilver = data.filter(member =>
            member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
        );
        const shuffled = goldSilver.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        createMemberCards(selected);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}


function createMemberCards(members) {

    

    container.innerHTML = "";

   

    members.forEach(member => {
        let card = document.createElement("section");
        card.classList.add("member-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let phone = document.createElement("p");
        let level = document.createElement("p");
        let website = document.createElement("a");
        let img = document.createElement("img");


        name.textContent = member.name;
        location.innerHTML = `<span class="label">Address:</span> ${member.address}`;
        phone.innerHTML = `<span class="label">Phone:</span> ${member.phone}`;
        level.innerHTML = `<span class="label">Membership:</span> ${member.membershipLevel}`;


        website.href = member.websiteURL;
        website.textContent = "Visit Website";
        website.target = "_blank";
        website.rel = "noopener noreferrer";


        img.setAttribute("src", member.image);
        img.setAttribute("alt", `${member.name} Logo`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "150");
        img.setAttribute("height", "100");


        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(phone);
        card.appendChild(level);
        card.appendChild(website);

        container.appendChild(card);
    });
}

getSpotlights();

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;




    

   






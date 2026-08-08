import { places } from "../data/places.mjs";
 console.log(places);

const showHere = document.querySelector("#allplaces")

function displayItems(places) {
    places.forEach(x => {
        // build the card element
        const thecard = document.createElement("div");

        // build the photo element
        const thefigure = document.createElement("figure");
        const thephoto = document.createElement("img");
        thephoto.src = x.image;
        thephoto.alt = x.name;
        thephoto.loading = "lazy";   
        thephoto.width = 300;
        thephoto.height = 200;
        thefigure.appendChild(thephoto);
        thecard.appendChild(thefigure);
        
        // build the title element
        const thetitle = document.createElement("h2");
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);

        // build the address element
        const theaddress = document.createElement("address");
        theaddress.innerText = x.address;
        thecard.appendChild(theaddress);

        // build the description element
        const thedesc = document.createElement("p");
        thedesc.innerText = x.description;
        thecard.appendChild(thedesc);

        // button
        const thebtn = document.createElement("button");
        thebtn.innerText = "Learn More";
        thecard.appendChild(thebtn);

        // add card to the page
        showHere.appendChild(thecard)
    })
}

displayItems(places)

const displayVisitorMessage = () => {
    const messageElement = document.getElementById('visitor-message');
    const lastVisit = localStorage.getItem('lastVisitDate');
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day

    if (!lastVisit) {
        messageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDifference = now - Number(lastVisit);
        if (timeDifference < oneDay) {
            messageElement.textContent = "Back so soon! Awesome!";
        } else {
            const daysDifference = Math.floor(timeDifference / oneDay);
            const dayText = daysDifference === 1 ? "day" : "days";
            messageElement.textContent = `You last visited ${daysDifference} ${dayText} ago.`;
        }
    }
    // Store the current visit date for the next time
    localStorage.setItem('lastVisitDate', now);
};
displayVisitorMessage();
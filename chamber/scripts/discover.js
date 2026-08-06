import { places } from "../data/places.mjs";
 console.log(places);

const showHere = document.querySelector("#allplaces")

function displayItems(places) {
    places.forEach(x => {
        // build the card element
        const thecard = document.createElement("div");

        // build the photo element
        const thephoto = document.createElement("img");
        thephoto.src = x.image;        
        thephoto.alt = x.name;
        thephoto.setAttribute("loading", "lazy");
        thecard.appendChild(thephoto);

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
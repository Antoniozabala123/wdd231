const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

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



const container = document.querySelector('#products-grid');
const jsonURL = "data/home.json";

async function loadProductSpotlights() {
    try {
        const response = await fetch(jsonURL);
        if (!response.ok) {
            throw new Error("HTTP error!");
        }
        const data = await response.json();
        createProductCatalog(data);
    } catch (error) {
        console.error("Error fetching product data:", error);
    }
}

function createProductCatalog(products) {

    container.innerHTML = "";

    products.forEach(product => {

        let card = document.createElement("section");
        let img = document.createElement("img");
        let name = document.createElement("h3");
        let category = document.createElement("p");
        let description = document.createElement("p");
        let price = document.createElement("p");
        let pack = document.createElement("p");
        let colors = document.createElement("p");


        card.classList.add("product-card");


        img.setAttribute("src", product.image);
        img.setAttribute("alt", `${product.name} Preview`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", 150);
        img.setAttribute("height", 100);

        name.textContent = product.name;

        category.innerHTML = `<span class="label">Category:</span> ${product.category}`;
        description.textContent = product.description;
        price.innerHTML = `<span class="label">Wholesale Price:</span> $${product.wholesale_price.toFixed(2)}`;
        pack.innerHTML = `<span class="label">Bulk Pack:</span> ${product.bulk_pack}`;
        colors.innerHTML = `<span class="label">Available Colors:</span> ${product.colors.join(", ")}`;


        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(pack);
        card.appendChild(colors);

        container.appendChild(card);
    });
}
loadProductSpotlights();

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
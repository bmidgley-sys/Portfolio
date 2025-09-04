const quoteUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/today");

async function displayQuote() {
    const quoteCard = document.getElementById("quoteCard");

    try {
        const response = await fetch(quoteUrl);
        const dataText = await response.json();
        const data = JSON.parse(dataText.contents);
        
        const quoteText = data[0].q;
        const quoteAuthor = data[0].a;

        quoteCard.innerHTML = `
            <div class="card">
                <h3>Quote of the Day</h3>
                <p>"${quoteText}"</p>
                <p><em>- ${quoteAuthor}</em></p>
            </div>
        `;
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteCard.innerHTML = '<p> Sorry, could not load a quote. </p>';
    }
}

window.addEventListener("DOMContentLoaded", displayQuote);

let index = 0;
const images = ['images/picture1.jpg'];
const imgElement = document.getElementById("pictures");

if (imgElement) {
    setInterval(function() {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 5000);
}
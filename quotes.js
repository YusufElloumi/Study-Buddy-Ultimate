
document.addEventListener("DOMContentLoaded", () => {
console.log("App initialized");

const quote_txtID = document.getElementById("quote-text");
const quote_authorID = document.getElementById("quote-author");


// Function to fetch a random quote from ZenQuotes API

async function getQuote() {
    try {
    const res = await fetch("https://zenquotes.io/api/quotes/");
    const data = await res.json();
    quote_txtID.innerText = `"${data[0].q}"`;
    quote_authorID.innerText = `— ${data[0].a}`;
    } catch (error) {
    quote_txtID.innerText = "Failed to fetch quote.";
    quote_authorID.innerText = ":(";
    console.error(error);
    }
}

getQuote();
});


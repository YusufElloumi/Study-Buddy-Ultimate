document.addEventListener("DOMContentLoaded", () => {
    console.log("App initialized");

    const quote_txtID = document.getElementById("quote-text");
    const quote_authorID = document.getElementById("quote-author");

    // Debug: Check if elements are found
    console.log("test: quote_txtID", quote_txtID);
    console.log("test: quote_authorID", quote_authorID);

    async function getQuote() {
    try {
        const proxyUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/quotes/");
        const res = await fetch(proxyUrl);
        const data = await res.json();
        const quotes = JSON.parse(data.contents);
        const randomIndex = Math.floor(Math.random() * 50) - 1;

        // Debug: Log the fetched quotes and random index
        quote_txtID.innerText = `"${quotes[randomIndex].q}"`;
        quote_authorID.innerText = `— ${quotes[randomIndex].a}`;
    } catch (error) {
        quote_txtID.innerText = "Failed to fetch quote.";
        quote_authorID.innerText = ":(";
        console.error(error);
    }
}

    getQuote();
});
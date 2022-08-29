const quoteCOntainer = document.getElementById("qoute-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const newquoteButton = document.getElementById("new-quote");
const loaderani = document.getElementById("loader");

// let apiQuotes = [];

// Showing the Quotes
function newQuotes() {
    loading();
    const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)];
    authorText.textContent = quote.author;

//  checking the quotelenth to determining the style  
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
}   
    quoteText.textContent = quote.text;
    loadComplete();
}

// Get quotes from the API
// async function getQuotes() {
//     const apiUrl = "https://type.fit/api/quotes";
//     try {
//          const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuotes();
//     } catch (error) {
//         // alert("Error occured while loading.....");
//     }
// }

// Tweet Quotes
function tweetQuote() {
    const twitterurl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterurl, '_blank');
}

// Loader show

function loading() {
    loaderani.hidden = false;
    quoteCOntainer.hidden = true;
}

function loadComplete() {
    loaderani.hidden = true;
    quoteCOntainer.hidden = false;
}

// EventLinsterner
newquoteButton.addEventListener('click',newQuotes)
twitterButton.addEventListener('click', tweetQuote);
// onloading the API
// getQuotes();
newQuotes();

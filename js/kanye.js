const loadQuotes = ()=>{
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQuotes(data))
};
const displayQuotes=(quotes)=>{
    const quote= document.getElementById('quote');
    quote.innerText=quotes.quote;
}
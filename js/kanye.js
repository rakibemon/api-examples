const loadQuote = ()=>{
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQuote(data))
};
const displayQuote=(quote)=>{
    const quoteElement= document.getElementById('quote');
    quoteElement.innerHTML=`<b>Quote</b> : ${quote.quote}`;
}
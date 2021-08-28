const loadQuotes=()=>{
    fetch('http://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayQuotes(data))
}

const displayQuotes=(quote)=>{
   const displayQuote=document.getElementById("quote");
   displayQuote.innerText=quote.quote
}
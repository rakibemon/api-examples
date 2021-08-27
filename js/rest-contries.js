const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => displayCountry(data))
}
const displayCountry = (country) => {
    // console.log(country[0].name);
    const countryContainer = document.getElementById('countries-container');
    /* for (const countryDetails of country) {
        const div = document.createElement('div');
        div.innerHTML = `<h3><b> Name:</b> ${countryDetails.name} </h3>
        <img src="${countryDetails.flag}" alt="USA Flag">`
        countryContainer.appendChild(div)
    } */
    country.forEach(countryDetails =>{
        const div = document.createElement('div');
        div.innerHTML=`<h3>Country Name : ${countryDetails.name}</h3>
        <p> Capital : ${countryDetails.capital}</p>
        <button onclick="loadCountryByName('${countryDetails.name}')">Show Details </button>
        `;
        countryContainer.appendChild(div);
        div.classList.add('country');
    })
}
loadCountry();
const loadCountryByName=(names)=>{
const url=`https://restcountries.eu/rest/v2/name/${names}`;
fetch(url)
.then(response => response.json())
.then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails=(country)=>{
    const countryDetailDiv = document.getElementById('country-detail');
    countryDetailDiv.innerHTML=`<h4> Country Name : ${country.name}</h4>
    <p>Population : ${country.population}</p>
    <img width="200px" src="${country.flag}" alt="Flag">
    `;
}
const countries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
countries()

const displayCountries = (countries) => {
    countries.forEach(country => {


        const container = document.getElementById("container");
        const div = document.createElement("div");
        div.classList.add("container")
        div.innerHTML = `
        <h3>Name: ${country.name}</h3> 
        <button onclick="countryDetails('${country.name}')">Details</button>
       `
        container.appendChild(div);

    })
}

const countryDetails = (name) => {

    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesDetails(data[0]))
}

const displayCountriesDetails = (country) => {
    const countriesDetails = document.getElementById("countries-details")
    const div = document.createElement("div");
    countriesDetails.innerHTML = `
        <p>Population: ${country.population}</p> 
        <p>Region: ${country.region}</p>
        <img width="200px" height="150px" src="${country.flag}"/>
        `
    countriesDetails.appendChild(div)


}
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import data from '../../src/data/data.json';

const CountrySearch = () => {
    const [countries, setCountries] = useState<{ name: string; flag: string; region: string; population: number; capital: string }[]>([]);
    
    // Filter the countries based on the search input and region selection
    const filterCountries = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const searchValue = (document.querySelector('input[type="text"]') as HTMLInputElement).value;
        const region = (document.getElementById("region") as HTMLSelectElement).value;

        // Filter the countries based on the search input and region selection
        const filteredCountries = countries.filter((country: { name: string; flag: string; region: string }) => {
            return country.name.toLowerCase().includes(searchValue.toLowerCase()) && (region === "Filter by Region" || country.region === region);
        });

        // Display the filtered countries
        displayCountries(filteredCountries);
    };

    // Display the countries
    const displayCountries = (countries: { name: string; flag: string; population: number; region: string; capital: string }[]) => {
        const countryList = document.getElementsByClassName("country-list")[0];
        if (countryList) {
            countryList.innerHTML = "";
        }

        countries.forEach((country) => {
            const countryElement = document.createElement("div");
            countryElement.className = "country-container";
            countryElement.innerHTML = `
                <div class="country-info">
                    <h3>${country.name}</h3>
                    <span>Population: <p>${country.population}</p></span>
                    <span>Region: <p>${country.region}</p></span>
                    <span>Capital: <p>${country.capital}</p></span>
                </div>
            `;
            const imgElement = document.createElement("img");
            imgElement.src = country.flag;
            imgElement.alt = `${country.name} flag`;

            const linkElement = document.createElement("a");
            linkElement.href = `gatsby-countries/about/${country.name.toLowerCase()}`;
            linkElement.appendChild(imgElement);

            countryElement.insertBefore(linkElement, countryElement.firstChild);

            if (countryList) {
                countryList.appendChild(countryElement);
            }
        });
    };

    // Get all of the countries from the JSON file
    // Assuming data is imported from a JSON file or an API

  // Initialize countries data
  useEffect(() => {
    const initialCountries = data.map((country) => ({
      name: country.name,
      flag: country.flags.png,
      region: country.region,
      population: country.population,
      capital: country.capital || "N/A",
    }));
    setCountries(initialCountries);
    displayCountries(initialCountries);
  }, []);

    return (
        <div>
            <div className="filter-container">
                <div className="search-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder="Search for a country..." onChange={filterCountries} />
                </div>
                <select id="region" onChange={(event) => filterCountries(event as React.ChangeEvent<HTMLSelectElement>)}>
                    <option>Filter by Region</option>
                    <option>Africa</option>
                    <option>Americas</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </select>
            </div>
            <div className="country-list"></div>
        </div>
    );
};

export default CountrySearch;

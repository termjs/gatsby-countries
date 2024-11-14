import * as React from "react";
import { useState } from "react";
import useCountryFilter from "../utils/countryFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const CountryDisplay: React.FC = () => {
    const { filteredCountries, filterCountries } = useCountryFilter();
    const [searchValue, setSearchValue] = useState("");
    const [region, setRegion] = useState("Filter by Region");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);
        filterCountries(value, region);
    };

    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setRegion(value);
        filterCountries(searchValue, value);
    };

    return (
        <div>
            <div className="filter-container">
                <div className="search-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input
                        type="text"
                        placeholder="Search for a country..."
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </div>
                <select value={region} onChange={handleRegionChange}>
                    <option>Filter by Region</option>
                    <option>Africa</option>
                    <option>Americas</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </select>
            </div>
            <div className="country-list">
                {filteredCountries.map((country) => (
                    <div key={country.name} className="country-container">
                        <Link to={`/about/${country.name.toLowerCase()}`}>
                            <img src={country.flag} alt={`${country.name} flag`} />
                        </Link>
                        <div className="country-info">
                            <h3>{country.name}</h3>
                            <span>Population: <p>{country.population.toLocaleString()}</p></span>
                            <span>Region: <p>{country.region}</p></span>
                            <span>Capital: <p>{country.capital}</p></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryDisplay;

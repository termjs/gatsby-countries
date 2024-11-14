import { useState, useEffect } from "react";
import data from '../../src/data/data.json';

interface Country {
    name: string;
    flag: string;
    region: string;
    population: number;
    capital: string;
}

const useCountryFilter = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

    useEffect(() => {
        const initialCountries = data.map((country) => ({
            name: country.name,
            flag: country.flags.png,
            region: country.region,
            population: country.population,
            capital: country.capital || "N/A",
        }));
        setCountries(initialCountries);
        setFilteredCountries(initialCountries);
    }, []);

    const filterCountries = (searchValue: string, region: string) => {
        const filtered = countries.filter((country) => {
            return country.name.toLowerCase().includes(searchValue.toLowerCase()) && (region === "Filter by Region" || country.region === region);
        });
        setFilteredCountries(filtered);
    };

    return { filteredCountries, filterCountries };
};

export default useCountryFilter;

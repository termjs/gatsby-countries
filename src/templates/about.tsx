import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import countryData from "../../src/data/data.json";

interface CountryData {
  name: string;
  nativeName: string;
  population: number;
  topLevelDomain: string;
  region: string;
  subregion: string;
  capital: string;
  borders: string[];
  flags: {
    png: string;
  };
  currencies: {
    name: string;
  }[];
  languages: {
    name: string;
  }[];
}

// Helper function to map country code to full name
const getFullCountryName = (code: string): string => {
  const country = countryData.find((item: { alpha3Code: string; name: string }) => item.alpha3Code === code);
  return country ? country.name : code; // Default to country code if not found
};

const AboutPage: React.FC<{ data: { dataJson: CountryData } }> = ({ data }) => {
  if (!data || !data.dataJson) {
    return <h1>Data not found</h1>;
  }
  const country = data.dataJson;

  return (
    <Layout>
      <main>
        <a className="backButton" href="javascript:history.back()">
          {/* Check if FontAwesomeIcon is loaded, as it may not be available during SSR */}
          {typeof window !== "undefined" && <FontAwesomeIcon icon={faArrowLeft} />}
          Back
        </a>

        <div className="country-about">
          <img src={country.flags.png} alt={`${country.name} flag`} />

          <div className="country-align">
            <h1>{country.name}</h1>
            <div className="country-data-container">
              <div>
                <span>Native Name: <p>{country.nativeName}</p></span>
                <span>Population: <p>{country.population.toLocaleString()}</p></span>
                <span>Region: <p>{country.region}</p></span>
                <span>Sub Region: <p>{country.subregion}</p></span>
                <span>Capital: <p>{country.capital}</p></span>
              </div>

              <div>
                <span>Top Level Domain: <p>{country.topLevelDomain}</p></span>
                <span>Currencies: <p>{country.currencies?.map(currency => currency.name).join(', ') || "N/A"}</p></span>
                <span>Languages: <p>{country.languages?.map(language => language.name).join(', ') || "N/A"}</p></span>
              </div>
            </div>

            <div className="borderTags">
              <span>Border Countries: </span>
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((border: string) => (
                  <a key={border} href={`/about/${getFullCountryName(border).toLowerCase()}`}>
                    {getFullCountryName(border)}
                  </a>
                ))
              ) : (
                <p>No border countries found</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query($name: String!) {
    dataJson(name: { eq: $name }) {
      name
      nativeName
      population
      topLevelDomain
      region
      subregion
      capital
      borders
      flags {
        png
      }
      currencies {
        name
      }
      languages {
        name
      }
    }
  }
`;

export default AboutPage;

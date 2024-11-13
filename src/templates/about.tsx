import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

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
  };
}

const AboutPage: React.FC<{ data: { dataJson: CountryData } }> = ({ data }) => {
  if (!data || !data.dataJson) {
    return <h1>Data not found</h1>;
  }
  const country = data.dataJson;

  return (
    <Layout>
      <main>
        <a className="backButton" href="javascript:history.back()">
          Back
        </a>
        <h1>{country.name}</h1>
        <p>Native Name: {country.nativeName}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Subregion: {country.subregion}</p>
        <p>Capital: {country.capital}</p>
        <p>Borders: {country.borders && country.borders.length > 0 ? country.borders.join(", ") : "None"}</p>
        <p>Top Level Domain: {country.topLevelDomain}</p>
        <img src={country.flags.png} alt={`${country.name} flag`} />
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
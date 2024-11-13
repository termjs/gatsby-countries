import * as React from "react";
import Layout from "../components/layout";
import CountrySearch from "../utils/countryFilter";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <CountrySearch />
      </main>
    </Layout>
  );
};

export default IndexPage;
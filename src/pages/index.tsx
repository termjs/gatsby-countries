import * as React from "react";
import Layout from "../components/layouts/layout";
import CountryDisplay from "../utils/countryDisplay";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <CountryDisplay />
      </main>
    </Layout>
  );
};

export default IndexPage;
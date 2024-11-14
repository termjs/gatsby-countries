import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layouts/layout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="mainFrame">
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code className="codeTag">src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/" className="linkStyle">Go home</Link>.
        </p>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>

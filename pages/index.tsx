import { Fragment } from "react";
import Head from "next/head";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Metal+Mania&family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1>This is the main page</h1>
    </Fragment>
  );
}

export default HomePage;

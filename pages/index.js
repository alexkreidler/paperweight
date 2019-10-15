import React from "react";
import Head from "next/head";
// import Nav from '../components/nav'
import data from "../data/articles/ionosphere.json";

import ReactMarkdown from "react-markdown";

// import "normalize.css";
// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import Header from "../components/Header";
import Article from "../components/Article.js";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/fonts/cmu/Serif/cmun-serif.css"></link>
    </Head>

    {/* <Nav /> */}
    <Header></Header>

    <Article title="A Summary of the Ionosphere" author="Alex Kreidler" body={data.content}></Article>
  </div>
);

export default Home;

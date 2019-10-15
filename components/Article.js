import React from "react";

import unified from "unified";
import markdown from "remark-parse";

import math from "remark-math";
import remark2rehype from "remark-rehype";

import rehype2react from "rehype-react";
import katex from "rehype-katex";

export default function Article({ title, author, body }) {
  return (
    <div className="article">
      <h1 className="title">{title}</h1>
      <p>by {author}</p>
      <div className="content">
        {
          unified()
            .use(markdown) //markdown parser
            .use(math)
            .use(remark2rehype)
            .use(katex)
            .use(rehype2react, { createElement: React.createElement })
            .processSync(body).contents
        }
      </div>
      <style jsx>{`
        .article {
          padding: 4rem;
          padding-top: 0;
          font-family: "Computer Modern Serif", Georgia, serif;
        }
        .article h1 {
            margin-bottom: 0.5rem;
        }
        .article p {
            margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  );
}

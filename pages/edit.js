import React, { useState } from "react";

import Article from "../components/Article";

export default () => {
  const [text, setText] = useState("");

  return (
    <div className="edit">
      <textarea
        className="input"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div className="preview">
        <Article title="bla" author="joe" body={text}></Article>
      </div>
      <style jsx>{`
        .edit {
          display: flex;
        }
        .input,
        .preview {
          flex: 0 0 auto;
          width: 50%;
          height: 100vh;
        }
        .input {
            padding: 1rem;
        }
        .preview {
          overflow: scroll;
        }
      `}</style>
    </div>
  );
};

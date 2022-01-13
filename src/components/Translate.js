import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabis",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

function Translate() {
  const [langauge, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Text</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <Dropdown
        selected={langauge}
        onSelectedChange={setLanguage}
        options={options}
        label="Select a Language"
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={langauge} />
    </div>
  );
}

export default Translate;

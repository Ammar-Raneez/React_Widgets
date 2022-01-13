import React, { useState } from "react";
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

  return (
    <div>
      <Dropdown
        selected={langauge}
        onSelectedChange={setLanguage}
        options={options}
        label="Select a Language"
      />
    </div>
  );
}

export default Translate;

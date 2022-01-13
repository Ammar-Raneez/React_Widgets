import React, { useEffect } from "react";

function Convert({ language, text }) {
  useEffect(() => {
    console.log("New lang or text");
  }, [language, text]);

  return <div></div>;
}

export default Convert;

import React from "react";

// eslint-disable-next-line no-unused-vars
import Accordion from "./components/Accordion";
// eslint-disable-next-line no-unused-vars
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// eslint-disable-next-line no-unused-vars
const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade Of Blue",
    value: "Blue",
  },
];

const App = () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};
export default App;

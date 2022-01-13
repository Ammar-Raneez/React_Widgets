import React, { useEffect, useRef, useState } from "react";

function Dropdown({ options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = document.body.addEventListener(
      "click",
      (event) => {
        // if the click was from an element within our dropdown don't set
        if (ref.current.contains(event.target)) {
          return;
        }

        setOpen(false);
      },
      {
        capture: true,
      }
    );

    // Cleanup runs when this useEffect is gonna run the second time, as well as when this component is destroyed
    // Remove this event listener once the dropdown is completely removed.
    return () => {
      document.removeEventListener("click", onBodyClick, { capture: true });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        onClick={() => onSelectedChange(option)}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

// event bubbling --> the DOM listens to an event and passes that event up the DOM's elements, calling any
// exisiting onClick events, all way to the beginning <body> tag. Therefore, clicking on an option
// from the dropdown bubbles that event to the div.dropdown itself, which calls its click function too

// event calling order -> direct addEventListener -> react listeners (from child upwards)

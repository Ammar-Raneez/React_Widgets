import React from "react";

function Link({ className, href, children }) {
  const onClick = (event) => {
    // when we hold ctrl and click it generally opens new tab with url
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // prevent page refresh on click
    event.preventDefault();

    // Update the url to link
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

export default Link;

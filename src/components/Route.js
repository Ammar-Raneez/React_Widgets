const Route = ({ path, children }) => {
  // children prop holds the child components
  return window.location.pathname === path ? children : null;
};

export default Route;

import { useState } from "react";
import store from "./store";
import PropTypes from 'prop-types';

export default function GlobalStore({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeTheme = () => setIsDarkMode(!isDarkMode);

  const INITIAL_STATE = {
    isDarkMode,
    changeTheme,
  };

  return (
    <store.Provider value={ INITIAL_STATE }>
      { children }
    </store.Provider>
  );
}

GlobalStore.propTypes = {
  children: PropTypes.node.isRequired,
}

import { useState } from "react";
import store from "./store";
import PropTypes from 'prop-types';

export default function GlobalStore({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [currentLang, setCurrentLang] = useState();

  const changeTheme = () => setIsDarkMode(!isDarkMode);
  const changeLanguage = () => setIsEnglish(!isEnglish);

  const INITIAL_STATE = {
    isDarkMode,
    changeTheme,
    isEnglish,
    changeLanguage,
    currentLang,
    setCurrentLang,
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

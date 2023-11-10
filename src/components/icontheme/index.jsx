import { useContext } from "react";
import { IconThemeContainer } from "./iconThemeStyle";
import iconDarkMode from "../../assets/iconDarkMode.svg";
import iconLightMode from "../../assets/iconLightMode.svg";
import store from "../../context/store";

export default function IconTheme() {
  const { isDarkMode, changeTheme } = useContext(store);

  const icon = isDarkMode ? iconLightMode : iconDarkMode;

  return (
    <IconThemeContainer>
      <img src={ icon } alt="" onClick={ () => changeTheme() }/>
    </IconThemeContainer>
  );
}

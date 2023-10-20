import { useState } from "react";
import iconDarkMode from "../../assets/iconDarkMode.svg";
import iconLightMode from "../../assets/iconLightMode.svg";
import { IconThemeContainer } from "./iconThemeStyle";

export default function IconTheme() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => setIsDark(!isDark);

  const icon = isDark ? iconLightMode : iconDarkMode;
  return (
    <IconThemeContainer>
      <img src={ icon } alt="" onClick={ () => handleClick() }/>
    </IconThemeContainer>
  );
}

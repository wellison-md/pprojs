import { useContext } from "react";
import { Text } from "./bioStyle";
import store from "../../context/store";

export default function Bio() {
  const { currentLang } = useContext(store);

  return (
    <Text>
      { currentLang.pages.home.bio }
    </Text>
  );
}

import { useContext, useEffect } from "react";
import { HeaderContainer } from "./headerStyle";
import Flex from "../common/flex";
import IconLanguages from "../iconLanguages";
import IconTheme from "../icontheme";
import store from "../../context/store";
import EN_US from "../../locale/enUs";
import PT_BR from "../../locale/ptBr";

export default function Header() {
  const { isEnglish, setCurrentLang } = useContext(store);

  useEffect(() => {
    const lang = isEnglish ? EN_US : PT_BR;
    setCurrentLang(lang);

  }, [isEnglish, setCurrentLang]);

  return (
    <>
      <HeaderContainer>
        <Flex $h="end">
          <IconTheme />
          <IconLanguages />
        </Flex>
      </HeaderContainer>
    </>
  );
}

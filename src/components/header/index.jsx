import Flex from "../common/flex";
import IconLanguages from "../iconLanguages";
import iconbr from "../../assets/iconbr.svg";
import iconus from "../../assets/iconus.svg";
import IconTheme from "../icontheme";
import { HeaderContainer } from "./headerStyle";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Flex $h="end">
          <IconTheme />
          <IconLanguages image={ iconbr } />
          <IconLanguages image={ iconus } />
        </Flex>
      </HeaderContainer>
    </>
  );
}

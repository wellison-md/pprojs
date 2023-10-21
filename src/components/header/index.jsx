import Flex from "../common/flex";
import IconLanguages from "../iconLanguages";
import IconTheme from "../icontheme";
import { HeaderContainer } from "./headerStyle";

export default function Header() {
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

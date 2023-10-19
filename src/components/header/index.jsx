import Flex from "../common/flex";
import IconLanguages from "../iconLanguages";
import iconbr from "../../assets/iconbr.svg";
import iconus from "../../assets/iconus.svg";
import IconTheme from "../icontheme";

export default function Header() {
  return (
    <>
      <header>
        <Flex $h="end">
          <IconTheme />
          <IconLanguages image={ iconbr } />
          <IconLanguages image={ iconus } />
        </Flex>
      </header>
    </>
  );
}

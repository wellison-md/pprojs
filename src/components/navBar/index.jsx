import Flex from "../common/flex";
import { NavBarcontainer, NavButton } from "./navBarStyle";

export default function NavBar() {
  return (
    <NavBarcontainer>
      <Flex $h="end">
        <NavButton $isActive>início</NavButton>
        <NavButton>contato</NavButton>
        <NavButton>projetos</NavButton>
        <NavButton>sobre</NavButton>
      </Flex>
    </NavBarcontainer>
  );
}

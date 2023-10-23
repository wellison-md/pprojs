import { useContext } from "react";
import Flex from "../common/flex";
import { NavBarcontainer, NavButton } from "./navBarStyle";
import store from "../../context/store";

export default function NavBar() {
  const { currentLang } = useContext(store);

  return (
    <NavBarcontainer>
      <Flex $h="end">
        <NavButton $isActive>{ currentLang?.pages?.home?.navbar?.label1 }</NavButton>
        <NavButton>{ currentLang?.pages?.home?.navbar?.label2 }</NavButton>
        <NavButton>{ currentLang?.pages?.home?.navbar?.label3 }</NavButton>
        <NavButton>{ currentLang?.pages?.home?.navbar?.label4 }</NavButton>
      </Flex>
    </NavBarcontainer>
  );
}

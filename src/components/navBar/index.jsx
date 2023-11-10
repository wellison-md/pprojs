import { useContext } from "react";
import Flex from "../common/flex";
import { NavBarcontainer, NavButton } from "./navBarStyle";
import store from "../../context/store";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { currentLang } = useContext(store);
  const navigate = useNavigate();

  return (
    <NavBarcontainer>
      <Flex $h="end">
        <NavButton onClick={ () => navigate('/')} $isActive>
          { currentLang?.pages?.home?.navbar?.label1 }
        </NavButton>

        <NavButton onClick={ () => navigate('/contactme')}>
          { currentLang?.pages?.home?.navbar?.label2 }
        </NavButton>

        <NavButton onClick={ () => navigate('/projects')}>
          { currentLang?.pages?.home?.navbar?.label3 }
        </NavButton>

        <NavButton onClick={ () => navigate('/about')}>
          { currentLang?.pages?.home?.navbar?.label4 }
        </NavButton>
      </Flex>
    </NavBarcontainer>
  );
}

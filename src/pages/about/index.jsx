import { useContext } from "react";
import Spacer from "../../components/common/spacer";
import Header from "../../components/header";
import NavBar from "../../components/navBar";
import store from "../../context/store";

export default function About() {
  const { currentLang } = useContext(store);

  return (
    <>
      <Header />
      <Spacer $s="48px" />
      <NavBar />
      <Spacer $s="56px" />
      <h1>{ currentLang?.pages?.about?.headline }</h1>
    </>
  );
}

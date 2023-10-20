import Flex from "../../components/common/flex";
import Spacer from "../../components/common/spacer";
import illustration1 from "../../assets/ilustration1.svg";
import logowmd from "../../assets/logowmd.svg";
import HeroLabel from "../../components/heroLabel";
import Header from "../../components/header";
import NavBar from "../../components/navBar";
import Bio from "../../components/bio";
import Button from "../../components/common/button";
import Bg from "../../components/bg";
import Image from "../../components/common/Image";

export default function Home() {
  return (
    <>
      <Bg />
      <Header />
      <Spacer $s="48px" />
      <NavBar />
      <Spacer $s="56px" />

      <Flex $v="flex-start">
        <section>
          <Flex>
            <img width="110px" src={logowmd} alt="logo" />

            <section>
              <HeroLabel
                title="Wellison M. Dias"
                subTitle="<Desenvolvedor Web/>"
              ></HeroLabel>
            </section>
          </Flex>

          <Bio />
          <Button $label="Projetos" />
        </section>

        <section>
          <Image width="750px" src={ illustration1 } alt="illustration" />
        </section>
      </Flex>
    </>
  );
}

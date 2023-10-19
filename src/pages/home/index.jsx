import Flex from "../../components/common/flex";
import Spacer from "../../components/common/spacer";
import illustration1 from "../../assets/ilustration1.png";
import logowmd from "../../assets/logowmd.svg";
import HeroLabel from "../../components/heroLabel";
import Header from "../../components/header";
import NavBar from "../../components/navBar";

export default function Home() {
  return (
    <>
      <Header />
      <Spacer $s="36px"/>
      <NavBar />
      <Spacer $s="36px"/>

      <Flex>
      <section>
        <Flex>
          <img width="100px" src={ logowmd } alt="logo" />

          <section>
           <HeroLabel
              title="Wellison M. Dias"
              subTitle="<Desenvolvedor Web/>"
            ></HeroLabel>
          </section>

        </Flex>
        <p>
          Olá! sou o Wellison /ué-li-som/ programador web apaixonado por transformar ideias em código e criar soluções incríveis com software. Estou pronto para levar seus projetos para o próximo nível. Se você está em busca de websites funcionais, elegantes e totalmente responsivos, você veio ao lugar certo. Dê uma olhada nos meus projetos e descubra como posso fazer a diferença para o seu próximo projeto web

        </p>
      </section>

      <section>
        <img src={ illustration1 } alt="illustration"/>
      </section>

      </Flex>

    </>
  );
}

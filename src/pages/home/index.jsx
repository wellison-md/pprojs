import Flex from "../../components/common/flex";
import Spacer from "../../components/common/spacer";

export default function Home() {
  return (
    <>
      <header>
        <Flex $h="end">
          <button>Light-mode</button>
          <button>PT-BR</button>
          <button>EN-US</button>
        </Flex>
        <Spacer />
        <h1>Hello world</h1>
      </header>

    </>
  );
}

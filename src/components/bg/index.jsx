import bubble1 from '../../assets/bubble1.svg';
import bubble2 from '../../assets/bubble2.svg';
import { Bubble1, Bubble2 } from './bgStyle';

export default function Bg() {
  return (
    <>
      <Bubble1>
        <img src={ bubble1 } alt="" />
      </Bubble1>

      <Bubble2>
        <img src={ bubble2 } alt="" />
      </Bubble2>
    </>
  );
}

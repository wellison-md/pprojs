import styled from "styled-components";

export const Bubble1 = styled.div`
  position: absolute;
  top: -200px;
  left: -300px;
  z-index: -99;
  filter:blur(150px);
  opacity: 0.3;
`;

export const Bubble2 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99;
  filter:blur(200px);
  opacity: 0.85;
`;
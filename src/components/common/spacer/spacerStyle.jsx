import styled from "styled-components";

export const SpacerContainer = styled.div`
  width: 100vw;
  height: ${(props) => props.$s || '24px' };
`;

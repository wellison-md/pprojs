import styled from "styled-components";

export const SpacerContainer = styled.div`
  width: 100%;
  height: ${(props) => props.$s || '24px' };
`;

import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${(props) => props.$v || 'center' };
  justify-content: ${(props) => props.$h || 'center' };
`;

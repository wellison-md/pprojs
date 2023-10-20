import styled from "styled-components";

export const FlexContainer = styled.div`
  align-items: ${(props) => props.$v || 'center' };
  display: flex;
  flex-direction: ${(props) => props.$col || 'row' };
  flex-wrap: wrap;
  justify-content: ${(props) => props.$h || 'center' };
`;

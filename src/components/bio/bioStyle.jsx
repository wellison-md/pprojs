import styled from "styled-components";

export const Text = styled.p`
  font-size: 22px;
  line-height: 1.5;
  margin: 36px 0;
  max-width: 700px;
  text-align: justify;
  text-indent: 36px;

  @media(max-width: ${({ theme }) => theme.screens.lg }) {
    font-size: 16px;
    max-width: 500px;
    }
`;

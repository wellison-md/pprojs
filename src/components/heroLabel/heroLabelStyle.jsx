import styled from "styled-components";

export const HeroLabelContainer = styled.div`
  & h1 {
    font-size: ${({ theme }) => theme.sizes.xxxl };
    font-family: 'Inter', sans-serif;
    color: black;
    margin: 0;
    margin-left: 20px;
    padding: 0;
  }

  & h3 {
    font-size: ${({ theme }) => theme.sizes.xxl };
    font-family: 'Inter', sans-serif;
    font-style: italic;
    color: ${({ theme }) => theme.colors.text1 };
    padding: 0;
    margin: 0;
    margin-top: -15px;
    margin-left: 20px;
  }
`;

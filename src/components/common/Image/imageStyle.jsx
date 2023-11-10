import styled from "styled-components";

export const ImgContainer = styled.img`
  width: ${(props) => props.width || '200px' };

  @media(max-width: ${({ theme }) => theme.screens.lg }) {
    width: 550px;
  }
`;

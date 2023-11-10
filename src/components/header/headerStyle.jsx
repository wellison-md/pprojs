import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.main };
  height: ${({ theme }) => theme.sizes.xxl };
  max-height: ${({ theme }) => theme.sizes.xxl };
  padding-right: ${({ theme }) => theme.sizes.xxl };
`;

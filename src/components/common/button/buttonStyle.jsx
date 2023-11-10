import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) =>  theme.colors.secondary };
  color: white;
  padding: 16px 56px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  transition: 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

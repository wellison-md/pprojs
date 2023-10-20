import styled from "styled-components";

export const NavBarcontainer = styled.div`
  padding-right: 200px;
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: ${(props) => props.isActive ?
    `5px solid ${props.theme.colors.secondary}` : 'none'};
  border-radius: 8px 8px 0 0;
  font-size: 20px;
  margin: 0 8px;
  padding: 8px;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary };
    border-radius: 8px;
    color: white;
  }
`;

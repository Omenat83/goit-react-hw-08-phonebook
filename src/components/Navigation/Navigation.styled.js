import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 24px;

  &.active {
    color: rgba(43, 153, 126);
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-left: 30px;
`;

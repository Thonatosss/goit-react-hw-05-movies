import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #1e2022;
  margin-bottom: 50px;
`;
const NavigationLink = styled(NavLink)`
  font-size: 30px;
  margin-right: 50px;
  text-decoration: none;
  color: white;

`;
export { Header, NavigationLink };

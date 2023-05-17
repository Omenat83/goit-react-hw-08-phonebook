import { useAuth } from 'Redux/Auth/selectors';
import { HeaderLink, HeaderNav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderNav>
      <HeaderLink to="/">Home</HeaderLink>
      {isLoggedIn && <HeaderLink to="/contacts">Contacts</HeaderLink>}
    </HeaderNav>
  );
};

import { logOut } from 'Redux/Auth/operations';
import { useAuth } from 'Redux/Auth/selectors';
import { useDispatch } from 'react-redux';
import { Button, UserHello, UserMenuDiv, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuDiv>
      <UserHello>Welcome, <UserName>{user.name}</UserName></UserHello>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuDiv>
  );
};

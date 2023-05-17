import { AuthLink, AuthMenu } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthMenu>
      <AuthLink to="/register">
        Register
      </AuthLink>
      <AuthLink to="/login">
        Log In
      </AuthLink>
    </AuthMenu>
  );
};

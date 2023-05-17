import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container, Title } from './LoginPage.styled';

export default function LoginPage() {
  return (
    <Container>
      <Title>Login</Title>
      <LoginForm />
    </Container>
  );
}

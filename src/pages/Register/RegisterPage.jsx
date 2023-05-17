import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Title, Container } from './RegisterPage.styled';

export default function Register() {
  return (
    <Container>
      <Title>Registration</Title>
      <RegisterForm />
    </Container>
  );
}

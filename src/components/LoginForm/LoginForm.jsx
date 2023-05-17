import { logIn } from 'Redux/Auth/operations';
import { useDispatch } from 'react-redux';
import {
  Form,
  FormLabel,
  FormInput,
  FormItem,
  FormButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormItem>
        <FormLabel htmlFor="logEmail">Email</FormLabel>
        <FormInput id="logEmail" type="email" name="email" />
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="logPassword">Password</FormLabel>
        <FormInput id="logPassword" type="password" name="password" />
      </FormItem>
      <FormButton type="submit">Log In</FormButton>
    </Form>
  );
};

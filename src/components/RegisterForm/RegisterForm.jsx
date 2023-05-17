import { register } from 'Redux/Auth/operations';
import { useDispatch } from 'react-redux';
import {
  Form,
  FormLabel,
  FormInput,
  FormItem,
  FormButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem>
        <FormLabel htmlFor="regName">UserName</FormLabel>
        <FormInput id="regName" type="text" name="name" />
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="regEmail">Email</FormLabel>
        <FormInput id="regEmail" type="email" name="email" />
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="regPassword">Password</FormLabel>
        <FormInput id="regPassword" type="password" name="password" />
      </FormItem>
      <FormButton type="submit">Register</FormButton>
    </Form>
  );
};

import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "./SignupElements";

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">EVIMERIA</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign Up </FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput htmlFor="name" required />
              <FormLabel htmlFor="for">Phone Number</FormLabel>
              <FormInput htmlFor="phone" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput htmlFor="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput htmlFor="password" required />
              <FormButton type="submit">Continue</FormButton>
              
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
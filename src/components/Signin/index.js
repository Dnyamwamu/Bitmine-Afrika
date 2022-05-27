import React from "react"
import {
  FormButton,
  FormH1,
  FormInput,
  FormWrap,
  Container,
  Icon,
  FormContent,
  Form,
  FormLabel,
  Text,
} from "./SigninElements"

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">bitmine Afrika</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to Bitmine</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn

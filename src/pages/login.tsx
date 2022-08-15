import { Button, Flex, Heading, Spacer, Spinner } from "@chakra-ui/react";

import { Link } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { AuthenticationInput, useLoginMutation } from "../generated/graphql";
import { createURQLClient } from "../util/createURQLClient";
import { toErrorMap } from "../util/toErrorMap";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const initialValues: AuthenticationInput = { email: "", password: "" };
  const router = useRouter();

  const [{ fetching, error }, login] = useLoginMutation();
  if (fetching) {
    return <Spinner />;
  }
  if (error) {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }

  return (
    <Wrapper variant="small">
      <Heading mb={5}>Login</Heading>
      <Formik<AuthenticationInput>
        initialValues={initialValues}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            input: {
              email: values.email,
              password: values.password,
            },
          });

          if (response.data?.login?.errors) {
            setErrors(toErrorMap(response.data?.login.errors));
          } else if (response.data?.login?.user) {
            router.push("/");
          }
        }}
      >
        <Form>
          <Flex gap={2} flexDir={"column"}>
            <InputField label="Email Address" name="email" type={"email"} />
            <InputField label="Password" name="password" type={"password"} />
          </Flex>
          <Flex>
            <NextLink href="/forgot-password">
              <Link color={"gray"}>Forgot your password?</Link>
            </NextLink>
            <Spacer />
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </Flex>
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createURQLClient)(Login);

import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { createURQLClient } from "../util/createURQLClient";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Field, Form, Formik } from "formik";
import { Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useIsUsernameAvailableQuery } from "../generated/graphql";
import { ValidationError } from "yup";

interface SetUsernameProps {}

export const SetUsername: React.FC<SetUsernameProps> = ({}) => {
  const [username, setUsername] = useState<string>("");
  const initialValues: any = { username };

  const [{ data, fetching, error }] = useIsUsernameAvailableQuery({
    variables: {
      username,
    },
  });

  const validateUsername = () => {
    let error;
    if (!data?.isUsernameAvailable) {
      error = "Username is taken";
    }
    return error;
  };

  return (
    <>
      <Formik onSubmit={() => {}} initialValues={initialValues}>
        {({ isSubmitting, isValidating }) => (
          <Form>
            <Button type="submit" isDisabled={isValidating}>
              Save
            </Button>
          </Form>
        )}
      </Formik>

      {username}
      <br />
      {data && data.isUsernameAvailable ? "yes" : "no"}
    </>
  );
};
const EditProfile: NextPage = ({}) => {
  return (
    <Layout>
      <SetUsername />
    </Layout>
  );
};

export default withUrqlClient(createURQLClient)(EditProfile);

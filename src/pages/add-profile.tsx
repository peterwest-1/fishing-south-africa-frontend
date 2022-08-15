import { Button, Input } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import Image from "next/image";
import { useState } from "react";
import { InputField } from "../components/InputField";
import Layout from "../components/Layout";
import { useAddProfileInformationMutation } from "../generated/graphql";
import { createURQLClient } from "../util/createURQLClient";

const AddProfile: NextPage = ({}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [, addProfileInformation] = useAddProfileInformationMutation();

  const uploadHandler = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: selectedFile,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const onFormSubmit = async (values: any) => {
    // simplified for clarity
    // 1) send data to backend (addItemMutation(values, signedurl.filename) )
    // 2) upload file to google (uploadHandler(signedurl.url))
    // 3) handle errors
    // 4) on success close form modal
  };

  return (
    <Layout>
      <Formik
        initialValues={{ username: "", file: null }}
        onSubmit={async (values, { setErrors }) => {
          const response = await addProfileInformation({
            username: values.username,
            //@ts-ignore
            filename: values.file.name,
          });
          //TODO: Handle this thin
          //@ts-ignore
          await uploadHandler(response.data?.addProfileInformation.signedURL);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <InputField name="username" label="Username" />
            <Input
              id="file"
              name="file"
              type="file"
              accept="image/*"
              required
              onChange={(event: any) => {
                setSelectedFile(event.target.files[0]);
                setFieldValue("file", event.currentTarget.files[0]);
              }}
            />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createURQLClient)(AddProfile);

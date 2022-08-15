import { Button, Input } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useFishImageUploadUrlMutation } from "../../generated/graphql";

interface AddFishImageProps {
  onNext: () => void;
  fishId: string;
}

export const AddFishImage: React.FC<AddFishImageProps> = ({ fishId, onNext }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [, fishImageUploadUrl] = useFishImageUploadUrlMutation();

  const uploadHandler = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: selectedFile,
      });
      return response;
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
    <Formik
      initialValues={{ file: null }}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        setSubmitting(true);
        const response = await fishImageUploadUrl({ fishCaughtId: fishId });

        if (response.error) {
          console.log(response.error);
        }

        if (response.data?.fishImageUploadURL.error) {
          console.log(response.data?.fishImageUploadURL.error);
        }

        // const response = await addProfileInformation({
        //   username: values.username,
        //   //@ts-ignore
        //   filename: values.file.name,
        // });
        //TODO: Handle this thin
        //@ts-ignore
        const uploadResponse = await uploadHandler(response.data?.fishImageUploadURL.signedURL);
        console.log(uploadResponse);
        if (uploadResponse?.ok) {
          onNext();
        }
        setSubmitting(false);
      }}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form>
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

          <Button type="submit" isLoading={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

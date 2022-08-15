import {
  ModalOverlay,
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Input,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useIsUsernameAvailableQuery } from "../../generated/graphql";
import { InputField } from "../InputField";

const SetUsername = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [username, setUsername] = useState<string>("");
  const [{ data, fetching, error }] = useIsUsernameAvailableQuery({
    variables: {
      username,
    },
  });

  if (fetching) {
    console.log(fetching);
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <Button
        onClick={() => {
          onOpen();
        }}
      >
        Set Username
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent>
          <ModalHeader>Set Username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{ username: "sdsd" }}
              onSubmit={(values, { setErrors }) => {
                console.log("submitting", values.username);
                onClose();
              }}
            >
              <Form>
                <Input
                  id="username"
                  name="username"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setUsername(e.target.value);
                  }}
                />
                <Button type="submit">Submit</Button>
              </Form>
            </Formik>
            {data?.isUsernameAvailable ? "Available!" : "Username is taken"}
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default SetUsername;

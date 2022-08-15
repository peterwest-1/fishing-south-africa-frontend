import { Button, Flex, Input, ListIcon, Spacer } from "@chakra-ui/react";
import { Form } from "formik";
import { InputField } from "../InputField";

export const FishCaughtForm = ({}) => {
  return (
    <Form>
      <Flex flexDir={"column"} gap={2}>
        <InputField name="species" label="Name/Species" helper="" />
        <InputField
          name="weight"
          label="Weight"
          type={"number"}
          helper="The weight of the fish, currently stored in kilogram"
        />
        <InputField
          name="length"
          label="Length"
          type={"number"}
          helper="The length of the fish, currently stored in centimeters"
        />
        <InputField name="location" label="Location" />
        <InputField name="notes" label="Notes" type={"text"} />
        <Input type={"file"}></Input>
        <Flex>
          <Spacer />
          <Button type="submit">Save</Button>
        </Flex>
      </Flex>
    </Form>
  );
};

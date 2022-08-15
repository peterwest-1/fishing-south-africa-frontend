import { Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Spacer, Textarea } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useCreateFishCaughtMutation } from "../../generated/graphql";
import { toErrorMap } from "../../util/toErrorMap";
import { InputField } from "../InputField";

interface AddFishBasicProps {
  onNext: () => void;
  onSetID: (value: string) => void;
}

export const AddFishBasic: React.FC<AddFishBasicProps> = ({ onNext, onSetID }) => {
  const initialValues: any = { species: "" };
  const router = useRouter();

  const [, createFishCaught] = useCreateFishCaughtMutation();

  return (
    <>
      <Heading mb={5}>Add Fish Caught</Heading>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setErrors }) => {
          const response = await createFishCaught({
            input: {
              ...values,
            },
          });
          if (response.error) {
            //TODO: Correctly handle error in fishcaught creation
            console.error(response.error);
          }
          if (response.data?.createFishCaught.errors) {
            console.log(response.data?.createFishCaught.errors);
          }

          if (response.data?.createFishCaught.fishCaught) {
            // router.push(`/fish/${response.data.createFishCaught.id}`);
            onSetID(response.data?.createFishCaught.fishCaught.id);
            onNext();
          }
        }}
      >
        {({ isValid }) => (
          <Form>
            <Flex flexDir={"column"} gap={2}>
              {/* TODO: Add autocomplete  */}
              <InputField name="species" label="Name/Species" helper="" isRequired />
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
              {/* TODO: Add GoogleMaps or equiv  */}
              <InputField name="location" label="Location" />

              <FormControl>
                <FormLabel>Notes</FormLabel>
                <Textarea id="notes" />
                <FormHelperText>Any notes on the fish you Caught</FormHelperText>
              </FormControl>

              <Flex>
                <Spacer />

                <Button isDisabled={!isValid} type="submit">
                  Save
                </Button>
              </Flex>
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  );
};

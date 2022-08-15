import { Heading } from "@chakra-ui/react";
import { Formik } from "formik";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { FishCaughtForm } from "../components/forms/FishCaughtForm";
import Layout from "../components/Layout";
import { useCreateFishCaughtMutation } from "../generated/graphql";
import { createURQLClient } from "../util/createURQLClient";

const AddFish: NextPage = ({}) => {
  const initialValues: any = {};
  const router = useRouter();

  const [, createFishCaught] = useCreateFishCaughtMutation();
  return (
    <Layout>
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
            console.error(response.error);
          }
          if (response.data?.createFishCaught) {
            router.push(`/fish/${response.data.createFishCaught.fishCaught?.id}`);
          }
        }}
      >
        <FishCaughtForm />
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createURQLClient)(AddFish);

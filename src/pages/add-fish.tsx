import { Flex, Button, Box } from "@chakra-ui/react";
import { useSteps, Steps, Step } from "chakra-ui-steps";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useState } from "react";
import { AddFishBasic } from "../components/add-fish/AddFishBasic";
import { AddFishImage } from "../components/add-fish/AddFishImage";
import Layout from "../components/Layout";
import LinkButton from "../components/LinkButton";
import { Wrapper } from "../components/Wrapper";
import { createURQLClient } from "../util/createURQLClient";

const AddFishNew: NextPage = ({}) => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const [fishCaughtID, setFishCaughtID] = useState<string>("-1");

  const steps = [
    {
      label: "Add Fish Information",
      content: (
        <Box mt={5}>
          <Wrapper variant="small">
            <AddFishBasic
              onNext={nextStep}
              onSetID={(id: string) => {
                setFishCaughtID(id);
              }}
            />
          </Wrapper>
        </Box>
      ),
    },
    {
      label: "Add Image",
      content: (
        <Box mt={5}>
          <Wrapper variant="small">
            <AddFishImage onNext={nextStep} fishId={fishCaughtID} />
          </Wrapper>
        </Box>
      ),
    },
    {
      label: "Review",
      content: (
        <Flex mt={5} justify={"center"}>
          <LinkButton link={`/fish/${fishCaughtID}`}>View</LinkButton>
        </Flex>
      ),
    },
  ];

  return (
    <Layout variant="regular">
      <Flex flexDir="column" width="100%">
        <Steps activeStep={activeStep} colorScheme="teal">
          {steps.map(({ label, content }) => (
            <Step label={label} key={label}>
              {content}
            </Step>
          ))}
        </Steps>
      </Flex>
    </Layout>
  );
};

export default withUrqlClient(createURQLClient)(AddFishNew);

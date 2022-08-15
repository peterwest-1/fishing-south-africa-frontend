import { Heading, Spinner, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import Layout from "../../components/Layout";
import { useGetFish } from "../../hooks/useGetFish";
import { createURQLClient } from "../../util/createURQLClient";
import Image from "next/image";

const Fish: NextPage = ({}) => {
  const [{ data, fetching, error }] = useGetFish();

  if (fetching) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;
  return (
    <Layout>
      <Heading>{data && data.fish?.species}</Heading>
      <Image
        src="https://storage.googleapis.com/fishing-pw.appspot.com/516a5a70-b9fb-4274-a483-771ca8ccc6af"
        alt={"Fish image"}
        height={90 * 4}
        width={160 * 4}
      />
    </Layout>
  );
};

export default withUrqlClient(createURQLClient)(Fish);

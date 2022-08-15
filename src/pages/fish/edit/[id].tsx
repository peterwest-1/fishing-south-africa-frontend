import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import Layout from "../../../components/Layout";
import { createURQLClient } from "../../../util/createURQLClient";

const EditFish: NextPage = ({}) => {
  return <Layout></Layout>;
};

export default withUrqlClient(createURQLClient)(EditFish);

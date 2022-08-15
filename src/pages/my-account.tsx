import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import Layout from "../components/Layout";
import { useMeQuery } from "../generated/graphql";
import { useIsAuthenticated } from "../hooks/useIsAuthenticated";
import { createURQLClient } from "../util/createURQLClient";

const MyAccount: NextPage = ({}) => {
  useIsAuthenticated();
  const [{ data, fetching, error }] = useMeQuery();
  return <Layout></Layout>;
};

export default withUrqlClient(createURQLClient)(MyAccount);

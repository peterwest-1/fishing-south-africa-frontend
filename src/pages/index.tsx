import type { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import Head from "next/head";
import { FishCaughtCard } from "../components/FishCaughtCard";
import { Layout } from "../components/Layout";
import { APP_NAME } from "../constants";
import { useFishesQuery } from "../generated/graphql";
import { createURQLClient } from "../util/createURQLClient";

const Home: NextPage = () => {
  const [{ data, fetching, error }] = useFishesQuery();
  return (
    <Layout>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_NAME} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {data &&
          data.fishes.map((fish, idx) => {
            return <FishCaughtCard key={idx} fish={fish} />;
          })}
      </main>
    </Layout>
  );
};

export default withUrqlClient(createURQLClient, { ssr: true })(Home);

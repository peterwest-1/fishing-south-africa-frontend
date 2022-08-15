import { useRouter } from "next/router";

export const useGetIDFromURL = () => {
  const router = useRouter();
  return typeof router.query.id === "string" ? router.query.id : "-1";
};

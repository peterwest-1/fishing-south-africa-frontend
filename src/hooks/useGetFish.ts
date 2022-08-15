import { useFishQuery } from "../generated/graphql";
import { useGetIDFromURL } from "./useGetIDFromURL";

export const useGetFish = () => {
  const id = useGetIDFromURL();

  return useFishQuery({
    pause: id === "-1",
    variables: {
      fishId: id,
    },
  });
};

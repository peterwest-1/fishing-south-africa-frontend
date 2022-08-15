import { Badge, Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { FishCaught } from "../generated/graphql";
import LinkButton from "./LinkButton";
interface FishCaughtCardProps {
  fish: Partial<FishCaught>;
}

export const FishCaughtCard: React.FC<FishCaughtCardProps> = ({ fish }) => {
  return (
    <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src="https://storage.googleapis.com/fishing-pw.appspot.com/516a5a70-b9fb-4274-a483-771ca8ccc6af"
        alt={"Fish image"}
        height={90 * 4}
        width={160 * 4}
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Fly
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            1 day ago
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {fish.species}
        </Box>

        <Box>
          {fish.weight}
          <Box as="span" color="gray.600" fontSize="sm">
            / kgs
          </Box>
        </Box>
        <Flex>
          <Spacer />
          <LinkButton link={`/fish/${fish.id}`}>View</LinkButton>
        </Flex>
      </Box>
    </Box>
  );
};

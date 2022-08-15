import { Box, Flex, Heading, Link } from "@chakra-ui/react";

import NextLink from "next/link";
import { APP_NAME } from "../constants";
import Authentication from "./Authentication";
import LinkButton from "./LinkButton";
import ProfileMenu from "./ProfileMenu";
const NavigationBar = ({}) => {
  return (
    <Flex zIndex={1} position="sticky" bgColor={"white"} top={0} p={4}>
      <Flex flex={1} m="auto" align="center" maxW={1500}>
        <NextLink href="/">
          <Link>
            <Heading>{APP_NAME}</Heading>
          </Link>
        </NextLink>
        <Box ml={"auto"}>
          <Flex marginTop="10px" alignItems="center" padding="5px">
            {/* <Authentication /> */}
            <LinkButton link="add-fish">Add Fish</LinkButton>
            <ProfileMenu />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavigationBar;

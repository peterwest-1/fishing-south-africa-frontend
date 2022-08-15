import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { MenuLink } from "./MenuLink";

const ProfileMenu = ({}) => {
  const router = useRouter();
  const [{ data, fetching, error }] = useMeQuery();
  const [, logout] = useLogoutMutation();
  const handleLogout = async () => {
    await logout();
  };

  const helpSection = (
    <MenuGroup title="Help">
      <MenuLink link="/privacy-policy">Privacy Policy</MenuLink>
      <MenuLink link="/terms-of-service">Terms Of Service</MenuLink>
    </MenuGroup>
  );

  if (data?.me) {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {data.me.username || data.me.email}
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuLink link="/my-account">My Account</MenuLink>
          </MenuGroup>
          <MenuDivider />
          {helpSection}
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    );
  }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Create an account
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuLink link="/login">Login</MenuLink>
          <MenuLink link="/register">Register</MenuLink>
        </MenuGroup>
        <MenuDivider />
        {helpSection}
        <MenuLink link="/forgot-password">Forgot Password</MenuLink>
      </MenuList>
    </Menu>
  );
};
export default ProfileMenu;

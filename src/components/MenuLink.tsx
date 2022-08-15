import { MenuItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface MenuLinkProps {
  children: React.ReactNode;
  link: string;
}

export const MenuLink: React.FC<MenuLinkProps> = ({ link, children }) => {
  const router = useRouter();
  return (
    <MenuItem
      onClick={() => {
        router.push(link);
      }}
    >
      {children}
    </MenuItem>
  );
};

"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/user/userSlice";
import Link from "next/link";

export default function AvatarDropdown() {
  const user = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Dropdown isOpen={isOpen} placement="bottom-end">
      <DropdownTrigger
        onMouseEnter={() => {
          setIsOpen(true);
        }}
      >
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          name={user.data?.displayName}
          size="sm"
          src={user.data?.photoURL}
        />
      </DropdownTrigger>
      {user.isAuthenticated && (
        <DropdownMenu
          onMouseLeave={() => {
            setIsOpen(false);
          }}
          aria-label="Profile Actions"
          variant="flat"
        >
          <DropdownItem
            key="profile"
            textValue="profile"
            className="h-14 gap-2"
          >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user.data?.email}</p>
          </DropdownItem>
          <DropdownItem as={Link} href="/shortlist" key="shortlist">
            Your Shortlist
          </DropdownItem>
          <DropdownItem
            key="logout"
            textValue="logout"
            color="danger"
            onClick={handleLogout}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  );
}

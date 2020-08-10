import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SignedInMenu({setAuthenticated, signOut}) {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="Bob">
          <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus" />
              <Dropdown.Item text="My Profile" icon="user" />
              <Dropdown.Item onClick={signOut} text="Sign out" icon="power" />
          </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}

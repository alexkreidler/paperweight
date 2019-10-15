import React from "react";
import {
  Alignment,
  Button,
  Classes,
  // H5,
  Navbar,
  // NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  // Switch
} from "@blueprintjs/core";

export default function Header() {
  return (
    <Navbar>
      <NavbarGroup>
        <NavbarHeading>paperweight</NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button className={Classes.MINIMAL} icon="home" text="Home" />
        <Button className={Classes.MINIMAL} icon="document" text="Files" />
      </NavbarGroup>
    </Navbar>
  );
}

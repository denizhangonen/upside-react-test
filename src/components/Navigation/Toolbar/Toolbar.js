import React from "react";

import "./Toolbar.scss";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => (
  <header className="toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className="logo">
      <Logo />
    </div>
    <nav className="desktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;

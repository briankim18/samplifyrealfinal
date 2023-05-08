/*
* This sidebar and its accompanying css styling were constructed with help from the following resources:
* 
* 1. NPM Pro-React Sidebar Documentation : https://www.npmjs.com/package/react-pro-sidebar
* 2. Medium article about creating React sidebars: https://medium.com/how-to-react/create-a-sidebar-menu-in-react-js-3463b306ca9a 
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaList,
  FaRegHeart,
  FaMusic,
} from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
} from "react-icons/fi";
import "./Sidebar.css";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleMenuItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <>
      <div id="sidebar">
        <ProSidebar>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                icon={<FiHome />}
                className={selectedItemIndex === 0 ? "selected" : ""}
                onClick={() => handleMenuItemClick(0)}
              >
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem
                icon={<FaMusic />}
                className={selectedItemIndex === 1 ? "selected" : ""}
                onClick={() => handleMenuItemClick(1)}>
                <Link to="/chopify">Chopify</Link>
              </MenuItem>
              <MenuItem
                icon={<FaList />}
                className={selectedItemIndex === 2 ? "selected" : ""}
                onClick={() => handleMenuItemClick(2)}>
                <Link to="/history">History</Link>
              </MenuItem>
              <MenuItem
                icon={<FaRegHeart />}
                className={selectedItemIndex === 3 ? "selected" : ""}
                onClick={() => handleMenuItemClick(3)}>
                <Link to="/favorites">Favorites</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;

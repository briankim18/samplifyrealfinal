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
                icon={<FaList />}
                className={selectedItemIndex === 1 ? "selected" : ""}
                onClick={() => handleMenuItemClick(1)}
              >
                <Link to="/history">History</Link>
              </MenuItem>
              <MenuItem
                icon={<FaRegHeart />}
                className={selectedItemIndex === 2 ? "selected" : ""}
                onClick={() => handleMenuItemClick(2)}
              >
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

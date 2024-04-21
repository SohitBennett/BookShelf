import { Flex, Menu } from "antd";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { UserOutlined, ProfileOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined} from "@ant-design/icons";

import { Link } from "react-router-dom";

const Sidebar = () => {

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("userInfo");
      window.location.href = "/"; 
    }
  };

  return (
    <>
      {/* <Flex align="center" justify="center">
        <div className="logo">
          <FaBookOpen />
        </div>
      </Flex> */}

      {/* <Flex align="center" justify="center">
        <div className="logo">
          <FaBookOpen />
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookmark</span>
          </Link>
        </div>
      </Flex> */}

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          { key: "1", icon: <UserOutlined />, label: "Dashboard" },
          { key: "2", icon: <CarryOutOutlined />, label: "My Books" },
          { key: "3", icon: <OrderedListOutlined />, label: "To Read" },
          { key: "4", icon: <ProfileOutlined />, label: "Profile" },
          { key: "5", icon: <SettingOutlined />, label: "Settings" },
          { key: "6", icon: <LogoutOutlined />, label: "Logout", onClick: handleLogout },
        ]}
      />
    </>
  );
};

export default Sidebar;

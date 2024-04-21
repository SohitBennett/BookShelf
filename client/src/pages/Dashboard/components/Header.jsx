import {Avatar, Flex, Typography } from "antd";
import React from "react";
import Search from 'antd/es/input/Search';
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { useUserContext } from "../../../userContext";
import axios from "axios";
import { useEffect, useState } from 'react';

const CustomHeader = () => {
  // const { userName } = useUserContext();
  const [userInfo, setUserInfo] = useState({});
  const { userName, setUserName } = useUserContext();
  const { email, setEmail } = useUserContext();
  
  useEffect(() => {
    
    const userInfoFromStorage = localStorage.getItem("userInfo");
  
    if (userInfoFromStorage) {
      try {

        const tokenParts = userInfoFromStorage.split('.');
        const encodedPayload = tokenParts[1];
        const decodedPayload = atob(encodedPayload);
        const parsedPayload = JSON.parse(decodedPayload);
  
        setUserInfo(parsedPayload);
  
        console.log(parsedPayload.email);
        const email = parsedPayload.email;
        setEmail(email);
        axios.post('http://localhost:3001/userName', {
          email
        })
        .then((response) => {
          const data = response.data;
          // console.log(data);
          setUserName(data.name);
        })
      } catch (error) {
        console.error("Error parsing userInfo:", error);
      }
    }
  }, [setUserName, setEmail]);


    return (
      <Flex align="center" justify="space-between">
        

      <Typography.Title level={3} type="secondary" style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px', color: '#888' }}>
        Hello, {userName}
      </Typography.Title>


        <Flex align="center" gap="3rem">
          <Search placeholder="Search Dashboard" allowClear />
          <Flex align="center" gap="10px">
            <MessageOutlined className="header-icon" />
            <NotificationOutlined className="header-icon" />
            <Avatar icon={<UserOutlined />} />
          </Flex>
        </Flex>
      </Flex>
    );
};

export default CustomHeader;
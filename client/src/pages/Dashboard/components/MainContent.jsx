import { Flex } from 'antd';
import React from "react";
import Banner from './Banner';
import ProductLists from './Products';
import Sellers from './Sellers';
import { useState } from "react";


const MainContent = () => {
  
  return (
    
    <div style={{ flex: 1 }}>
          <Flex vertical gap="2.3rem">
              {/* <Banner /> */}
              
              <ProductLists />
              <Sellers />
      </Flex>
    </div>
  );
};

export default MainContent;

import {Button, Card, Flex, Typography } from "antd";
import React from "react";

const Banner = () => {
  return (
    <Card style={{ height: 260, padding: "20px" }}>
      <Flex vertical gap="30px">
        <Flex vertical align="Flex-start">
          <Typography.Title level={2} strong>
            Review Books
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            provident recusandae corporis corrupti nulla? Tempora?
          </Typography.Text>
        </Flex>
        <Flex gap='large'>
          <Button type="primary" size="large">
            Explore More
          </Button>
          <Button size='large'>Top Sellers</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;

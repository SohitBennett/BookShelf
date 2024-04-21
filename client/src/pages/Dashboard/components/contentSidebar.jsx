import { Card, Flex, Typography, Image } from "antd";
import React from "react";
import book1 from "../assets/book1.jpeg";

const ContentSidebar = () => {
  return (
    <div>
      <Card className="card">
        <Flex vertical gap="large">
          <Typography.Title level={4} strong>
            Today <br /> 5 Books Rated
          </Typography.Title>
          <Typography.Title level={4} strong>
            Month's Rating <br /> 243
          </Typography.Title>
        </Flex>
        <Image
          src={book1}
          alt="book"
          style={{
            position: "absolute",
            bottom: 0,
            left: 170,
            height: "200px",
            width: "auto",
          }}
        ></Image>
      </Card>
    </div>
  );
};

export default ContentSidebar;

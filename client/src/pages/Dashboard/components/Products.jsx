import { Card, Button, Flex, Typography, Image } from "antd";
import React from "react";
import bookData from "../bookData";

const { Meta } = Card;
const ProductLists = () => {
  return (
    <>
      <Flex align="center" justify="space-between">
        <Typography.Title level={3} string className="primary--color">
          My Books
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>
      <Flex align="center" gap="large">
        {bookData.map((book) => (
          <Card key={book.id} hoverable className="book-card">
                <Image src={book.picture} style={{ width: "130px" }} />
                <Meta title={book.name} style={{marginTop:'1rem'}} />
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default ProductLists;

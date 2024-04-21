import { Card, Button, Flex, Typography, Image } from "antd";
import React from "react";
import bookData from "../bookData";

const { Meta } = Card;
const Sellers = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex vertical="column" gap="small" className="top-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Top Seller Books
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" gap="large">
            {bookData.map((book) => (
              <Card key={book.id} hoverable className="book-card">
                <Image src={book.picture} style={{ width: "130px" }} />
                <Meta title={book.name} style={{ marginTop: "1rem" }} />
              </Card>
            ))}
          </Flex>
        </Card>

        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Featured Books
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" gap="large">
            {bookData.map((book) => (
              <Card key={book.id} hoverable className="book-card">
                <Image src={book.picture} style={{ width: "130px" }} />
                <Meta title={book.name} style={{ marginTop: "1rem" }} />
              </Card>
            ))}
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Sellers;

import React from "react";
import { Flex, Typography, Button } from 'antd';

const Activity = () => {
    return (
        <Flex vertical gap='small'>
            <Flex align="center" justify="space-between" gap='large'>
                <Typography.Title level={3} strong className="primary--color">
                    Recent Activity
                </Typography.Title>
                <Button type='link' className='gray--color'>
                    View All
                </Button>
            </Flex>
        </Flex>
    )
}

export default Activity;
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';

const NotFound = () => {
    return (
        <Flex
        scrollBehavior={"smooth"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        margin={"auto"}
        color={"#3596d5"}
        height={"100vh"}
        >
            <Text fontSize={100}>404</Text>
            <RiErrorWarningFill size={100} />
        </Flex>
    );
};

export default NotFound;
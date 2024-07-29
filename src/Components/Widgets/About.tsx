import { Text, VStack } from '@chakra-ui/react';

const About = () => {
    return (
        <VStack gap={"0.75rem"} alignItems={"start"}>
            <Text
            fontSize={"1.25rem"}
            lineHeight={"1.75rem"}
            fontWeight={700}
            fontFamily={"Inter"}
            >
                About
            </Text>
            <Text
            fontSize={"0.875rem"}
            fontWeight={400}
            lineHeight={"1.25rem"}
            fontFamily={"JetBrains Mono"}
            >
            As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide.
            </Text>
        </VStack>
    );
};

export default About;
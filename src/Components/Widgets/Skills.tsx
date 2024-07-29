import { Flex, Text, VStack } from '@chakra-ui/react';


const Skills = () => {
    const skills = [
        "JavaScript",
        "TypeScript",
        "React/Next.js/Remix",
        "Node.js",
        "GraphQL",
        "REST API",
        "Websocket",
    ];

    return (
       <VStack alignItems={"start"} >
        <Text 
        fontSize={"1.25rem"}
        lineHeight={"1.75rem"}
        fontWeight={700}
        fontFamily={"Inter"}
        
        >
        Skills
        </Text>
        <Flex gap={1} flexWrap={"wrap"}>
        {
            skills.map((skill) => (
                <Flex bgColor={"rgba(17, 24, 39, 0.796)"} key={skill} padding={1} borderRadius={"md"} fontFamily={"JetBrains Mono"} fontWeight={400} fontSize={"0.875rem"} lineHeight={"1.25rem"}
                color={"white"}
                >
                    {skill}
                </Flex>
            ))
        }
        </Flex>
       </VStack>
    );
};

export default Skills;
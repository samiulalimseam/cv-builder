import { Flex, Text, VStack } from "@chakra-ui/react";


const Education = () => {
  return (
    <VStack alignItems={"start"}>
      <Text
        fontSize={"1.25rem"}
        lineHeight={"1.75rem"}
        fontWeight={700}
        fontFamily={"Inter"}
      >
        Education
      </Text>
      <Flex width={"100%"} justifyContent={"space-between"}>
        <Text
          fontSize={"1rem"}
          lineHeight={"1.5rem"}
          fontWeight={600}
          fontFamily={"Inter"}
        >
          Wrocław University of Technology
        </Text>
        <Text
          fontSize={"0.875rem"}
          lineHeight={"1.25rem"}
          fontWeight={400}
          color={"gray.500"}
        >
          2016 - 2020
        </Text>
      </Flex>
      <Text
        fontSize={"0.875rem"}
        lineHeight={"1.25rem"}
        fontWeight={400}
        color={"gray.500"}
      >
        Bachelor's Degree in Control systems engineering and Robotics
      </Text>
    </VStack>
  );
};

export default Education;

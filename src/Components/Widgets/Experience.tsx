import { Box, Flex, Text, VStack } from "@chakra-ui/react";


const Experience = () => {
  const experiences = [
    {
      title: "Software Architect",
      company: "Film.io",
      date: "2024-Present",
      description:
        "Leading the development of the Film.io platform. Technologies: React, TypeScript, Node.js",
      mode: "remote",
    },
    {
      title: "Senior Full Stack Developer",
      company: "Parabol",
      date: "2021-2024",
      mode: "remote",
      description:
        "Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL",
    },

    {
      title: "Full Stack Developer",
      company: "Clevertech",
      date: "2015-2021",
      mode: "remote",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, and AAA. Built a live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
  ];
  return (
    <VStack gap={"0.75rem"} alignItems={"start"} justifyContent={"start"}>
      <Text fontWeight={700} fontSize={"1.25rem"} lineHeight={"1.75rem"}>
        Work Experience
      </Text>
      {experiences.map((experience) => (
        <Flex
        width={"100%"}
          key={experience.title}
          justifyContent={"space-between"}
          alignItems={"start"}
        >
          <Flex justifyContent={"space-between"} direction={"column"}  width={"100%"} alignItems={"start"}>
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Flex gap={2}>
                <Text
                  fontFamily={"Inter"}
                  fontWeight={600}
                  fontSize={"1rem"}
                  lineHeight={"1.5rem"}
                >
                  {experience.title}
                </Text>
                <Box
                  borderRadius={"md"}
                  padding={1}
                  backgroundColor={"rgba(243, 244, 246, 0.82)"}
                  fontFamily={"JetBrains Mono"}
                  fontWeight={400}
                  fontSize={"0.875rem"}
                  lineHeight={"1.25rem"}
                >
                  {experience.mode}
                </Box>
              </Flex>
              <Box>
                <Text
                  fontFamily={"JetBrains Mono"}
                  fontWeight={400}
                  fontSize={"0.875rem"}
                  lineHeight={"1.25rem"}
                >
                  {experience.date}
                </Text>
              </Box>
            </Flex>
            <Text
              fontFamily={"JetBrains Mono"}
              fontWeight={400}
              fontSize={"0.875rem"}
              lineHeight={"1.25rem"}
            >
              {experience.company}
            </Text>

            <Text
              fontFamily={"JetBrains Mono"}
              fontWeight={400}
              fontSize={"0.875rem"}
              lineHeight={"1.25rem"}
            >
              {experience.description}
            </Text>
          </Flex>
        </Flex>
      ))}
    </VStack>
  );
};

export default Experience;

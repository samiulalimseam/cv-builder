import { Box, Flex, Link, Text } from "@chakra-ui/react";


const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Parabol",
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      link: "https://www.parabol.co/",
      role: "Full Stack Developer",
      tech: ["React", "Node.Js", "TypeScript", "GraphQL"],
    },
    {
      id: 2,
      name: "Evercast",
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      link: "https://www.evercast.us/",
      role: "Full Stack Developer",
      tech: ["React", "Node.js", "TypeScript", "GraphQL"],
    },
    {
      id: 3,
      name: "Minimal",
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      link: "https://useminimal.com/",
      role: "Frontend Developer",
      tech: ["React", "TypeScript", "GraphQL"],
    },
  ];
  return (
    <Box>
      <Text fontWeight={700} fontSize={"1.25rem"} lineHeight={"1.75rem"}>
        Projects
      </Text>
      <Flex
        gap={"0.75rem"}
        alignItems={"start"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        {projects.map((project) => (
          <Flex

            borderRadius={"md"}
            padding={1}
            border={"1px solid rgba(243, 244, 246, 1)"}
            width={"230px"}
            key={project.id}
            justifyContent={"space-between"}
            alignItems={"start"}
          >
            <Flex
              justifyContent={"space-between"}
              direction={"column"}
              width={"100%"}
              alignItems={"start"}
            >
              <Flex
                direction={"column"}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Flex gap={2}>
                    <Link 
                    href={project.link} 
                    isExternal
                    >
                  <Text
                    fontFamily={"Inter"}
                    fontWeight={600}
                    fontSize={"1rem"}
                    lineHeight={"1.5rem"}
                    >
                    {project.name}
                  </Text>
                      </Link>
                  <Box
                    borderRadius={"md"}
                    padding={1}
                    backgroundColor={"rgba(243, 244, 246, 0.82)"}
                    fontFamily={"JetBrains Mono"}
                    fontWeight={400}
                    fontSize={"0.875rem"}
                  >
                    {project.role}
                  </Box>
                </Flex>
                <Text
                  fontFamily={"Inter"}
                  fontWeight={400}
                  fontSize={"0.875rem"}
                  lineHeight={"1.25rem"}
                >
                  {project.description}
                </Text>
              </Flex>
              <Flex flexWrap={"wrap"} gap={2}>
                {project.tech.map((tech) => (
                  <Box
                    key={tech}
                    padding={1}
                    borderRadius={"md"}
                    backgroundColor={"rgba(243, 244, 246, 0.82)"}
                    fontFamily={"JetBrains Mono"}
                    fontWeight={400}
                    fontSize={"0.875rem"}
                  >
                    {tech}
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;

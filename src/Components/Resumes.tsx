import { Button, Editable, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { BiDuplicate, BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import { FaDownload } from "react-icons/fa";
const resumes = [
  {
    name: "Resume 1",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    id: 1,
    previewUrl:
      "https://cdn.create.microsoft.com/catalog-assets/en-us/d68df550-2dce-4601-ac59-22b431043ee8/thumbnails/616/social-media-marketing-resume-blue-modern-simple-1-1-ec5f2f560fde.webp",
  },
  {
    name: "Resume 2",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    id: 2,
    previewUrl:
      "https://cdn.create.microsoft.com/catalog-assets/en-us/d68df550-2dce-4601-ac59-22b431043ee8/thumbnails/616/social-media-marketing-resume-blue-modern-simple-1-1-ec5f2f560fde.webp",
  },
  {
    name: "Resume 3",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    id: 3,
    previewUrl:
      "https://cdn.create.microsoft.com/catalog-assets/en-us/d68df550-2dce-4601-ac59-22b431043ee8/thumbnails/616/social-media-marketing-resume-blue-modern-simple-1-1-ec5f2f560fde.webp",
  },
  {
    name: "Resume 4",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    id: 4,
    previewUrl:
      "https://cdn.create.microsoft.com/catalog-assets/en-us/d68df550-2dce-4601-ac59-22b431043ee8/thumbnails/616/social-media-marketing-resume-blue-modern-simple-1-1-ec5f2f560fde.webp",
  },
];
const Resumes = () => {
  return (
    <Flex gap={4} flexWrap={"wrap"}>
      {resumes.map((resume) => (
        <Flex
          margin={"auto"}
          width={"290px"}
          backgroundColor={"white"}
          padding={4}
          borderRadius={"lg"}
          gap={2}
          key={resume.id}
        >
          <Image
            boxShadow={"lg"}
            width={"120px"}
            src={resume.previewUrl}
            alt={resume.name}
          />
          <VStack align={"start"}>
            <Text fontSize={"16px"} fontWeight={"bold"}>
              {resume.name}
            </Text>
            <Text color={"gray"} fontSize={"12px"}>
              Updated: {resume.createdAt}
            </Text>
            <Button
              width={"full"}
              justifyContent={"start"}
              gap={2}
              borderRadius={"none"}
              size={"xs"}
              variant={"ghost"}
              colorScheme={"gray"}
              fontWeight={"bold"}
            >
              {" "}
              <BiEditAlt /> Edit
            </Button>
            <Button
              width={"full"}
              justifyContent={"start"}
              gap={2}
              borderRadius={"none"}
              size={"xs"}
              variant={"ghost"}
              colorScheme={"gray"}
              fontWeight={"bold"}
            >
              {" "}
              <FaDownload /> Download PDF
            </Button>
            <Button
              width={"full"}
              justifyContent={"start"}
              gap={2}
              borderRadius={"none"}
              size={"xs"}
              variant={"ghost"}
              colorScheme={"gray"}
              fontWeight={"bold"}
            >
              {" "}
              <BiDuplicate /> Duplicate
            </Button>
            <Button
              width={"full"}
              justifyContent={"start"}
              gap={2}
              borderRadius={"none"}
              size={"xs"}
              variant={"ghost"}
              colorScheme={"gray"}
              fontWeight={"bold"}
            >
              {" "}
              <BsTrash /> Delete
            </Button>
          </VStack>
        </Flex>
      ))}
   
        <Button
          width={"290px"}
          height={"210px"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"lg"}
          colorScheme={"gray"}
          fontWeight={"bold"}
          fontSize={"24px"}
          variant={"ghost"}
          margin={"auto"}
          backgroundColor={"white"}
          color={"gray"}
          padding={4}
        >
          {" "}
          <CgAdd size={50} />
           Add New
        </Button>
     
    </Flex>
  );
};

export default Resumes;

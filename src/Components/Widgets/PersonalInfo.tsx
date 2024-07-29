import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { LiaLinkedin } from 'react-icons/lia';
const PersonalInfo = ({mutationProps}) => {
    const {boardItems, setBoardItems, templateId} = mutationProps
    const sectionData = boardItems?.find(item=> item?.id === "personal-information")
    const {skeleton: {name,highlightText, address}} = sectionData || {}
    return (
       <Flex justifyContent={"space-between"} >
        <VStack w={"70%"} justifyContent={"space-between"} alignItems={"start"}>
            <Text 
            fontFamily={"Inter"}
            fontWeight={700}
            fontSize={'1.5rem'}
            lineHeight={'2rem'}
            >{name}</Text>
            <Text 
            fontFamily={"JetBrains Mono"}
            fontWeight={700}
            fontSize={'0.875rem'}
            lineHeight={'1.25rem'}
            >{highlightText}</Text>
            <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
                <CiLocationOn />
                <Text>{address}</Text>
            </Flex>
            <HStack>
            <CiMail />
            <CiPhone />
            <BsGithub />
            <LiaLinkedin />
            <BsTwitter />
        </HStack>
        </VStack>
        <Box width={"20%"}>
        <img style={{
            borderRadius: "10px",
            width: "100%"
        }}  src='https://avatars.githubusercontent.com/u/69821457?v=4' />
        </Box>
       </Flex>
    );
};

export default PersonalInfo;
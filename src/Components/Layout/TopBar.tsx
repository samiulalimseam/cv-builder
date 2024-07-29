import {
  Avatar,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  WrapItem
} from "@chakra-ui/react";
import { useState } from "react";
import { isBrowser, isMobile, isTablet } from "react-device-detect";
import { IoChevronDownCircleOutline, IoDocumentText } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { TbPremiumRights } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const languages = ["en"];
const menuitems = [
    {name: "Dashboard", route: "/"},
    {name: "Get Premium", route: "/upgrade"},
    {name: "Account Settings", route: "/account-settings"},
    {name: "Contact us", route: "/contact-us"},
    {name: "Logout", route: "/"},
]
const TopBar = () => {
  const [language, setLanguage] = useState("en");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()
  console.log({isMobile, isBrowser, isTablet});
  return (
    <Flex bgColor={"white"} p={2} zIndex={"sticky"} gap={2} justifyContent={"space-between"}>
      <Flex gap={2} justifyContent={"center"} alignItems={"center"}>
        <IoDocumentText size={30} color={"#3596d5"} />
        <Text
          fontSize={"26px"}
          fontWeight={"bold"}
          fontFamily={"monospace"}
          color={"#3596d5"}
        >
          CVMAKR
        </Text>
      </Flex>
      
      <Flex  justifyContent={"center"} alignItems={"center"} gap={2}>
        <Button
        display={isMobile || isTablet ? "none" : "flex"}
          variant={"ghost"}
         
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={onOpen}
        >
          {" "}
          <Icon as={MdLanguage} />{" "}
          <Text textTransform={"capitalize"}>{language}</Text>
        </Button>
        <Button
          bgColor={"#3596d5"}
          color={"white"}
          display={"flex"}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"xl"}
          colorScheme="blue"
        >
          <TbPremiumRights size={30} color="gold" />
          Upgrade
        </Button>

        <Menu>
          <MenuButton
            m={0}
            variant={"ghost"}
            as={Button}
            rightIcon={<IoChevronDownCircleOutline />}
          >
            <WrapItem>
              <Avatar
                size={"sm"}
                name="Dan Abrahmov"
                src="#"
              />
            </WrapItem>
          </MenuButton>
          <MenuList >
            {menuitems.map((item) => (
              <MenuItem onClick={()=> {
                navigate(item?.route)
              }} fontWeight={"medium"} key={item.name}>{item.name}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select language</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {languages.map((lang) => (
              <Button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  onClose();
                }}
              >
                {lang}
              </Button>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default TopBar;
